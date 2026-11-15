import { buttonVariants } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const notices = [
  "注文 A-1025 が発送されました",
  "請求書 11月分が発行されました",
  "コピー用紙 A4 の在庫が残り3箱です",
]

export function DrawerSide() {
  return (
    <Drawer side="right" showSwipeHandle>
      <DrawerTrigger className={buttonVariants({ variant: "outline" })}>
        お知らせ
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>お知らせ</DrawerTitle>
          <DrawerDescription>新しいお知らせが3件あります。</DrawerDescription>
        </DrawerHeader>
        <ul className="flex flex-col gap-3 p-4">
          {notices.map((notice) => (
            <li key={notice}>{notice}</li>
          ))}
        </ul>
        <DrawerFooter>
          <DrawerClose className={buttonVariants({ variant: "outline" })}>
            閉じる
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
