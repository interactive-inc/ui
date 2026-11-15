import { AspectRatio } from "@/components/ui/aspect-ratio"

const photos = ["店舗の外観", "受付カウンター", "商談スペース", "倉庫の入口"]

export function AspectRatioSquareGrid() {
  return (
    <ul className="grid w-full grid-cols-4 gap-2">
      {photos.map((photo) => (
        <li key={photo}>
          <AspectRatio
            ratio={1}
            className="overflow-hidden rounded-xl bg-muted"
          >
            <img
              src="/inta-icon.png"
              alt={photo}
              className="size-full object-cover"
            />
          </AspectRatio>
        </li>
      ))}
    </ul>
  )
}
