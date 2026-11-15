import { buttonVariants } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

const placements = [
  { side: "top", label: "上に出す" },
  { side: "right", label: "右に出す" },
  { side: "bottom", label: "下に出す" },
  { side: "left", label: "左に出す" },
] as const

export function PopoverPlacement() {
  return (
    <div className="flex flex-wrap gap-2">
      {placements.map((placement) => (
        <Popover key={placement.side}>
          <PopoverTrigger className={buttonVariants({ variant: "outline" })}>
            {placement.label}
          </PopoverTrigger>
          <PopoverContent side={placement.side} align="start" className="w-56">
            <PopoverTitle>営業時間</PopoverTitle>
            <p>平日 9:00〜18:00(土日祝は休み)</p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
