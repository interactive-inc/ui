import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
} from "@/components/ui/code-block"
import {
  Message,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"

const command =
  'curl -H "Authorization: Bearer $API_KEY" https://api.example.com/v1/invoices'

export function CodeBlockInMessage() {
  return (
    <MessageGroup className="w-full max-w-md">
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>
              請求書の一覧を API で取るにはどうすればいいですか？
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <MessageHeader>サポートアシスタント</MessageHeader>
          <Bubble variant="ghost">
            <BubbleContent>
              API キーを付けて、次のように呼び出してください。
            </BubbleContent>
          </Bubble>
          <CodeBlock size="sm">
            <CodeBlockActions>
              <CodeBlockCopyButton
                value={command}
                aria-label="コマンドをコピー"
              />
            </CodeBlockActions>
            <CodeBlockContent wrap>{command}</CodeBlockContent>
          </CodeBlock>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}
