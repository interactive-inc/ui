"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function LabelWrapControl() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <Label>
        <Checkbox
          checked={agreed}
          onCheckedChange={(value) => setAgreed(value === true)}
        />
        出店規約に同意する
      </Label>
      <p className="text-muted-foreground text-sm">
        {agreed ? "申し込みに進めます。" : "同意すると申し込みに進めます。"}
      </p>
    </div>
  )
}
