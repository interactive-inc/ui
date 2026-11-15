import { FolderPlusIcon, UploadIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyWithAction() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderPlusIcon />
        </EmptyMedia>
        <EmptyTitle>まだプロジェクトがありません</EmptyTitle>
        <EmptyDescription>
          新しく作るか、ほかのツールから取り込んで始めましょう。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center">
        <Button>プロジェクトを作成</Button>
        <Button variant="outline">
          <UploadIcon data-icon="inline-start" />
          取り込む
        </Button>
      </EmptyContent>
    </Empty>
  )
}
