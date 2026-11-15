import { FileCodeIcon } from "lucide-react"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/components/ui/code-block"

const code = `export async function getOrder(id: string) {
  const response = await fetch(\`/api/orders/\${id}\`)
  return response.json()
}`

export function CodeBlockWithHeader() {
  return (
    <CodeBlock className="max-w-md">
      <CodeBlockHeader>
        <CodeBlockTitle>
          <FileCodeIcon />
          get-order.ts
        </CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton
            value={code}
            aria-label="get-order.ts をコピー"
          />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent lineNumbers>{code}</CodeBlockContent>
    </CodeBlock>
  )
}
