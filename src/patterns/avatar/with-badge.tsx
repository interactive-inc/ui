import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar"

const members = [
  { name: "田中 真理", initial: "田", online: true },
  { name: "伊藤 翔", initial: "伊", online: false },
]

export function AvatarWithBadge() {
  return (
    <ul className="flex flex-col gap-3">
      {members.map((member) => (
        <li key={member.name} className="flex items-center gap-3 text-sm">
          <Avatar size="lg" aria-hidden="true">
            <AvatarFallback>{member.initial}</AvatarFallback>
            {member.online && <AvatarBadge className="bg-green-600" />}
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">{member.name}</span>
            <span className="text-muted-foreground text-xs">
              {member.online ? "対応できます" : "離席中"}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
