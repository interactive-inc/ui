import { useState } from "react"
import { Button } from "@/components/ui/button"
import { createToaster, Toaster } from "@/components/ui/toast"

export function ToastWithAction() {
  const [toaster] = useState(() => createToaster())

  return (
    <Toaster toaster={toaster}>
      <Button
        variant="outline"
        onClick={() =>
          toaster("問い合わせをアーカイブしました", {
            action: {
              label: "元に戻す",
              onAction: () => toaster("アーカイブを取り消しました"),
            },
          })
        }
      >
        アーカイブ
      </Button>
    </Toaster>
  )
}
