import { CopyIcon, PencilIcon, PrinterIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupBasic() {
  return (
    <ButtonGroup aria-label="注文の操作">
      <Button variant="outline">
        <PencilIcon data-icon="inline-start" />
        編集
      </Button>
      <Button variant="outline">
        <CopyIcon data-icon="inline-start" />
        複製
      </Button>
      <Button variant="outline">
        <PrinterIcon data-icon="inline-start" />
        納品書を印刷
      </Button>
    </ButtonGroup>
  )
}
