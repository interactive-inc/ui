import { useState } from "react"
import { Button } from "@/components/ui/button"
import { createToaster, Toaster } from "@/components/ui/toast"

export function ToastTypes() {
  const [toaster] = useState(() => createToaster())

  return (
    <Toaster toaster={toaster}>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => toaster.success("プロフィールを更新しました")}
        >
          成功
        </Button>
        <Button
          variant="outline"
          onClick={() => toaster.info("新しいお知らせが2件あります")}
        >
          お知らせ
        </Button>
        <Button
          variant="outline"
          onClick={() => toaster.warning("無料期間は残り3日です")}
        >
          注意
        </Button>
        <Button
          variant="outline"
          onClick={() => toaster.error("メールを送信できませんでした")}
        >
          失敗
        </Button>
      </div>
    </Toaster>
  )
}
