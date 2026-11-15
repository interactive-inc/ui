import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsBasic() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList aria-label="注文 #10482 の詳細">
        <TabsTrigger value="overview">概要</TabsTrigger>
        <TabsTrigger value="items">明細</TabsTrigger>
        <TabsTrigger value="history">履歴</TabsTrigger>
        <TabsTrigger value="refund" disabled>
          返金
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
          <dt className="text-muted-foreground">注文日</dt>
          <dd>2026年11月12日</dd>
          <dt className="text-muted-foreground">お客様</dt>
          <dd>株式会社みなと商事</dd>
          <dt className="text-muted-foreground">合計</dt>
          <dd>¥128,400</dd>
        </dl>
      </TabsContent>
      <TabsContent value="items">業務用コピー用紙 A4 ほか 3点</TabsContent>
      <TabsContent value="history">11月13日に出荷しました。</TabsContent>
      <TabsContent value="refund">返金の申請はありません。</TabsContent>
    </Tabs>
  )
}
