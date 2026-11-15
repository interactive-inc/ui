import { Field, FieldLabel } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const plans = [
  { value: "starter", label: "スターター", note: "5名まで・月額 3,300円" },
  { value: "business", label: "ビジネス", note: "50名まで・月額 22,000円" },
  {
    value: "enterprise",
    label: "エンタープライズ",
    note: "人数無制限・要見積もり",
  },
]

export function RadioGroupChoiceCard() {
  return (
    <Field>
      <FieldLabel>契約プラン</FieldLabel>
      <RadioGroup name="plan" defaultValue="business">
        {plans.map((plan) => (
          <Label
            key={plan.value}
            className="justify-between rounded-xl border p-4 has-data-checked:border-primary/30 has-data-checked:bg-primary/5"
          >
            <span className="flex flex-col gap-1">
              {plan.label}
              <span className="font-normal text-muted-foreground">
                {plan.note}
              </span>
            </span>
            <RadioGroupItem value={plan.value} />
          </Label>
        ))}
      </RadioGroup>
    </Field>
  )
}
