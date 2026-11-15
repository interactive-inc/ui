import { ChevronRightIcon, FolderKanbanIcon } from "lucide-react"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const projects = [
  {
    id: "renewal",
    name: "コーポレートサイト改修",
    status: "実装中・納期 12月20日",
  },
  { id: "ec", name: "EC サイトの決済移行", status: "見積もり中" },
]

export function ItemAsLink() {
  return (
    <div className="flex max-w-md flex-col gap-2">
      {projects.map((project) => (
        <Item
          key={project.id}
          variant="outline"
          render={<a href={`#projects-${project.id}`} />}
        >
          <ItemMedia variant="icon">
            <FolderKanbanIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{project.name}</ItemTitle>
            <ItemDescription>{project.status}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" aria-hidden="true" />
          </ItemActions>
        </Item>
      ))}
    </div>
  )
}
