import { Button } from "@/components/ui/button"

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>保存する</Button>
      <Button variant="secondary">下書きに戻す</Button>
      <Button variant="outline">プレビュー</Button>
      <Button variant="ghost">キャンセル</Button>
      <Button
        variant="destructive"
        data-agent-confirm="この記事を削除します。元に戻せません"
      >
        削除する
      </Button>
      <Button variant="link">詳しく見る</Button>
    </div>
  )
}
