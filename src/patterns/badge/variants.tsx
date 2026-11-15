import { Badge } from "@/components/ui/badge"

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>新着</Badge>
      <Badge variant="secondary">下書き</Badge>
      <Badge variant="outline">公開中</Badge>
      <Badge variant="destructive">期限切れ</Badge>
      <Badge variant="ghost">アーカイブ</Badge>
    </div>
  )
}
