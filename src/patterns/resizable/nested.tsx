import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableNested() {
  return (
    <ResizablePanelGroup
      aria-label="フォルダと問い合わせの分割"
      className="h-72 max-w-2xl rounded-2xl border text-sm"
    >
      <ResizablePanel defaultSize={25} minSize={15}>
        <ul className="flex flex-col gap-2 p-4">
          <li className="font-medium">受信</li>
          <li className="text-muted-foreground">対応中</li>
          <li className="text-muted-foreground">完了</li>
        </ul>
      </ResizablePanel>
      <ResizableHandle aria-label="フォルダの幅を変える" />
      <ResizablePanel defaultSize={75} minSize={50}>
        <ResizablePanelGroup
          orientation="vertical"
          aria-label="問い合わせ一覧と本文の分割"
        >
          <ResizablePanel defaultSize={45} minSize={25}>
            <ul className="flex flex-col gap-2 p-4">
              <li className="font-medium">届いた商品に傷がありました</li>
              <li className="text-muted-foreground">請求書の宛名を変えたい</li>
            </ul>
          </ResizablePanel>
          <ResizableHandle aria-label="問い合わせ一覧の高さを変える" />
          <ResizablePanel defaultSize={55} minSize={30}>
            <p className="p-4">
              11月12日に届いた注文 #10482
              のトナーの箱がへこんでいました。交換をお願いできますか。
            </p>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
