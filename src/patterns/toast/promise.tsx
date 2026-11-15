import { useState } from "react"
import { Button } from "@/components/ui/button"
import { createToaster, Toaster } from "@/components/ui/toast"

function exportCsv() {
  return new Promise((resolve) => setTimeout(resolve, 2000))
}

export function ToastPromise() {
  const [toaster] = useState(() => createToaster())

  return (
    <Toaster toaster={toaster}>
      <Button
        variant="outline"
        onClick={() =>
          toaster.promise(exportCsv(), {
            loading: "注文履歴を書き出しています",
            success: "注文履歴を書き出しました",
            error: "注文履歴を書き出せませんでした",
          })
        }
      >
        CSV に書き出す
      </Button>
    </Toaster>
  )
}
