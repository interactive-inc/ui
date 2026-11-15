import { FileCodeIcon, TerminalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/components/ui/code-block"
import { PageTitle } from "@/src/page-title"
import { Prose } from "@/src/prose"
import { siteUrl } from "@/src/site"

const registryCode = `{
  "registries": {
    "@inta": "${siteUrl}/r/{name}.json"
  }
}`

const cssCode = `@layer ui-sdk;

@import "tailwindcss";`

const addCode = `vp dlx shadcn@latest add @inta/button @inta/dialog
vp dlx shadcn@latest add @inta/all`

type StepProps = {
  step: number
  title: string
  description: string
  file: string
  icon: React.ReactNode
  code: string
  copyLabel: string
}

function Step(props: StepProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>{`${props.step}. ${props.title}`}</h2>
        </CardTitle>
        <CardDescription className="text-foreground">
          <Prose>{props.description}</Prose>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CodeBlock size="sm">
          <CodeBlockHeader>
            <CodeBlockTitle>
              {props.icon}
              {props.file}
            </CodeBlockTitle>
            <CodeBlockActions>
              <CodeBlockCopyButton
                value={props.code}
                aria-label={props.copyLabel}
              />
            </CodeBlockActions>
          </CodeBlockHeader>
          <CodeBlockContent>
            {props.code.split("\n").map((line, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: 行は位置で決まり、並び替わらない
              <CodeBlockLine key={`${props.step}-${index}-${line}`}>
                {line}
              </CodeBlockLine>
            ))}
          </CodeBlockContent>
        </CodeBlock>
      </CardContent>
    </Card>
  )
}

export function InstallGuide() {
  return (
    <div className="flex flex-col gap-8">
      <PageTitle
        title="インストール"
        description="shadcn の CLI でコンポーネントを追加できます。中身は UI SDK で動き、依存パッケージも一緒に入ります。Tailwind CSS v4 のプロジェクトが前提です。"
        actions={
          <Button
            variant="secondary"
            render={<a href="/llms.txt" target="_blank" rel="noreferrer" />}
          >
            {"llms.txt"}
          </Button>
        }
      />
      <Step
        step={1}
        title="レジストリを登録する"
        description="components.json に @inta を追加します。"
        file="components.json"
        icon={<FileCodeIcon />}
        code={registryCode}
        copyLabel="レジストリの設定をコピー"
      />
      <Step
        step={2}
        title="CSS のレイヤーを宣言する"
        description="UI SDK の既定スタイルが Tailwind に負けるよう、import より前に置きます。"
        file="globals.css"
        icon={<FileCodeIcon />}
        code={cssCode}
        copyLabel="CSS の宣言をコピー"
      />
      <Step
        step={3}
        title="コンポーネントを追加する"
        description="名前を並べると、まとめて追加できます。2行目のように @inta/all を指定すると、すべてのコンポーネントが入ります。"
        file="ターミナル"
        icon={<TerminalIcon />}
        code={addCode}
        copyLabel="追加コマンドをコピー"
      />
    </div>
  )
}
