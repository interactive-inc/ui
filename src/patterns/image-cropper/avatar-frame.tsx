import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
  ImageCropperViewport,
  ImageCropperZoom,
} from "@/components/ui/image-cropper"

export function ImageCropperAvatarFrame() {
  return (
    <ImageCropper
      aria-label="プロフィール写真の切り抜き"
      src="/inta-icon.png"
      mode="frame"
      shape="circle"
      aspectRatio={1}
      maxZoom={4}
      className="max-w-xs"
    >
      <ImageCropperViewport>
        <ImageCropperImage alt="プロフィール写真" />
        <ImageCropperSelection />
      </ImageCropperViewport>
      <ImageCropperZoom />
    </ImageCropper>
  )
}
