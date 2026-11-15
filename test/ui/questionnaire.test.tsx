import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createAgent } from "@ui-sdk/react/agent"
import { expect, test, vi } from "vitest"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"
import { ContentDemos } from "@/src/demos/content"
import { DemoBoard } from "@/src/demos/demo"

type Handlers = {
  onResolved?: (value: string | null, details: { source: string }) => void
  onChannels?: (value: string[], details: { source: string }) => void
  onComment?: (value: string | null, details: { source: string }) => void
  onSubmit?: (data: [string, string][]) => void
}

function Survey(props: Handlers) {
  return (
    <Questionnaire
      shortcuts="numbers"
      onSubmit={(event) => {
        event.preventDefault()
        props.onSubmit?.(
          Array.from(new FormData(event.currentTarget), ([key, value]) => [
            key,
            String(value),
          ]),
        )
      }}
    >
      <QuestionnaireProgress />
      <QuestionnaireItem
        name="resolved"
        required
        onValueChange={props.onResolved}
      >
        <QuestionnaireTitle>お困りごとは解決しましたか？</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="yes">解決した</QuestionnaireChoice>
          <QuestionnaireChoice value="no" description="担当者が折り返します">
            解決していない
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireItem
        name="channels"
        multiple
        onValueChange={props.onChannels}
      >
        <QuestionnaireTitle>使った窓口</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="chat">チャット</QuestionnaireChoice>
          <QuestionnaireChoice value="email">メール</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireItem name="comment" onValueChange={props.onComment}>
        <QuestionnaireTitle>ご意見</QuestionnaireTitle>
        <QuestionnaireInput />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext />
        <QuestionnaireSubmit />
      </QuestionnaireActions>
    </Questionnaire>
  )
}

test("a choice is found by its label and reports the answer", async () => {
  const onResolved = vi.fn()
  render(<Survey onResolved={onResolved} />)

  const group = screen.getByRole("radiogroup", {
    name: "お困りごとは解決しましたか？",
  })
  const choice = within(group).getByRole("radio", { name: "解決していない" })
  expect(choice.getAttribute("aria-describedby")).toBeTruthy()

  await userEvent.click(screen.getByText("担当者が折り返します"))

  expect(onResolved).toHaveBeenLastCalledWith(
    "no",
    expect.objectContaining({ reason: "item-press" }),
  )
  expect(choice.getAttribute("aria-checked")).toBe("true")
})

test("required questions block the next step until answered", async () => {
  render(<Survey />)

  await userEvent.click(screen.getByRole("button", { name: "次へ" }))

  expect(screen.getByRole("alert").textContent).toBe(
    "回答してから進んでください。",
  )
  expect(screen.getByRole("progressbar").textContent).toBe("質問 1 / 3")

  await userEvent.click(screen.getByRole("radio", { name: "解決した" }))
  expect(screen.queryByRole("alert")).toBe(null)

  await userEvent.click(screen.getByRole("button", { name: "次へ" }))

  expect(screen.getByRole("progressbar").textContent).toBe("質問 2 / 3")
  expect(screen.getByRole("group", { name: "使った窓口" })).toBeTruthy()
  expect(screen.queryByRole("radiogroup")).toBe(null)
})

test("answers travel through onValueChange and the form", async () => {
  const onChannels = vi.fn()
  const onComment = vi.fn()
  const onSubmit = vi.fn()
  render(
    <Survey
      onChannels={onChannels}
      onComment={onComment}
      onSubmit={onSubmit}
    />,
  )

  await userEvent.keyboard("{Tab}2")
  expect(
    screen
      .getByRole("radio", { name: "解決していない" })
      .getAttribute("aria-checked"),
  ).toBe("true")
  await userEvent.keyboard("{Enter}")

  await userEvent.click(screen.getByRole("checkbox", { name: "チャット" }))
  await userEvent.click(screen.getByRole("checkbox", { name: "メール" }))
  expect(onChannels).toHaveBeenLastCalledWith(
    ["chat", "email"],
    expect.objectContaining({ reason: "item-press" }),
  )
  await userEvent.click(screen.getByRole("button", { name: "次へ" }))

  await userEvent.type(screen.getByRole("textbox", { name: "ご意見" }), "早い")
  expect(onComment).toHaveBeenLastCalledWith(
    "早い",
    expect.objectContaining({ reason: "input-change" }),
  )
  await userEvent.click(screen.getByRole("button", { name: "送信" }))

  expect(onSubmit).toHaveBeenCalledWith([
    ["resolved", "no"],
    ["channels", "chat"],
    ["channels", "email"],
    ["comment", "早い"],
  ])
})

test("skipping clears the answer and leaves it out of the form", async () => {
  const onChannels = vi.fn()
  const onSubmit = vi.fn()
  render(<Survey onChannels={onChannels} onSubmit={onSubmit} />)

  await userEvent.click(screen.getByRole("radio", { name: "解決した" }))
  await userEvent.click(screen.getByRole("button", { name: "次へ" }))
  await userEvent.click(screen.getByRole("checkbox", { name: "チャット" }))
  await userEvent.click(screen.getByRole("button", { name: "スキップ" }))

  expect(onChannels).toHaveBeenLastCalledWith(
    [],
    expect.objectContaining({ reason: "imperative" }),
  )

  await userEvent.click(screen.getByRole("button", { name: "スキップ" }))

  await vi.waitFor(() =>
    expect(onSubmit).toHaveBeenCalledWith([["resolved", "yes"]]),
  )
})

test("an agent answers every question by title and choice label", async () => {
  const agent = createAgent()
  const onResolved = vi.fn()
  const onSubmit = vi.fn()
  render(<Survey onResolved={onResolved} onSubmit={onSubmit} />)

  const question = agent
    .snapshot()
    .find((component) => component.label === "お困りごとは解決しましたか？")
  expect(question).toMatchObject({
    component: "radio",
    actions: ["setValue"],
    items: [
      { value: "yes", label: "解決した" },
      { value: "no", label: "解決していない" },
    ],
  })

  const result = await agent.act({
    steps: [
      {
        ref: "お困りごとは解決しましたか？",
        action: "setValue",
        args: ["解決していない"],
      },
      { ref: "次へ", action: "press" },
      { ref: "メール", action: "setChecked", args: [true] },
      { ref: "次へ", action: "press" },
      { ref: "ご意見", action: "setValue", args: ["助かりました"] },
      { ref: "送信", action: "press" },
    ],
  })

  expect(result).toMatchObject({ ok: true })
  expect(onResolved).toHaveBeenLastCalledWith(
    "no",
    expect.objectContaining({ source: "agent" }),
  )
  await vi.waitFor(() =>
    expect(onSubmit).toHaveBeenCalledWith([
      ["resolved", "no"],
      ["channels", "email"],
      ["comment", "助かりました"],
    ]),
  )
})

test("the demo collects answers from choices and text", async () => {
  render(
    <DemoBoard>
      <ContentDemos />
    </DemoBoard>,
  )

  const group = await screen.findByRole("radiogroup", {
    name: "一次面接はどの形式を希望しますか？",
  })
  await userEvent.click(
    within(group).getByRole("radio", { name: "オンライン" }),
  )
  await userEvent.click(screen.getByRole("button", { name: "次の質問へ" }))
  await userEvent.click(screen.getByRole("checkbox", { name: "平日 午後" }))
  await userEvent.click(screen.getByRole("button", { name: "次の質問へ" }))
  await userEvent.type(
    screen.getByRole("textbox", {
      name: "面接前に確認したいことはありますか？",
    }),
    "服装",
  )
  await userEvent.click(screen.getByRole("button", { name: "回答を送信" }))

  expect(
    screen.getByText(
      "回答を受け付けました（面接形式: オンライン、希望時間帯: 平日 午後、事前の質問: 服装）",
    ),
  ).toBeTruthy()
})
