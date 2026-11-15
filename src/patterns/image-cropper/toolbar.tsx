import {
  ImageCropper,
  ImageCropperFlip,
  ImageCropperGrid,
  ImageCropperHandle,
  ImageCropperImage,
  ImageCropperRotate,
  ImageCropperSelection,
  ImageCropperViewport,
  ImageCropperZoom,
} from "@/components/ui/image-cropper"

export function ImageCropperToolbar() {
  return (
    <ImageCropper
      aria-label="本人確認書類の切り抜き"
      src="/inta-icon.png"
      maxZoom={3}
    >
      <ImageCropperViewport className="max-h-72">
        <ImageCropperImage alt="本人確認書類の写真" />
        <ImageCropperSelection>
          <ImageCropperGrid />
          <ImageCropperHandle position="nw" />
          <ImageCropperHandle position="ne" />
          <ImageCropperHandle position="sw" />
          <ImageCropperHandle position="se" />
        </ImageCropperSelection>
      </ImageCropperViewport>
      <div className="flex items-center gap-2">
        <ImageCropperZoom />
        <ImageCropperRotate />
        <ImageCropperFlip />
        <ImageCropperFlip direction="vertical" />
      </div>
    </ImageCropper>
  )
}
