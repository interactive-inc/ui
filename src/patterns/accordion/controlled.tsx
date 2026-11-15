import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const steps = [
  {
    value: "account",
    title: "アカウントの作成",
    body: "管理者のメールアドレスで登録します。",
  },
  {
    value: "members",
    title: "メンバーの招待",
    body: "営業部と経理部の担当者を招待します。",
  },
  {
    value: "import",
    title: "顧客データの取り込み",
    body: "CSV で既存の顧客一覧を読み込みます。",
  },
]

export function AccordionControlled() {
  const [value, setValue] = useState<string[]>(["account"])

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Accordion
        multiple
        value={value}
        onValueChange={setValue}
        aria-label="導入の手順"
      >
        {steps.map((step) => (
          <AccordionItem key={step.value} value={step.value}>
            <AccordionTrigger>{step.title}</AccordionTrigger>
            <AccordionContent>{step.body}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="text-muted-foreground text-xs">
        {steps.length}つの手順のうち {value.length}つを表示中
      </p>
    </div>
  )
}
