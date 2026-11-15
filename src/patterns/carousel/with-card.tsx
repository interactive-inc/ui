import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const stories = [
  {
    id: "minato",
    company: "株式会社みなと商事",
    industry: "卸売・従業員120名",
    result: "請求書の発行にかかる時間が月20時間から3時間になりました。",
  },
  {
    id: "aoba",
    company: "青葉フーズ株式会社",
    industry: "食品製造・従業員340名",
    result: "注文の入力ミスが減り、出荷の遅れが半分になりました。",
  },
  {
    id: "hokuto",
    company: "北斗工業株式会社",
    industry: "製造・従業員85名",
    result:
      "営業と経理が同じ画面を見るようになり、確認の電話がなくなりました。",
  },
]

export function CarouselWithCard() {
  return (
    <div className="w-full max-w-md px-12">
      <Carousel aria-label="導入事例">
        <CarouselContent>
          {stories.map((story) => (
            <CarouselItem key={story.id}>
              <Card className="border">
                <CardHeader>
                  <CardTitle>{story.company}</CardTitle>
                  <CardDescription>{story.industry}</CardDescription>
                </CardHeader>
                <CardContent>{story.result}</CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
