import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionMultiple() {
  return (
    <Accordion multiple aria-label="返品の手順" className="max-w-lg">
      <AccordionItem value="request">
        <AccordionTrigger>1. 返品の申請</AccordionTrigger>
        <AccordionContent>
          注文の詳細画面で「返品を申請」を選び、理由を入力します。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="pack">
        <AccordionTrigger>2. 梱包と発送</AccordionTrigger>
        <AccordionContent>
          届いたときの箱に入れ、同封の着払い伝票で発送してください。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="refund">
        <AccordionTrigger>3. 返金</AccordionTrigger>
        <AccordionContent>
          商品が倉庫に届いてから5営業日以内に、元の支払い方法へ返金します。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
