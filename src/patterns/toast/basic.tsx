import { useState } from "react"
import { Button } from "@/components/ui/button"
import { createToaster, Toaster } from "@/components/ui/toast"

export function ToastBasic() {
  const [toaster] = useState(() => createToaster())

  return (
    <Toaster toaster={toaster}>
      <Button
        variant="outline"
        onClick={() =>
          toaster("下書きを保存しました", {
            description: "11月15日 14:32 に自動で保存",
          })
        }
      >
        下書きを保存
      </Button>
    </Toaster>
  )
}
