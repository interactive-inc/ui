import { LocateFixedIcon, MinusIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupVertical() {
  return (
    <ButtonGroup orientation="vertical" aria-label="配送エリア地図の操作">
      <Button variant="outline" size="icon" aria-label="地図を拡大">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="地図を縮小">
        <MinusIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="倉庫の位置に戻る">
        <LocateFixedIcon />
      </Button>
    </ButtonGroup>
  )
}
