import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsVertical() {
  return (
    <Tabs
      defaultValue="profile"
      orientation="vertical"
      className="w-full max-w-lg"
    >
      <TabsList aria-label="アカウント設定">
        <TabsTrigger value="profile">プロフィール</TabsTrigger>
        <TabsTrigger value="billing">請求先</TabsTrigger>
        <TabsTrigger value="notification">通知</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        表示名と所属部署を変更できます。
      </TabsContent>
      <TabsContent value="billing">
        請求書の送付先と支払い方法を管理します。
      </TabsContent>
      <TabsContent value="notification">
        メールで受け取る通知を選べます。
      </TabsContent>
    </Tabs>
  )
}
