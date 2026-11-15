import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetBasic() {
  return (
    <Sheet>
      <SheetTrigger className={buttonVariants({ variant: "outline" })}>
        問い合わせの詳細
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>請求書の宛名変更について</SheetTitle>
          <SheetDescription>
            11月14日 10:24・株式会社みなと商事
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-6">
          <p>
            先月分の請求書の宛名を「株式会社みなと商事
            経理部」に変更して再発行していただけますか。
          </p>
          <p className="text-muted-foreground">担当: 山田 花子</p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
