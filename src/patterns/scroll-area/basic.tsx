import { ScrollArea } from "@/components/ui/scroll-area"

const customers = [
  "株式会社みなと商事",
  "青葉フーズ株式会社",
  "北斗工業株式会社",
  "有限会社さくら工房",
  "東雲物流株式会社",
  "株式会社かもめ印刷",
  "白樺不動産株式会社",
  "株式会社しおさい水産",
  "ひだまり保育サービス株式会社",
  "株式会社つばめ建設",
  "若葉薬局株式会社",
  "株式会社あかね電機",
]

export function ScrollAreaBasic() {
  return (
    <ScrollArea
      aria-label="取引先"
      className="h-60 w-full max-w-xs rounded-2xl border"
    >
      <ul className="flex flex-col p-2 text-sm">
        {customers.map((customer) => (
          <li key={customer} className="rounded-lg px-3 py-2">
            {customer}
          </li>
        ))}
      </ul>
    </ScrollArea>
  )
}
