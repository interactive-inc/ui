import { buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DialogBasic() {
  return (
    <Dialog>
      <DialogTrigger className={buttonVariants({ variant: "outline" })}>
        配送状況を見る
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>注文 #A-1024 の配送状況</DialogTitle>
          <DialogDescription>
            11月14日に発送し、現在は配達店に届いています。
          </DialogDescription>
        </DialogHeader>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
          <dt className="text-muted-foreground">配送業者</dt>
          <dd>ヤマト運輸</dd>
          <dt className="text-muted-foreground">お届け予定</dt>
          <dd>11月16日(月) 午前中</dd>
        </dl>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  )
}
