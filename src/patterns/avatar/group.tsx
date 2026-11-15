import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"

const assignees = [
  { name: "中村 優", initial: "中" },
  { name: "小林 誠", initial: "小" },
  { name: "加藤 綾", initial: "加" },
]

export function AvatarGroupPattern() {
  return (
    <div className="flex items-center gap-3 text-sm">
      <AvatarGroup role="group" aria-label="問い合わせの担当者 5名">
        {assignees.map((assignee) => (
          <Avatar key={assignee.name} aria-label={assignee.name}>
            <AvatarFallback>{assignee.initial}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>+2</AvatarGroupCount>
      </AvatarGroup>
      <span className="text-muted-foreground">5名が対応中</span>
    </div>
  )
}
