import { CalendarDaysIcon, ColumnsIcon, ListIcon } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupAttached() {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="font-medium text-sm">問い合わせ一覧</span>
      <ToggleGroup
        variant="outline"
        size="sm"
        spacing={0}
        deselectable={false}
        defaultValue={["list"]}
        aria-label="表示形式"
      >
        <ToggleGroupItem value="list" aria-label="リスト">
          <ListIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="board" aria-label="ボード">
          <ColumnsIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="calendar" aria-label="カレンダー">
          <CalendarDaysIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
