import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Rating } from "@/components/ui/rating"

const comments = ["", "不満", "やや不満", "ふつう", "満足", "とても満足"]

export function RatingControlled() {
  const [score, setScore] = useState<number | null>(null)

  return (
    <Field>
      <FieldLabel>配送の対応はいかがでしたか</FieldLabel>
      <Rating
        name="deliveryScore"
        deselectable
        value={score}
        onValueChange={(value) => setScore(value)}
      />
      <FieldDescription>
        {score === null
          ? "星を押して評価してください。もう一度押すと取り消せます。"
          : comments[score]}
      </FieldDescription>
    </Field>
  )
}
