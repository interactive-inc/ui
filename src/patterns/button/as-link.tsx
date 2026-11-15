import { ExternalLinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ButtonAsLink() {
  return (
    <Button variant="outline" render={<a href="https://ui-sdk.dev" />}>
      UI SDK のサイトを開く
      <ExternalLinkIcon data-icon="inline-end" />
    </Button>
  )
}
