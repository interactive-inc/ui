import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireDescription,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

export function QuestionnaireTextInput() {
  return (
    <Questionnaire
      onSubmit={(event) => event.preventDefault()}
      className="max-w-md"
    >
      <QuestionnaireItem name="comment">
        <QuestionnaireTitle>改善してほしい点はありますか？</QuestionnaireTitle>
        <QuestionnaireDescription>
          空欄のままでも送れます。
        </QuestionnaireDescription>
        <QuestionnaireInput placeholder="例: 返信までの時間を短くしてほしい" />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnaireSubmit data-agent-confirm="改善してほしい点をサポートに送信します">
          送信する
        </QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
