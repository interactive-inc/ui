import { Rating } from "@/components/ui/rating"

export function RatingReadOnly() {
  return (
    <div className="flex items-center gap-3">
      <Rating aria-label="平均評価" readOnly value={4.3} />
      <span className="text-sm">
        4.3
        <span className="ml-1 text-muted-foreground">(レビュー 128件)</span>
      </span>
    </div>
  )
}
