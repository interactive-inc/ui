import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const slides = [
  { id: "sales", label: "今月の売上", value: "¥5,860,000" },
  { id: "orders", label: "受注件数", value: "142件" },
  { id: "average", label: "平均単価", value: "¥41,268" },
  { id: "repeat", label: "リピート率", value: "63%" },
]

export function CarouselControlled() {
  const [page, setPage] = useState(1)

  return (
    <div className="flex w-full max-w-md flex-col gap-3 px-12">
      <Carousel aria-label="今月の指標" page={page} onPageChange={setPage}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="flex h-32 flex-col items-center justify-center gap-1 rounded-2xl bg-muted">
                <span className="text-muted-foreground text-sm">
                  {slide.label}
                </span>
                <span className="font-medium text-2xl tabular-nums">
                  {slide.value}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="text-center text-muted-foreground text-xs tabular-nums">
        {page} / {slides.length}
      </p>
    </div>
  )
}
