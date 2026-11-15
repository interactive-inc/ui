import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableBasic() {
  return (
    <ResizablePanelGroup
      aria-label="注文一覧と注文詳細の分割"
      className="h-56 max-w-xl rounded-2xl border text-sm"
    >
      <ResizablePanel defaultSize={40} minSize={25}>
        <ul className="flex flex-col gap-2 p-4">
          <li className="font-medium">#10482 みなと商事</li>
          <li className="text-muted-foreground">#10481 青葉フーズ</li>
          <li className="text-muted-foreground">#10480 さくら工房</li>
        </ul>
      </ResizablePanel>
      <ResizableHandle withHandle aria-label="注文一覧の幅を変える" />
      <ResizablePanel defaultSize={60} minSize={40}>
        <div className="flex flex-col gap-1 p-4">
          <span className="font-medium">注文 #10482</span>
          <span className="text-muted-foreground">
            株式会社みなと商事・3点・¥68,100
          </span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
