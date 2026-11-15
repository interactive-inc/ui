import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockLine,
} from "@/components/ui/code-block"

export function CodeBlockDiff() {
  return (
    <CodeBlock size="sm" className="max-w-md">
      <CodeBlockContent lineNumbers startLine={8}>
        <CodeBlockLine>const config = {"{"}</CodeBlockLine>
        <CodeBlockLine variant="removed"> timeout: 3000,</CodeBlockLine>
        <CodeBlockLine variant="added"> timeout: 10000,</CodeBlockLine>
        <CodeBlockLine variant="highlighted"> retries: 3,</CodeBlockLine>
        <CodeBlockLine>{"}"}</CodeBlockLine>
      </CodeBlockContent>
    </CodeBlock>
  )
}
