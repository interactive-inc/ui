import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const notices = [
  { id: "maintenance", title: "11月20日 2:00〜4:00 にメンテナンスを行います" },
  { id: "invoice", title: "請求書の PDF に振込先が表示されるようになりました" },
  { id: "holiday", title: "年末年始のサポート受付は12月27日までです" },
]

export function CarouselBasic() {
  return (
    <div className="w-full max-w-md px-12">
      <Carousel aria-label="お知らせ">
        <CarouselContent>
          {notices.map((notice) => (
            <CarouselItem key={notice.id}>
              <div className="flex h-32 items-center justify-center rounded-2xl bg-muted p-6 text-center text-sm">
                {notice.title}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
