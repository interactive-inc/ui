import {
  ArchiveIcon,
  CheckIcon,
  TagIcon,
  TrashIcon,
  UserPlusIcon,
} from "lucide-react"
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
} from "@/components/ui/toolbar"

export function ToolbarGroups() {
  return (
    <Toolbar aria-label="選択した問い合わせの操作">
      <ToolbarGroup aria-label="対応">
        <ToolbarButton>
          <UserPlusIcon data-icon="inline-start" />
          担当を割り当て
        </ToolbarButton>
        <ToolbarButton>
          <CheckIcon data-icon="inline-start" />
          対応済みにする
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup aria-label="整理" disabled>
        <ToolbarButton size="icon-sm" aria-label="タグを付ける">
          <TagIcon />
        </ToolbarButton>
        <ToolbarButton size="icon-sm" aria-label="アーカイブする">
          <ArchiveIcon />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarButton
        size="icon-sm"
        aria-label="選択した問い合わせを削除"
        data-agent-confirm="選択した問い合わせを削除します"
      >
        <TrashIcon />
      </ToolbarButton>
    </Toolbar>
  )
}
