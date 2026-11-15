import { Field, FieldLabel } from "@/components/ui/field"
import { Rating } from "@/components/ui/rating"

export function RatingBasic() {
  return (
    <Field>
      <FieldLabel>サポートの満足度</FieldLabel>
      <Rating name="satisfaction" defaultValue={4} />
    </Field>
  )
}
