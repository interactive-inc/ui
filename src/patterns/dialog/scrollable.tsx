import { buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const articles = [
  "第1条(適用) この規約は、当社が提供する法人向け購買サービスの利用に適用します。",
  "第2条(アカウント) 利用者は、管理者が発行したアカウントでのみサービスを利用できます。",
  "第3条(注文) 注文は、当社が受注確認のメールを送った時点で成立します。",
  "第4条(支払い) 代金は、月末締めの翌月末払いで請求書により支払うものとします。",
  "第5条(返品) 初期不良の商品は、到着から7日以内に連絡があれば交換します。",
  "第6条(個人情報) 当社は、取得した個人情報をプライバシーポリシーに従って扱います。",
  "第7条(禁止事項) 転売を目的とした大量の注文はお断りすることがあります。",
  "第8条(変更) 当社は、事前に通知したうえでこの規約を変更できます。",
]

export function DialogScrollable() {
  return (
    <Dialog>
      <DialogTrigger className={buttonVariants({ variant: "outline" })}>
        利用規約を読む
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>購買サービス利用規約</DialogTitle>
          <DialogDescription>2026年10月1日改定</DialogDescription>
        </DialogHeader>
        <div className="-mx-6 max-h-60 overflow-y-auto px-6">
          <ol className="flex flex-col gap-3">
            {articles.map((article) => (
              <li key={article}>{article}</li>
            ))}
          </ol>
        </div>
        <DialogFooter>
          <DialogClose className={buttonVariants()}>同意して続ける</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
