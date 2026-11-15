import { TerminalIcon } from "lucide-react"
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

const skills = [
  {
    id: "inta-ui",
    title: "inta-ui",
    description:
      "このライブラリの部品の選び方、書き方の決まり、エージェント対応をまとめたスキル。画面を作らせる前に入れておく。",
    command: "vp dlx skills add interactive-inc/ui --skill inta-ui",
  },
  {
    id: "ui-sdk",
    title: "ui-sdk",
    description:
      "中身の UI SDK を扱うスキル。ここにない部品を作るとき、テストを書くときに使う。Vercel Labs が配っている。",
    command: "vp dlx skills add vercel-labs/ui --skill ui-sdk",
  },
]

export function SkillsGuide() {
  return (
    <div className="flex flex-col gap-6">
      <PageTitle
        title="スキル"
        description="Claude Code や Codex などのコーディングエージェントにスキルを入れると、このライブラリの決まりに沿って画面を書かせられます。両方入れるのがおすすめです。"
      />
      {skills.map((skill) => (
        <Card key={skill.id}>
          <CardHeader>
            <CardTitle>
              <h2>{skill.title}</h2>
            </CardTitle>
            <CardDescription className="text-foreground">
              <Prose>{skill.description}</Prose>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock size="sm">
              <CodeBlockHeader>
                <CodeBlockTitle>
                  <TerminalIcon />
                  {"ターミナル"}
                </CodeBlockTitle>
                <CodeBlockActions>
                  <CodeBlockCopyButton
                    value={skill.command}
                    aria-label={`${skill.title} のインストールコマンドをコピー`}
                  />
                </CodeBlockActions>
              </CodeBlockHeader>
              <CodeBlockContent>
                <CodeBlockLine>{skill.command}</CodeBlockLine>
              </CodeBlockContent>
            </CodeBlock>
          </CardContent>
        </Card>
      ))}
      <p className="text-sm">
        {"スキルを使えないエージェントには "}
        <a
          href="/llms.txt"
          target="_blank"
          rel="noreferrer"
          className="text-foreground underline underline-offset-4"
        >
          {"llms.txt"}
        </a>
        {" を読ませてください。中身は同じです。"}
      </p>
    </div>
  )
}
