import { Separator } from "@/components/ui/separator"

export function SeparatorVertical() {
  return (
    <div className="flex h-5 items-center gap-4 text-sm">
      <span>担当 佐藤 美咲</span>
      <Separator orientation="vertical" />
      <span>納期 12月20日</span>
      <Separator orientation="vertical" />
      <span>予算 ¥3,200,000</span>
    </div>
  )
}
