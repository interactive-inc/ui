import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const orders = [
  {
    id: "A-1024",
    customer: "株式会社みなと商事",
    total: "38,500円",
    status: "発送済み",
  },
  {
    id: "A-1025",
    customer: "さくら工業株式会社",
    total: "12,100円",
    status: "準備中",
  },
  {
    id: "A-1026",
    customer: "有限会社ひかり堂",
    total: "84,700円",
    status: "入金待ち",
  },
]

export function SheetFromList() {
  return (
    <ul className="flex w-full flex-col divide-y text-sm">
      {orders.map((order) => (
        <li key={order.id} className="flex items-center gap-3 py-2">
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="font-medium">{order.id}</span>
            <span className="truncate text-muted-foreground">
              {order.customer}
            </span>
          </div>
          <Sheet>
            <SheetTrigger
              aria-label={`注文 ${order.id} の詳細を開く`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              詳細
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>注文 {order.id}</SheetTitle>
                <SheetDescription>{order.customer}</SheetDescription>
              </SheetHeader>
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 px-6">
                <dt className="text-muted-foreground">合計</dt>
                <dd>{order.total}</dd>
                <dt className="text-muted-foreground">状態</dt>
                <dd>{order.status}</dd>
              </dl>
            </SheetContent>
          </Sheet>
        </li>
      ))}
    </ul>
  )
}
