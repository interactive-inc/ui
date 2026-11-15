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

export function DrawerBasic() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger className={buttonVariants({ variant: "outline" })}>
        受け取り方法
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>店舗で受け取る</DrawerTitle>
          <DrawerDescription>
            渋谷店で11月17日(火) 11:00 から受け取れます。
          </DrawerDescription>
        </DrawerHeader>
        <p className="p-4">受け取りには注文番号 A-1024 を伝えてください。</p>
        <DrawerFooter>
          <DrawerClose className={buttonVariants()}>わかりました</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
