import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerInBadge() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        同期中
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        審査待ち
      </Badge>
    </div>
  )
}
