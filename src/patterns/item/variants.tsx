import { BellIcon } from "lucide-react"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export function ItemVariants() {
  return (
    <div className="flex max-w-md flex-col gap-2">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>outline</ItemTitle>
          <ItemDescription>
            枠線で区切る。一覧の中で1件を目立たせたいとき。
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted" size="sm">
        <ItemContent>
          <ItemTitle>muted・sm</ItemTitle>
          <ItemDescription>背景で区切る。補足の情報に向く。</ItemDescription>
        </ItemContent>
      </Item>
      <Item size="xs">
        <ItemMedia variant="icon">
          <BellIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>請求書の支払期限は明日です</ItemTitle>
        </ItemContent>
      </Item>
    </div>
  )
}
