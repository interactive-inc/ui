import { LockIcon } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function ToggleDisabled() {
  return (
    <div className="flex flex-col gap-2">
      <Toggle
        variant="outline"
        className="w-fit"
        disabled
        focusableWhenDisabled
      >
        <LockIcon data-icon="inline-start" />
        注文を非公開にする
      </Toggle>
      <p className="text-muted-foreground text-sm">
        発送済みの注文は非公開にできません。
      </p>
    </div>
  )
}
