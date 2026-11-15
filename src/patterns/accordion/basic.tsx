import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionBasic() {
  return (
    <Accordion
      defaultValue={["invoice"]}
      aria-label="請求についてのよくある質問"
      className="max-w-lg"
    >
      <AccordionItem value="invoice">
        <AccordionTrigger>請求書はいつ届きますか</AccordionTrigger>
        <AccordionContent>
          毎月1日に、前月分の請求書を登録のメールアドレスへお送りします。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="payment">
        <AccordionTrigger>支払い方法を変えられますか</AccordionTrigger>
        <AccordionContent>
          設定の「請求先」から、銀行振込とクレジットカードを切り替えられます。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="receipt">
        <AccordionTrigger>領収書は発行できますか</AccordionTrigger>
        <AccordionContent>
          入金の確認後、請求書の詳細画面から PDF でダウンロードできます。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
