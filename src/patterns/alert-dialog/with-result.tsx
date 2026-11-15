import { useState } from "react"
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

export function AlertDialogWithResult() {
  const [status, setStatus] = useState("契約中")

  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <div className="flex flex-col">
        <span className="font-medium">スタンダードプラン</span>
        <span className="text-muted-foreground">{status}</span>
      </div>
      <AlertDialog
        onOpenChange={(open, details) => {
          if (!open && details.returnValue === "confirm") {
            setStatus("11月30日で解約")
          }
        }}
      >
        <AlertDialogTrigger
          disabled={status !== "契約中"}
          className={buttonVariants({ variant: "outline" })}
        >
          解約する
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              スタンダードプランを解約しますか?
            </AlertDialogTitle>
            <AlertDialogDescription>
              11月30日までは使えます。それ以降はデータの閲覧だけになります。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>契約を続ける</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              value="confirm"
              data-agent-confirm="スタンダードプランを11月30日で解約します"
            >
              解約を確定
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
