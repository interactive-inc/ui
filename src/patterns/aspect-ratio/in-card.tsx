import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioInCard() {
  return (
    <article className="flex w-64 flex-col overflow-hidden rounded-2xl border bg-card text-sm">
      <AspectRatio ratio={4 / 3} className="bg-muted">
        <img
          src="/inta-icon.png"
          alt="オフィスチェアの商品写真"
          className="size-full object-cover"
        />
      </AspectRatio>
      <div className="flex flex-col gap-1 p-4">
        <span className="font-medium">オフィスチェア ST-200</span>
        <span className="text-muted-foreground">在庫 12脚・翌営業日に出荷</span>
      </div>
    </article>
  )
}
