import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableVertical() {
  return (
    <ResizablePanelGroup
      aria-label="下書きと社内メモの分割"
      orientation="vertical"
      className="h-64 max-w-md rounded-2xl border text-sm"
    >
      <ResizablePanel defaultSize={60} minSize={30}>
        <div className="flex flex-col gap-1 p-4">
          <span className="font-medium">見積書の下書き</span>
          <span className="text-muted-foreground">
            コーポレートサイト改修・総額 ¥3,200,000
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle aria-label="下書きの高さを変える" />
      <ResizablePanel defaultSize={40} minSize={20}>
        <div className="flex flex-col gap-1 p-4">
          <span className="font-medium">社内メモ</span>
          <span className="text-muted-foreground">
            値引きは部長の承認が必要です。
          </span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
