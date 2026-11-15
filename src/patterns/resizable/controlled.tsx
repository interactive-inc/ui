import { useState } from "react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableControlled() {
  const [layout, setLayout] = useState([30, 70])

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <ResizablePanelGroup
        aria-label="絞り込みと検索結果の分割"
        layout={layout}
        onLayoutChange={setLayout}
        className="h-48 rounded-2xl border text-sm"
      >
        <ResizablePanel minSize={20}>
          <div className="p-4 font-medium">絞り込み</div>
        </ResizablePanel>
        <ResizableHandle withHandle aria-label="絞り込みの幅を変える" />
        <ResizablePanel minSize={40}>
          <div className="p-4 font-medium">検索結果</div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <p className="text-muted-foreground text-xs tabular-nums">
        絞り込み {Math.round(layout[0] ?? 0)}%・検索結果{" "}
        {Math.round(layout[1] ?? 0)}%
      </p>
    </div>
  )
}
