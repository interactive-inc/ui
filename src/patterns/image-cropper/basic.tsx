import {
  ImageCropper,
  ImageCropperGrid,
  ImageCropperHandle,
  ImageCropperImage,
  ImageCropperSelection,
  ImageCropperViewport,
} from "@/components/ui/image-cropper"

export function ImageCropperBasic() {
  return (
    <ImageCropper
      aria-label="商品サムネイルの切り抜き"
      src="/inta-icon.png"
      aspectRatio={4 / 3}
    >
      <ImageCropperViewport className="max-h-72">
        <ImageCropperImage alt="商品の写真" />
        <ImageCropperSelection>
          <ImageCropperGrid />
          <ImageCropperHandle position="nw" />
          <ImageCropperHandle position="ne" />
          <ImageCropperHandle position="sw" />
          <ImageCropperHandle position="se" />
        </ImageCropperSelection>
      </ImageCropperViewport>
    </ImageCropper>
  )
}
