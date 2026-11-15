import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdBasic() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm">
      <Kbd>Esc</Kbd>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>S</Kbd>
      </KbdGroup>
    </div>
  )
}
