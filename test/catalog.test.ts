import { readdirSync, readFileSync } from "node:fs"
import { expect, test } from "vitest"
import { categories } from "@/src/categories"
import { componentDocs } from "@/src/component-docs"

const files = readdirSync("components/ui").map((file) =>
  file.replace(".tsx", ""),
)

const listed = categories.flatMap((category) => [...category.components])

test("components/ui の部品はどれか1つの分類にだけ属する", () => {
  expect([...listed].sort()).toEqual([...files].sort())
  expect(new Set(listed).size).toBe(listed.length)
})

test("すべての部品に説明がある", () => {
  expect(Object.keys(componentDocs).sort()).toEqual([...files].sort())
})

test("説明に書いた UI SDK のページは実在する", () => {
  const pages = readdirSync("node_modules/@ui-sdk/react/docs/components")
  for (const [name, doc] of Object.entries(componentDocs)) {
    if (doc.sdk === undefined) continue
    expect(pages, name).toContain(`${doc.sdk}.md`)
  }
})

test("デモがある部品はすべて分類に載っている", () => {
  const demos = readdirSync("src/demos").flatMap((file) =>
    [
      ...readFileSync(`src/demos/${file}`, "utf8").matchAll(
        /<Demo\s+name="([a-z-]+)"/g,
      ),
    ].map((m) => m[1]),
  )
  for (const name of demos) {
    expect(listed, name).toContain(name)
  }
})

test("すべての部品に使い方とパターンがある", () => {
  for (const name of files) {
    const dir = `src/patterns/${name}`
    expect(readdirSync("src/patterns"), name).toContain(name)
    const source = readFileSync(`${dir}/index.ts`, "utf8")
    const ids = [...source.matchAll(/id: "([^"]+)"/g)].map((match) => match[1])
    expect(ids.length, name).toBeGreaterThanOrEqual(3)
    expect(source, name).toContain("en:")
    const patternFiles = readdirSync(dir)
      .filter((file) => file.endsWith(".tsx"))
      .map((file) => file.replace(".tsx", ""))
    expect([...patternFiles].sort(), name).toEqual([...ids].sort())
  }
})

test("色のトークンの表は CSS の値と一致する", async () => {
  const { colorTokens } = await import("@/src/guidelines")
  const css = readFileSync("src/globals.css", "utf8")
  const [light, dark] = css.split(".dark {")
  for (const color of colorTokens) {
    for (const token of color.tokens) {
      expect(light, token).toContain(`--${token}: ${color.light};`)
      expect(dark, token).toContain(`--${token}: ${color.dark};`)
    }
  }
})
