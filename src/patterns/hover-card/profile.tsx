import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardProfile() {
  return (
    <div className="flex items-center gap-1 text-sm">
      担当:
      <HoverCard>
        <HoverCardTrigger
          href="#member-yamada"
          className={buttonVariants({ variant: "link", className: "px-1" })}
        >
          山田 花子
        </HoverCardTrigger>
        <HoverCardContent align="start">
          <div className="flex items-start gap-3">
            <Avatar size="lg" aria-hidden="true">
              <AvatarFallback>山</AvatarFallback>
            </Avatar>
            <div className="flex min-w-0 flex-col gap-1">
              <span className="font-medium">山田 花子</span>
              <span className="text-muted-foreground">カスタマーサポート</span>
              <span>内線 2104・平日 9:00〜18:00</span>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
