import { SearchIcon } from "lucide-react"
import { useState } from "react"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const articles = [
  "パスワードを再設定する",
  "請求書を発行する",
  "配送先を変える",
]

export function EmptyNoResults() {
  const [query, setQuery] = useState("返品")
  const results = articles.filter((article) => article.includes(query))

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Field name="query">
        <FieldLabel>ヘルプ記事を検索</FieldLabel>
        <Input value={query} onValueChange={(value) => setQuery(value)} />
      </Field>
      {results.length > 0 ? (
        <ul className="flex flex-col gap-1 text-sm">
          {results.map((article) => (
            <li key={article}>{article}</li>
          ))}
        </ul>
      ) : (
        <Empty className="p-6">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <SearchIcon />
            </EmptyMedia>
            <EmptyTitle>「{query}」に合う記事はありません</EmptyTitle>
            <EmptyDescription>
              ほかの言葉で探すか、<a href="#contact">お問い合わせ</a>
              ください。
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  )
}
