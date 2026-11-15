import { useState } from "react"
import type { ImageCrop } from "@/components/ui/image-cropper"
import {
  ImageCropper,
  ImageCropperHandle,
  ImageCropperImage,
  ImageCropperSelection,
  ImageCropperViewport,
} from "@/components/ui/image-cropper"

export function ImageCropperCommit() {
  const [crop, setCrop] = useState<ImageCrop | null>(null)

  return (
    <div className="flex w-full flex-col gap-3">
      <ImageCropper
        aria-label="店舗ロゴの切り抜き"
        src="/inta-icon.png"
        aspectRatio={1}
        onCropCommit={(value) => setCrop(value)}
      >
        <ImageCropperViewport className="max-h-72">
          <ImageCropperImage alt="店舗のロゴ" />
          <ImageCropperSelection>
            <ImageCropperHandle position="nw" />
            <ImageCropperHandle position="se" />
          </ImageCropperSelection>
        </ImageCropperViewport>
      </ImageCropper>
      <p className="text-muted-foreground text-sm tabular-nums">
        {crop === null
          ? "枠を動かすと、保存する大きさがここに出ます"
          : `${Math.round(crop.width)} × ${Math.round(crop.height)} px で保存します`}
      </p>
    </div>
  )
}
