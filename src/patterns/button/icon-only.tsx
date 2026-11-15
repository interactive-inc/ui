import { CopyIcon, PencilIcon, TrashIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ButtonIconOnly() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="ghost" size="icon" aria-label="編集する">
        <PencilIcon />
      </Button>
      <Button variant="ghost" size="icon" aria-label="複製する">
        <CopyIcon />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="下書きを削除する"
        data-agent-confirm="この下書きを削除します"
      >
        <TrashIcon />
      </Button>
    </div>
  )
}
