import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerInButton() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled data-agent-confirm="問い合わせを送信します">
        <Spinner data-icon="inline-start" />
        送信しています
      </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        読み込み中
      </Button>
    </div>
  )
}
