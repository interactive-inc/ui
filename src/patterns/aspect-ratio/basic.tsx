import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioBasic() {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="w-full overflow-hidden rounded-2xl bg-muted"
    >
      <img
        src="/inta-icon.png"
        alt="セミナー告知のカバー画像"
        className="size-full object-cover"
      />
    </AspectRatio>
  )
}
