import { Spinner } from "@/components/ui/spinner"

export function SpinnerWithText() {
  return (
    <div className="flex items-center gap-3 text-sm">
      <Spinner className="size-5" aria-label="領収書を読み取り中" />
      <div className="flex flex-col">
        <span className="font-medium">領収書を読み取っています</span>
        <span className="text-muted-foreground">10秒ほどかかります</span>
      </div>
    </div>
  )
}
