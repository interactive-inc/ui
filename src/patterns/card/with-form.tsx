import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function CardWithForm() {
  return (
    <Card className="w-full max-w-sm border">
      <CardHeader>
        <CardTitle>請求先の変更</CardTitle>
        <CardDescription>次回の請求書から反映されます。</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Field name="company">
          <FieldLabel>会社名</FieldLabel>
          <Input defaultValue="株式会社みなと商事" />
        </Field>
        <Field name="email">
          <FieldLabel>請求書の送付先</FieldLabel>
          <Input type="email" placeholder="keiri@example.co.jp" />
        </Field>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost">キャンセル</Button>
        <Button>保存する</Button>
      </CardFooter>
    </Card>
  )
}
