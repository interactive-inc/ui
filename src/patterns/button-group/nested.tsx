import {
  ArchiveIcon,
  ForwardIcon,
  ReplyAllIcon,
  ReplyIcon,
  TrashIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupNested() {
  return (
    <ButtonGroup aria-label="問い合わせへの対応">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          <ReplyIcon data-icon="inline-start" />
          返信
        </Button>
        <Button variant="outline" size="sm">
          <ReplyAllIcon data-icon="inline-start" />
          全員に返信
        </Button>
        <Button variant="outline" size="sm">
          <ForwardIcon data-icon="inline-start" />
          転送
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="アーカイブする">
          <ArchiveIcon />
        </Button>
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="問い合わせを削除する"
          data-agent-confirm="この問い合わせを削除します"
        >
          <TrashIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
