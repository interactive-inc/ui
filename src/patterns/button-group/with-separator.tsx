import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"

export function ButtonGroupWithSeparator() {
  return (
    <ButtonGroup aria-label="売上レポートの書き出し">
      <Button variant="secondary" size="sm">
        CSV で書き出す
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        PDF で書き出す
      </Button>
    </ButtonGroup>
  )
}
