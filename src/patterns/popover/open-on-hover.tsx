import { buttonVariants } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverOpenOnHover() {
  return (
    <Popover openOnHover delay={300}>
      <PopoverTrigger className={buttonVariants({ variant: "ghost" })}>
        ポイント残高 1,240pt
      </PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>ポイントの内訳</PopoverTitle>
        </PopoverHeader>
        <dl className="grid grid-cols-[1fr_auto] gap-y-1">
          <dt className="text-muted-foreground">通常ポイント</dt>
          <dd className="tabular-nums">1,000pt</dd>
          <dt className="text-muted-foreground">期間限定(11月30日まで)</dt>
          <dd className="tabular-nums">240pt</dd>
        </dl>
      </PopoverContent>
    </Popover>
  )
}
