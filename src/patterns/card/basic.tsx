import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardBasic() {
  return (
    <Card className="w-full max-w-sm border">
      <CardHeader>
        <CardTitle>コーポレートサイト改修</CardTitle>
        <CardDescription>株式会社みなと商事・納期 12月20日</CardDescription>
      </CardHeader>
      <CardContent>
        デザインの確認が終わり、実装に入っています。残りの作業はお問い合わせフォームと採用ページです。
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">案件を開く</Button>
        <Button size="sm" variant="ghost">
          担当を変える
        </Button>
      </CardFooter>
    </Card>
  )
}
