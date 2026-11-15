import { InboxIcon, SendIcon, TriangleAlertIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsWithIcon() {
  return (
    <Tabs defaultValue="received" className="w-full max-w-md">
      <TabsList aria-label="問い合わせ">
        <TabsTrigger value="received">
          <InboxIcon />
          受付
          <Badge variant="secondary">12</Badge>
        </TabsTrigger>
        <TabsTrigger value="replied">
          <SendIcon />
          返信済み
        </TabsTrigger>
        <TabsTrigger value="escalated">
          <TriangleAlertIcon />
          要対応
          <Badge variant="destructive">2</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="received">
        未返信の問い合わせが 12件あります。
      </TabsContent>
      <TabsContent value="replied">今週は 48件に返信しました。</TabsContent>
      <TabsContent value="escalated">
        担当者の判断が必要な問い合わせが 2件あります。
      </TabsContent>
    </Tabs>
  )
}
