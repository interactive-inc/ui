import { SlidersHorizontalIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function CollapsibleAdvancedFilters() {
  return (
    <Collapsible className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-end gap-2">
        <Field name="keyword" className="flex-1">
          <FieldLabel>お客様名・注文番号</FieldLabel>
          <Input placeholder="例: みなと商事" />
        </Field>
        <CollapsibleTrigger className={buttonVariants({ variant: "outline" })}>
          <SlidersHorizontalIcon data-icon="inline-start" />
          詳しい条件
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent keepMounted className="grid gap-4 sm:grid-cols-2">
        <Field name="from">
          <FieldLabel>注文日（から）</FieldLabel>
          <Input type="date" />
        </Field>
        <Field name="to">
          <FieldLabel>注文日（まで）</FieldLabel>
          <Input type="date" />
        </Field>
        <Field name="minAmount">
          <FieldLabel>金額（以上）</FieldLabel>
          <Input inputMode="numeric" placeholder="10000" />
        </Field>
        <Field name="assignee">
          <FieldLabel>担当者</FieldLabel>
          <Input placeholder="例: 佐藤" />
        </Field>
      </CollapsibleContent>
    </Collapsible>
  )
}
