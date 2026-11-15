import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

const assignees = [
  { id: "sato", name: "佐藤 美咲", role: "ディレクター", tasks: 4 },
  { id: "tanaka", name: "田中 健太", role: "エンジニア", tasks: 7 },
  { id: "suzuki", name: "鈴木 陽菜", role: "デザイナー", tasks: 2 },
]

export function ItemList() {
  return (
    <ul className="flex max-w-md flex-col">
      {assignees.map((person, index) => (
        <li key={person.id}>
          {index > 0 && <ItemSeparator />}
          <Item size="sm">
            <ItemMedia>
              <Avatar>
                <AvatarFallback>{person.name.slice(0, 1)}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{person.name}</ItemTitle>
              <ItemDescription>{person.role}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Badge variant="secondary">担当 {person.tasks}件</Badge>
            </ItemActions>
          </Item>
        </li>
      ))}
    </ul>
  )
}
