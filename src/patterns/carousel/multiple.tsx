import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const products = [
  { id: "paper", name: "コピー用紙 A4", price: "¥4,200" },
  { id: "toner", name: "トナー 黒", price: "¥18,600" },
  { id: "box", name: "ファイルボックス", price: "¥3,900" },
  { id: "pen", name: "ボールペン 50本", price: "¥2,750" },
  { id: "tape", name: "梱包テープ 6巻", price: "¥1,980" },
  { id: "label", name: "宛名ラベル", price: "¥1,320" },
]

export function CarouselMultiple() {
  return (
    <div className="w-full max-w-xl px-12">
      <Carousel aria-label="よく注文される商品" slidesPerPage={3}>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-[calc((100%-2rem)/3)]"
            >
              <div className="flex h-28 flex-col justify-end gap-1 rounded-2xl border p-4 text-sm">
                <span className="font-medium">{product.name}</span>
                <span className="text-muted-foreground tabular-nums">
                  {product.price}
                </span>
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
