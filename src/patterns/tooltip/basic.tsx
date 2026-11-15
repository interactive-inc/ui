import { CopyIcon, PrinterIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipBasic() {
  return (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger
          aria-label="注文を複製"
          className={buttonVariants({ variant: "outline", size: "icon" })}
        >
          <CopyIcon />
        </TooltipTrigger>
        <TooltipContent>同じ内容で新しい注文を作ります</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          aria-label="納品書を印刷"
          className={buttonVariants({ variant: "outline", size: "icon" })}
        >
          <PrinterIcon />
        </TooltipTrigger>
        <TooltipContent>納品書を印刷します</TooltipContent>
      </Tooltip>
    </div>
  )
}
