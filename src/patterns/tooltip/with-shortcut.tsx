import { SaveIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipShortcut,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipWithShortcut() {
  return (
    <Tooltip shortcut="mod+s">
      <TooltipTrigger
        aria-label="下書きを保存"
        className={buttonVariants({ variant: "outline", size: "icon" })}
      >
        <SaveIcon />
      </TooltipTrigger>
      <TooltipContent>
        下書きを保存
        <TooltipShortcut />
      </TooltipContent>
    </Tooltip>
  )
}
