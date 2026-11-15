import { useState } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"

export function SkeletonLoadingSwitch() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Field name="loading" orientation="horizontal">
        <Switch checked={loading} onCheckedChange={setLoading} />
        <FieldLabel>読み込み中の表示にする</FieldLabel>
      </Field>
      {loading ? (
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-full" />
        </div>
      ) : (
        <div className="flex flex-col gap-1 text-sm">
          <span className="font-medium">ご注文 #10482</span>
          <span className="text-muted-foreground">
            11月16日に発送予定です。
          </span>
        </div>
      )}
    </div>
  )
}
