import { render } from "@testing-library/react"
import { type AgentComponent, createAgent } from "@ui-sdk/react/agent"
import { expect, test } from "vitest"
import { categories } from "@/src/categories"
import { CategoryPage } from "@/src/category-page"
import { componentNames } from "@/src/component-docs"
import { ComponentPage } from "@/src/component-page"

const agent = createAgent({ allow: () => true })

/**
 * 人の確認が要る操作の文言。「送信のコードをコピー」のように途中に出てくるだけの名前は拾わず、
 * 「削除」「送信する」「メールを送る」のように、その動作で終わる名前だけを拾う
 */
const destructive =
  /(削除|送信|再送|支払い?|決済|購入|解約|退会|注文を確定|を送る)(する|します|しています)?$/

function isDestructive(name: string) {
  return destructive.test(name.replace(/[\s…。.]+$/u, ""))
}

/**
 * 直せなかったものだけを、理由を添えてここに書く。キーはページ、値は「種類:名前」
 */
const exceptions: Record<string, { reason: string; entries: string[] }[]> = {}

/**
 * ページに出ている部品をすべて集める。snapshot は 100 件で切れるので、種類ごとにも問い合わせる
 */
async function readPage() {
  const snapshot = agent.snapshot()
  const found = new Map<string, AgentComponent>()
  for (const entry of snapshot) {
    found.set(entry.ref, entry)
  }
  const kinds = new Set(snapshot.map((entry) => entry.component))
  kinds.delete("more")
  for (const kind of kinds) {
    const result = await agent.query({ kind })
    if (!Array.isArray(result)) {
      throw new Error(result.error)
    }
    for (const entry of result) {
      if (entry.component === "more") {
        throw new Error(`${kind} が 100 件を超えていて、すべてを読めない`)
      }
      found.set(entry.ref, entry)
    }
  }
  const rest = found.get("more")
  found.delete("more")
  if (
    rest !== undefined &&
    found.size < snapshot.length - 1 + Number(rest.more)
  ) {
    throw new Error("snapshot に載らない種類の部品があり、すべてを読めない")
  }
  // 前のページから外れた部品は offPage として残るので除く
  return [...found.values()].filter((entry) => entry.offPage !== true)
}

/**
 * 人やエージェントが操作する部品かどうか。表示だけの部品（Meter、Avatar など）は操作を持たない
 */
function isControl(entry: AgentComponent) {
  return entry.actions.length > 0 || entry.disabled === true
}

function nameOf(entry: AgentComponent) {
  return `${entry.component}:${entry.label ?? ""}`
}

/**
 * 重ねて出す部品を開くだけの要素。確認の印は、開いた先の確定ボタンに付ける
 */
function isTrigger(element: Element) {
  return (
    element.hasAttribute("aria-haspopup") ||
    (element.getAttribute("data-slot") ?? "").endsWith("trigger")
  )
}

/**
 * いま DOM にあるボタンのうち、破壊的な文言なのに確認の印がないものを返す
 */
function unconfirmedButtons() {
  const buttons = document.body.querySelectorAll(
    "button, [role=button], [role^=menuitem]",
  )
  const names: string[] = []
  for (const button of buttons) {
    const name = button.getAttribute("aria-label") ?? button.textContent ?? ""
    if (!isDestructive(name) || isTrigger(button)) {
      continue
    }
    if (button.closest("[data-agent-hidden]") !== null) {
      continue
    }
    if (button.closest("[data-agent-confirm]") === null) {
      names.push(`button:${name}`)
    }
  }
  return names
}

/**
 * 開くと中に操作部品が現れる部品。中身は開くまで DOM にないので、1つずつ開いて確かめる
 */
const overlays = new Set([
  "dialog",
  "alert-dialog",
  "drawer",
  "popover",
  "menu",
])

type Problems = {
  unnamed: string[]
  duplicated: string[]
  unconfirmed: string[]
}

/**
 * いま出ている操作部品から、名前のないもの、同じ種類で同じ名前のもの、確認の印がないものを集める
 */
function collect(controls: AgentComponent[], problems: Problems) {
  const counts = new Map<string, number>()
  for (const entry of controls) {
    if ((entry.label ?? "").trim() === "") {
      problems.unnamed.push(nameOf(entry))
      continue
    }
    counts.set(nameOf(entry), (counts.get(nameOf(entry)) ?? 0) + 1)
    if (
      entry.component === "button" &&
      entry.confirm === undefined &&
      isDestructive(entry.label ?? "")
    ) {
      problems.unconfirmed.push(nameOf(entry))
    }
  }
  for (const [name, count] of counts) {
    if (count > 1) {
      problems.duplicated.push(name)
    }
  }
  problems.unconfirmed.push(...unconfirmedButtons())
}

async function setOpen(ref: string, open: boolean) {
  const result = await agent.act({
    steps: [{ ref, action: "setOpen", args: [open] }],
  })
  if (!result.ok) {
    throw new Error(result.error?.message)
  }
}

/**
 * ページを読み、重ねて出す部品は1つずつ開いて中も読む。除外リストにあるものは分けて返す
 */
async function inspect(page: string) {
  const found: Problems = { unnamed: [], duplicated: [], unconfirmed: [] }
  const controls = (await readPage()).filter(isControl)
  collect(controls, found)

  for (const overlay of controls) {
    if (!overlays.has(overlay.component) || overlay.disabled === true) {
      continue
    }
    if (!overlay.actions.includes("setOpen")) {
      continue
    }
    await setOpen(overlay.ref, true)
    collect((await readPage()).filter(isControl), found)
    await setOpen(overlay.ref, false)
  }

  const allowed = (exceptions[page] ?? []).flatMap((item) => item.entries)
  const all = new Set([
    ...found.unnamed,
    ...found.duplicated,
    ...found.unconfirmed,
  ])

  return {
    unnamed: [...new Set(found.unnamed)].filter((e) => !allowed.includes(e)),
    duplicated: [...new Set(found.duplicated)].filter(
      (e) => !allowed.includes(e),
    ),
    unconfirmed: [...new Set(found.unconfirmed)].filter(
      (e) => !allowed.includes(e),
    ),
    // 直ったのに除外リストに残っているもの
    stale: allowed.filter((e) => !all.has(e)),
  }
}

const clean = { unnamed: [], duplicated: [], unconfirmed: [], stale: [] }

test.each(categories)(
  "$title のページをエージェントが迷わず操作できる",
  async (category) => {
    render(<CategoryPage slug={category.slug} />)

    expect(await inspect(`cases/${category.slug}`)).toEqual(clean)
  },
)

test.each(componentNames)(
  "%s の部品ページをエージェントが迷わず操作できる",
  async (name) => {
    render(<ComponentPage name={name} />)

    expect(await inspect(`components/${name}`)).toEqual(clean)
  },
)

test("除外リストには理由が書いてある", () => {
  for (const items of Object.values(exceptions)) {
    for (const item of items) {
      expect(item.reason.trim()).not.toBe("")
      expect(item.entries.length).toBeGreaterThan(0)
    }
  }
})
