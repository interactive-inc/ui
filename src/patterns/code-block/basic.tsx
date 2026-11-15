import { CodeBlock, CodeBlockContent } from "@/components/ui/code-block"

export function CodeBlockBasic() {
  return (
    <CodeBlock className="max-w-md">
      <CodeBlockContent>
        {"bun add @ui-sdk/react @ui-sdk/core"}
      </CodeBlockContent>
    </CodeBlock>
  )
}
