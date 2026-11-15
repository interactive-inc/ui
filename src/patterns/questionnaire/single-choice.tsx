import { useState } from "react"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

export function QuestionnaireSingleChoice() {
  const [answer, setAnswer] = useState<string | null>(null)

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Questionnaire onSubmit={(event) => event.preventDefault()}>
        <QuestionnaireItem
          name="satisfaction"
          required
          value={answer}
          onValueChange={setAnswer}
        >
          <QuestionnaireTitle>
            今回のサポートはいかがでしたか？
          </QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="good">満足</QuestionnaireChoice>
            <QuestionnaireChoice value="fair">ふつう</QuestionnaireChoice>
            <QuestionnaireChoice value="poor">不満</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>回答する</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {answer && (
        <p className="text-muted-foreground text-sm">回答: {answer}</p>
      )}
    </div>
  )
}
