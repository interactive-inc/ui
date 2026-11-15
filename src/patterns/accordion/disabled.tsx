import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDisabled() {
  return (
    <Accordion aria-label="プランごとの機能" className="max-w-lg">
      <AccordionItem value="basic">
        <AccordionTrigger>ベーシック</AccordionTrigger>
        <AccordionContent>注文と請求の管理、メンバー5名まで。</AccordionContent>
      </AccordionItem>
      <AccordionItem value="business">
        <AccordionTrigger>ビジネス</AccordionTrigger>
        <AccordionContent>
          ベーシックの機能に加え、承認フローと API 連携が使えます。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="enterprise" disabled>
        <AccordionTrigger>エンタープライズ（準備中）</AccordionTrigger>
        <AccordionContent>内容を準備しています。</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
