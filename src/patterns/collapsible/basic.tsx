import { ChevronDownIcon } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const lines = [
  { name: "業務用コピー用紙 A4 5箱", price: "¥8,400" },
  { name: "トナーカートリッジ 黒 3本", price: "¥55,800" },
  { name: "ファイルボックス 10個入り", price: "¥3,900" },
]

export function CollapsibleBasic() {
  return (
    <Collapsible className="w-full max-w-sm rounded-2xl border">
      <CollapsibleTrigger className="group flex w-full items-center justify-between gap-2 rounded-2xl p-4 text-left text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
        <span className="flex flex-col">
          <span className="font-medium">注文 #10482</span>
          <span className="text-muted-foreground text-xs">3点・¥68,100</span>
        </span>
        <ChevronDownIcon
          aria-hidden="true"
          className="size-4 text-muted-foreground transition-transform group-data-open:rotate-180"
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t px-4 py-3 text-sm">
        <ul className="flex flex-col gap-2">
          {lines.map((line) => (
            <li key={line.name} className="flex justify-between gap-2">
              <span>{line.name}</span>
              <span className="tabular-nums">{line.price}</span>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}
