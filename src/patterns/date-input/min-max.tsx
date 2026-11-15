import { format, parseISO } from "date-fns"
import { ja } from "date-fns/locale"
import { useState } from "react"
import { DateInput } from "@/components/ui/date-input"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

export function DateInputMinMax() {
  const [date, setDate] = useState<string | null>("2026-11-20")

  return (
    <Field>
      <FieldLabel>お届け希望日</FieldLabel>
      <DateInput
        name="deliveryDate"
        locale="ja-JP"
        min="2026-11-17"
        max="2026-12-15"
        value={date}
        onValueChange={(value) => setDate(value)}
      />
      <FieldDescription>
        {date === null
          ? "11月17日から12月15日までの日付を入力してください。"
          : `${format(parseISO(date), "M月d日(E)", { locale: ja })}にお届けします。`}
      </FieldDescription>
    </Field>
  )
}
