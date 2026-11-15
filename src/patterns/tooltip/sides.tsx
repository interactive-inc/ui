import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const sides = [
  { side: "top", label: "上" },
  { side: "right", label: "右" },
  { side: "bottom", label: "下" },
  { side: "left", label: "左" },
] as const

export function TooltipSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {sides.map((item) => (
        <Tooltip key={item.side}>
          <TooltipTrigger className={buttonVariants({ variant: "outline" })}>
            {item.label}に出す
          </TooltipTrigger>
          <TooltipContent side={item.side}>
            {item.label}に説明が出ます
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
