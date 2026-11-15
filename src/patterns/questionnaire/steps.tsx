import { useState } from "react"
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

export function QuestionnaireSteps() {
  const [current, setCurrent] = useState("resolved")
  const [sent, setSent] = useState(false)

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Questionnaire
        item={current}
        onItemChange={setCurrent}
        shortcuts="numbers"
        onSubmit={(event) => {
          event.preventDefault()
          setSent(true)
        }}
      >
        <QuestionnaireProgress />
        <QuestionnaireItem name="resolved" required>
          <QuestionnaireTitle>お困りごとは解決しましたか？</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="yes">解決した</QuestionnaireChoice>
            <QuestionnaireChoice value="partly">
              一部は解決した
            </QuestionnaireChoice>
            <QuestionnaireChoice value="no">解決していない</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="speed">
          <QuestionnaireTitle>返信の速さはどうでしたか？</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="fast">速かった</QuestionnaireChoice>
            <QuestionnaireChoice value="ok">ちょうどよい</QuestionnaireChoice>
            <QuestionnaireChoice value="slow">遅かった</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireItem name="comment">
          <QuestionnaireTitle>ほかにご意見があればどうぞ</QuestionnaireTitle>
          <QuestionnaireInput />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireSkip />
          <QuestionnaireNext />
          <QuestionnaireSubmit data-agent-confirm="サポートについての回答を送信します">
            回答を送信
          </QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      <p className="text-muted-foreground text-sm">
        {sent ? "ご回答ありがとうございました" : `表示中の質問: ${current}`}
      </p>
    </div>
  )
}
