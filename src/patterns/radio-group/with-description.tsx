import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const options = [
  { value: "standard", label: "通常配送", note: "3〜5日でお届け・送料無料" },
  { value: "express", label: "お急ぎ便", note: "翌日お届け・送料550円" },
  {
    value: "pickup",
    label: "店舗受け取り",
    note: "準備ができたらメールでお知らせ",
  },
]

export function RadioGroupWithDescription() {
  return (
    <Field>
      <FieldLabel>配送方法</FieldLabel>
      <FieldDescription>注文後は変更できません。</FieldDescription>
      <RadioGroup name="shipping" defaultValue="standard">
        {options.map((option) => (
          <Label key={option.value} className="items-start">
            <RadioGroupItem value={option.value} />
            <span className="flex flex-col gap-1">
              {option.label}
              <span className="font-normal text-muted-foreground">
                {option.note}
              </span>
            </span>
          </Label>
        ))}
        <Label>
          <RadioGroupItem value="locker" disabled />
          宅配ロッカー(この地域では使えません)
        </Label>
      </RadioGroup>
    </Field>
  )
}
