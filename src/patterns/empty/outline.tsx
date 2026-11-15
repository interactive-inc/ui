import { ImageIcon } from "lucide-react"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyOutline() {
  return (
    <Empty className="border p-8">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ImageIcon />
        </EmptyMedia>
        <EmptyTitle>商品画像がありません</EmptyTitle>
        <EmptyDescription>
          画像を追加すると、商品ページの先頭に表示されます。
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
