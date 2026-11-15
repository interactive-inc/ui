import { buttonVariants } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDelay() {
  return (
    <HoverCard delay={700} closeDelay={300}>
      <HoverCardTrigger
        href="#supplier-sakura"
        className={buttonVariants({ variant: "link", className: "px-0" })}
      >
        さくら工業株式会社
      </HoverCardTrigger>
      <HoverCardContent side="top" align="start">
        <div className="flex flex-col gap-1">
          <span className="font-medium">さくら工業株式会社</span>
          <span className="text-muted-foreground">取引開始 2021年4月</span>
          <span>今年度の発注 24件・支払いは月末締め翌月末払い</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
