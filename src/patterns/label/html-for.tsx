import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function LabelHtmlFor() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4">
      <Label htmlFor="label-maintenance">メンテナンス中の表示</Label>
      <Switch id="label-maintenance" />
    </div>
  )
}
