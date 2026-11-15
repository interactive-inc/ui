import { CircleHelpIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipHelp() {
  return (
    <div className="flex items-center gap-1 text-sm">
      発注点 20個
      <Tooltip toggleable>
        <TooltipTrigger
          aria-label="発注点について"
          className={buttonVariants({ variant: "ghost", size: "icon-xs" })}
        >
          <CircleHelpIcon />
        </TooltipTrigger>
        <TooltipContent>在庫がこの数を下回ると自動で発注します</TooltipContent>
      </Tooltip>
    </div>
  )
}
