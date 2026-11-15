import { BellIcon, EyeOffIcon, PinIcon } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function ToggleOutline() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" size="sm" defaultPressed>
        <BellIcon data-icon="inline-start" />
        在庫切れを通知
      </Toggle>
      <Toggle variant="outline">
        <PinIcon data-icon="inline-start" />
        メモを固定
      </Toggle>
      <Toggle variant="outline" size="lg">
        <EyeOffIcon data-icon="inline-start" />
        原価を隠す
      </Toggle>
    </div>
  )
}
