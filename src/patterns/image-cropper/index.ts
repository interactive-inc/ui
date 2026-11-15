import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Crop selection for avatars, thumbnails, scans. Result: crop in image pixels (rotation, flipX, flipY) for cropImage from @ui-sdk/react/image.",
    "mode box: selection moves/resizes over image. mode frame: selection fixed, image moves (round avatars). aspectRatio fixes ratio.",
    "aria-label on ImageCropper, alt on ImageCropperImage.",
    "onCropChange fires every drag step and on image load; save from onCropCommit (once per interaction end).",
    "onCropChange details.reason: drag|pinch|wheel|step-key|zoom-key|zoom-input|rotate-key|rotate-press|flip-press|aspect-ratio-change|image-load|imperative; cancel().",
    "Keys: arrows move (Shift x10), +/- zoom, R rotate quarter (Shift reverse), Escape mid-drag reverts.",
    "Data attributes: data-mode, data-shape, data-dragging, data-loading, data-error, data-disabled.",
    "Agent: kind image-cropper, named by aria-label; actions setCrop, rotate, flip, setZoom. createImageCropperController().",
    "Registry adds Japanese aria-label/aria-roledescription, rotate/flip icons, grid lines.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "画像の上に枠と四隅のハンドルを置き、ドラッグで範囲を決める。",
      en: {
        title: "Basic",
        description: "Selection with corner handles over the image.",
      },
    },
    {
      id: "avatar-frame",
      title: "丸いアバター",
      description:
        "mode を frame、shape を circle にすると、枠を固定して画像を動かす編集になる。",
      en: {
        title: "Round avatar",
        description: "mode frame, shape circle: fixed selection, moving image.",
      },
    },
    {
      id: "toolbar",
      title: "拡大・回転・反転",
      description:
        "拡大のスライダー、回転と反転のボタンを並べて、細かく整えられるようにする。",
      en: {
        title: "Zoom, rotate and flip",
        description: "Zoom slider with rotate and flip buttons.",
      },
    },
    {
      id: "commit",
      title: "決めた範囲を受け取る",
      description:
        "onCropCommit で操作が終わった時点の範囲を受け取り、保存する大きさを見せる。",
      en: {
        title: "Read the committed crop",
        description: "Read the crop in onCropCommit and show its size.",
      },
    },
  ],
} satisfies ComponentGuide
