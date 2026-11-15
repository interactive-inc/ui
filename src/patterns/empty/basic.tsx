import { InboxIcon } from "lucide-react"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyBasic() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>お問い合わせはありません</EmptyTitle>
        <EmptyDescription>
          新しいお問い合わせが届くと、ここに表示されます。
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
