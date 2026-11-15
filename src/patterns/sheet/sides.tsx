import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const sides = [
  { side: "top", label: "上から出す" },
  { side: "right", label: "右から出す" },
  { side: "bottom", label: "下から出す" },
  { side: "left", label: "左から出す" },
] as const

export function SheetSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {sides.map((item) => (
        <Sheet key={item.side}>
          <SheetTrigger className={buttonVariants({ variant: "outline" })}>
            {item.label}
          </SheetTrigger>
          <SheetContent side={item.side}>
            <SheetHeader>
              <SheetTitle>お知らせ</SheetTitle>
              <SheetDescription>
                11月20日 2:00〜4:00 にメンテナンスを行います。
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
