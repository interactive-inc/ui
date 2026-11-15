import { Kbd, KbdGroup } from "@/components/ui/kbd"

const shortcuts = [
  { label: "注文を検索", keys: ["⌘", "K"] },
  { label: "新しい注文を登録", keys: ["⌘", "N"] },
  { label: "次の注文へ", keys: ["J"] },
  { label: "前の注文へ", keys: ["K"] },
  { label: "詳細を閉じる", keys: ["Esc"] },
]

export function KbdShortcutList() {
  return (
    <dl className="flex w-full max-w-sm flex-col gap-2 text-sm">
      {shortcuts.map((shortcut) => (
        <div
          key={shortcut.label}
          className="flex items-center justify-between gap-4"
        >
          <dt>{shortcut.label}</dt>
          <dd>
            <KbdGroup>
              {shortcut.keys.map((key) => (
                <Kbd key={key}>{key}</Kbd>
              ))}
            </KbdGroup>
          </dd>
        </div>
      ))}
    </dl>
  )
}
