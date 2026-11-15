import { BadgeCheckIcon, ClockIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function BadgeWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="secondary">
        <BadgeCheckIcon data-icon="inline-start" />
        本人確認済み
      </Badge>
      <Badge variant="outline">
        <ClockIcon data-icon="inline-start" />
        返信待ち
      </Badge>
    </div>
  )
}
