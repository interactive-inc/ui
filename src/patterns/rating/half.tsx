import { Field, FieldLabel } from "@/components/ui/field"
import { Rating } from "@/components/ui/rating"

export function RatingHalf() {
  return (
    <Field orientation="horizontal" className="justify-between">
      <FieldLabel>商品の評価</FieldLabel>
      <Rating name="productScore" step={0.5} defaultValue={3.5} />
    </Field>
  )
}
