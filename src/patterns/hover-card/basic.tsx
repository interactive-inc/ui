import { buttonVariants } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardBasic() {
  return (
    <p className="text-sm">
      ご質問の注文は
      <HoverCard>
        <HoverCardTrigger
          href="#order-a-1024"
          className={buttonVariants({ variant: "link", className: "px-1" })}
        >
          #A-1024
        </HoverCardTrigger>
        <HoverCardContent align="start">
          <div className="flex flex-col gap-1">
            <span className="font-medium">注文 #A-1024</span>
            <span className="text-muted-foreground">
              11月12日・株式会社みなと商事
            </span>
            <span>コピー用紙 A4 ほか2点・38,500円</span>
          </div>
        </HoverCardContent>
      </HoverCard>
      です。
    </p>
  )
}
