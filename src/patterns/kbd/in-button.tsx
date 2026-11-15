import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdInButton() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline">
        下書きを保存
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
      </Button>
      <Button variant="ghost">
        キャンセル
        <Kbd>Esc</Kbd>
      </Button>
    </div>
  )
}
