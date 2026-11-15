import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "画像の一部を選んで切り抜く範囲を決める部品。プロフィール写真、商品のサムネイル、書類の写しなど、保存する前に範囲を整えたいときに使う。",
    "box は画像全体の上で枠を動かして大きさを変える。frame は枠を固定して下の画像を動かすので、丸いアバターの編集に向く。比率を決めるときは aspectRatio を渡す。",
    "ImageCropper には aria-label で名前を付け、ImageCropperImage には alt を付ける。範囲はドラッグのたびに onCropChange に届くので、保存には操作が終わったときの onCropCommit を使う。",
  ],
  sdk: [
    "UI SDK の ImageCropper の上に作っている。枠の移動と大きさの変更、画像のドラッグ、ホイール、ピンチでのズームは SDK が受け持つ。結果は画像そのもののピクセルで表した crop（rotation、flipX、flipY を含む）として届くので、@ui-sdk/react/image の cropImage にそのまま渡せる。",
    "切り抜き範囲と各ハンドルはスライダーとして振る舞い、矢印キーで動かし、Shift を足すと10倍動く。プラスとマイナスでズームし、R で右に90度回し（Shift で戻す）、ドラッグ中の Escape は始める前の範囲に戻す。見た目は data-mode、data-shape、data-dragging、data-loading、data-error、data-disabled で付ける。",
    "onCropChange はドラッグの1歩ごとと画像の読み込み時に走り、details.reason（drag、pinch、wheel、step-key、zoom-key、zoom-input、rotate-key、rotate-press、flip-press、aspect-ratio-change、image-load、imperative）で理由が分かり、details.cancel() で止められる。onCropCommit は操作が終わったときに1回だけ走る。",
    "エージェントからは image-cropper として見え、名前は ImageCropper の aria-label から付く。呼べる操作は setCrop、rotate、flip、setZoom で、createImageCropperController() でも同じことを外から行える。SDK は範囲、ハンドル、ズームに英語の名前を付けるので、この部品集では日本語の aria-label と aria-roledescription、回転と反転のアイコン、グリッドの線を既定で足している。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "画像の上に枠と四隅のハンドルを置き、ドラッグで範囲を決める。",
      en: {
        title: "Basic",
        description:
          "Place a selection with corner handles over the image and drag to set the crop.",
      },
    },
    {
      id: "avatar-frame",
      title: "丸いアバター",
      description:
        "mode を frame、shape を circle にすると、枠を固定して画像を動かす編集になる。",
      en: {
        title: "Round avatar",
        description:
          "Set mode to frame and shape to circle to keep the selection still and move the image under it.",
      },
    },
    {
      id: "toolbar",
      title: "拡大・回転・反転",
      description:
        "拡大のスライダー、回転と反転のボタンを並べて、細かく整えられるようにする。",
      en: {
        title: "Zoom, rotate and flip",
        description:
          "Line up the zoom slider with rotate and flip buttons for fine adjustments.",
      },
    },
    {
      id: "commit",
      title: "決めた範囲を受け取る",
      description:
        "onCropCommit で操作が終わった時点の範囲を受け取り、保存する大きさを見せる。",
      en: {
        title: "Read the committed crop",
        description:
          "Receive the crop in onCropCommit once an interaction ends, and show the size that will be saved.",
      },
    },
  ],
  en: {
    usage: [
      "An image cropper picks the part of an image to keep. Use it for profile photos, product thumbnails or scanned documents that need trimming before they are saved.",
      "box moves and resizes a selection over the whole image. frame keeps the selection still and moves the image under it, which suits round avatar editors. Pass aspectRatio to fix the ratio.",
      "Name the ImageCropper with aria-label and give ImageCropperImage an alt. onCropChange fires on every step of a drag, so save from onCropCommit, which fires once an interaction ends.",
    ],
    sdk: [
      "Built on the UI SDK ImageCropper. The SDK handles moving and resizing the selection, dragging the image, and zooming with the wheel or a pinch. The result is a crop in the image's own pixels (with rotation, flipX and flipY), ready to pass to cropImage from @ui-sdk/react/image.",
      "The selection and each handle behave as sliders: arrow keys move them, and Shift moves ten times as far. Plus and Minus zoom, R turns the image a quarter clockwise (Shift turns it back), and Escape during a drag puts the crop back where the drag started. Style states with data-mode, data-shape, data-dragging, data-loading, data-error and data-disabled.",
      "onCropChange runs on every step of a drag and once the image loads; details.reason (drag, pinch, wheel, step-key, zoom-key, zoom-input, rotate-key, rotate-press, flip-press, aspect-ratio-change, image-load, imperative) says why, and details.cancel() stops the change. onCropCommit runs once, when the interaction ends.",
      "To an agent it is an image-cropper, named by the aria-label on ImageCropper, with the actions setCrop, rotate, flip and setZoom; createImageCropperController() does the same from your own code. The SDK names the selection, handles and zoom in English, so this registry adds Japanese aria-label and aria-roledescription defaults, the rotate and flip icons, and the grid lines.",
    ],
  },
} satisfies ComponentGuide
