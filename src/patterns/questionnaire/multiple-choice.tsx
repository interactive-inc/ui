import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

export function QuestionnaireMultipleChoice() {
  return (
    <Questionnaire
      onSubmit={(event) => event.preventDefault()}
      className="max-w-md"
    >
      <QuestionnaireItem name="channels" multiple>
        <QuestionnaireTitle>
          どの窓口を使ったことがありますか？
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          当てはまるものをすべて選んでください。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice
            value="chat"
            description="AI アシスタントとの会話を含みます"
          >
            チャット
          </QuestionnaireChoice>
          <QuestionnaireChoice value="email">メール</QuestionnaireChoice>
          <QuestionnaireChoice value="phone">電話</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnaireSubmit>窓口を回答する</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
