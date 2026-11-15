import { Badge } from "@/components/ui/badge"

export function BadgeAsLink() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="outline" render={<a href="#billing" />}>
        請求
      </Badge>
      <Badge variant="outline" render={<a href="#shipping" />}>
        配送
      </Badge>
      <Badge variant="outline" render={<a href="#account" />}>
        アカウント
      </Badge>
    </div>
  )
}
