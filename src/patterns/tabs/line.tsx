import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsLine() {
  return (
    <Tabs defaultValue="all" className="w-full max-w-md">
      <TabsList variant="line" aria-label="案件の絞り込み">
        <TabsTrigger value="all">すべて</TabsTrigger>
        <TabsTrigger value="active">進行中</TabsTrigger>
        <TabsTrigger value="done">完了</TabsTrigger>
      </TabsList>
      <TabsContent value="all">案件 24件を表示しています。</TabsContent>
      <TabsContent value="active">進行中の案件は 9件です。</TabsContent>
      <TabsContent value="done">今月完了した案件は 15件です。</TabsContent>
    </Tabs>
  )
}
