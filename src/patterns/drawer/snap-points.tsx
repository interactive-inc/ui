import { buttonVariants } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const stores = [
  { name: "渋谷店", detail: "徒歩5分・在庫あり" },
  { name: "新宿店", detail: "徒歩12分・在庫あり" },
  { name: "池袋店", detail: "電車で15分・取り寄せ" },
  { name: "品川店", detail: "電車で20分・在庫あり" },
  { name: "上野店", detail: "電車で25分・取り寄せ" },
]

export function DrawerSnapPoints() {
  return (
    <Drawer snapPoints={[0.5, 1]} showSwipeHandle>
      <DrawerTrigger className={buttonVariants({ variant: "outline" })}>
        近くの店舗を探す
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>近くの店舗</DrawerTitle>
          <DrawerDescription>
            上に引き上げると全件を見られます。
          </DrawerDescription>
        </DrawerHeader>
        <ul className="flex flex-col divide-y overflow-y-auto p-4">
          {stores.map((store) => (
            <li key={store.name} className="flex flex-col py-2">
              <span className="font-medium">{store.name}</span>
              <span className="text-muted-foreground">{store.detail}</span>
            </li>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  )
}
