import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { buttonVariants } from "@/components/ui/button"

export function AlertDialogSmall() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={buttonVariants({ variant: "outline" })}>
        ログアウト
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>ログアウトしますか?</AlertDialogTitle>
          <AlertDialogDescription>
            保存していない下書きは消えます。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction
            value="confirm"
            data-agent-confirm="管理画面からログアウトします。保存していない下書きは消えます"
          >
            ログアウトする
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
