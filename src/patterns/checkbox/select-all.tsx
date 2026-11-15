import { useState } from "react"
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const items = [
  { id: "keyboard", label: "ワイヤレスキーボード" },
  { id: "mouse", label: "静音マウス" },
  { id: "stand", label: "ノートPCスタンド" },
]

export function CheckboxSelectAll() {
  const [selected, setSelected] = useState(["mouse"])

  return (
    <CheckboxGroup
      aria-label="カートの商品"
      name="items"
      value={selected}
      onValueChange={setSelected}
      allValues={items.map((item) => item.id)}
    >
      <Label>
        <Checkbox parent />
        カートの商品をすべて選ぶ
      </Label>
      <div className="flex flex-col gap-3 pl-6">
        {items.map((item) => (
          <Label key={item.id}>
            <Checkbox value={item.id} />
            {item.label}
          </Label>
        ))}
      </div>
      <p className="text-muted-foreground text-sm">
        {selected.length}点を選択中
      </p>
    </CheckboxGroup>
  )
}
