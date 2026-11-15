import { Link } from "@void/react"
import { cn } from "cn"
import { ChevronRightIcon, FileTextIcon, TerminalIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { categories } from "@/src/categories"
import { componentDocs } from "@/src/component-docs"
import { PageTitle } from "@/src/page-title"
import { findGuide, findPattern } from "@/src/patterns/registry"
import { Prose } from "@/src/prose"

type CodeProps = {
  code: string
  title: string
  icon: React.ReactNode
  copyLabel: string
}

function Code(props: CodeProps) {
  const lines = props.code.trimEnd().split("\n")
  return (
    <CodeBlock size="sm">
      <CodeBlockHeader>
        <CodeBlockTitle>
          {props.icon}
          {props.title}
        </CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton
            value={props.code}
            aria-label={props.copyLabel}
          />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent>
        {lines.map((line, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: 行は位置で決まり、並び替わらない
          <CodeBlockLine key={`${index}-${line}`}>{line}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}

type Props = {
  name: string
}

export function ComponentPage(props: Props) {
  const doc = componentDocs[props.name]
  const guide = findGuide(props.name)
  const category = categories.find((item) =>
    (item.components as readonly string[]).includes(props.name),
  )

  return (
    <div className="flex flex-col gap-6">
      <PageTitle
        title={doc.title}
        description={doc.summary}
        actions={
          <Button
            variant="secondary"
            size="icon"
            aria-label="Markdown で読む"
            render={<a href={`/components/${props.name}.md`} />}
          >
            <FileTextIcon />
          </Button>
        }
      >
        {category !== undefined && (
          <Badge
            variant="secondary"
            render={<Link href={`/cases/${category.slug}/`} />}
          >
            {category.title}
          </Badge>
        )}
        {doc.sdk !== undefined && (
          <Badge
            variant="secondary"
            render={
              <a href={`https://ui-sdk.dev/docs/react/components/${doc.sdk}`} />
            }
          >
            {"UI SDK のドキュメント"}
          </Badge>
        )}
      </PageTitle>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>{"追加する"}</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Code
            code={`vp dlx shadcn@latest add @inta/${props.name}`}
            title="ターミナル"
            icon={<TerminalIcon />}
            copyLabel={`${doc.title} の追加コマンドをコピー`}
          />
        </CardContent>
      </Card>
      {guide !== undefined && (
        <section className="flex flex-col gap-6">
          <h2 className="font-medium text-lg">{"パターン"}</h2>
          {guide.patterns.map((pattern) => {
            const { Preview, source } = findPattern(props.name, pattern.id)
            return (
              <Card key={pattern.id} id={pattern.id}>
                <CardHeader>
                  <CardTitle>
                    <h3>{pattern.title}</h3>
                  </CardTitle>
                  <CardDescription className="text-foreground">
                    <Prose>{pattern.description}</Prose>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex min-h-24 items-center justify-center rounded-xl bg-muted/40 p-6">
                    {Preview !== undefined && <Preview />}
                  </div>
                  {source !== undefined && (
                    <Collapsible className="flex flex-col gap-3">
                      <CollapsibleTrigger
                        aria-label={`${pattern.title}のコード`}
                        className={cn(
                          buttonVariants({
                            variant: "secondary",
                            size: "sm",
                          }),
                          "group/code w-fit",
                        )}
                      >
                        <ChevronRightIcon
                          data-icon="inline-start"
                          className="transition-transform group-data-open/code:rotate-90"
                        />
                        {"コード"}
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <Code
                          code={source}
                          title={`${pattern.id}.tsx`}
                          icon={<FileTextIcon />}
                          copyLabel={`${pattern.title}のコードをコピー`}
                        />
                      </CollapsibleContent>
                    </Collapsible>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </section>
      )}
    </div>
  )
}
