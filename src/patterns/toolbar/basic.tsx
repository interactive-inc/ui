import { LinkIcon, PaperclipIcon, Redo2Icon, Undo2Icon } from "lucide-react"
import { Toolbar, ToolbarButton } from "@/components/ui/toolbar"

export function ToolbarBasic() {
  return (
    <Toolbar aria-label="返信文の編集">
      <ToolbarButton size="icon-sm" aria-label="元に戻す">
        <Undo2Icon />
      </ToolbarButton>
      <ToolbarButton size="icon-sm" aria-label="やり直す">
        <Redo2Icon />
      </ToolbarButton>
      <ToolbarButton>
        <LinkIcon data-icon="inline-start" />
        リンク
      </ToolbarButton>
      <ToolbarButton>
        <PaperclipIcon data-icon="inline-start" />
        添付
      </ToolbarButton>
    </Toolbar>
  )
}
