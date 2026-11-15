import { FileTextIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export function ItemBasic() {
  return (
    <Item variant="outline" className="max-w-md">
      <ItemMedia variant="icon">
        <FileTextIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>見積書_コーポレートサイト改修.pdf</ItemTitle>
        <ItemDescription>佐藤 美咲が11月12日に更新・2.4MB</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          開く
        </Button>
      </ItemActions>
    </Item>
  )
}
