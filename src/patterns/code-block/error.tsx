import { CircleAlertIcon } from "lucide-react"
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/components/ui/code-block"

export function CodeBlockError() {
  return (
    <CodeBlock variant="destructive" size="sm" className="max-w-md">
      <CodeBlockHeader>
        <CodeBlockTitle>
          <CircleAlertIcon />
          支払いの API がエラーを返しました
        </CodeBlockTitle>
      </CodeBlockHeader>
      <CodeBlockContent wrap>
        {
          "402 Payment Required: card_expired — カードの有効期限が切れています。別のカードを登録してから、もう一度お試しください。"
        }
      </CodeBlockContent>
    </CodeBlock>
  )
}
