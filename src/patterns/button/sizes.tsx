import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">極小</Button>
      <Button size="sm">小</Button>
      <Button>標準</Button>
      <Button size="lg">大</Button>
      <Button size="icon-sm" aria-label="小さく追加">
        <PlusIcon />
      </Button>
      <Button size="icon" aria-label="追加">
        <PlusIcon />
      </Button>
    </div>
  )
}
