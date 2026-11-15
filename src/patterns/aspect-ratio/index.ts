import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "幅に合わせて高さを決め、縦横の比率を保つ箱。画像や動画、地図の埋め込みなど、読み込む前から場所を確保して画面がずれないようにしたいときに使う。",
    "ratio に幅÷高さの数を渡す。16 / 9 なら横長、1 なら正方形になる。幅は親で決め、中身は size-full と object-cover で箱いっぱいに広げる。",
    "操作を持たない入れ物なので、名前は中の画像の alt で付ける。角を丸めるときは overflow-hidden も一緒に付けて中身をはみ出させない。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "16 / 9 の箱に画像を入れ、object-cover で比率を崩さずに埋める。",
      en: {
        title: "Basic",
        description:
          "Put an image in a 16 / 9 box and fill it with object-cover without stretching.",
      },
    },
    {
      id: "square-grid",
      title: "正方形の一覧",
      description:
        "ratio を 1 にして、大きさの違う写真をそろった正方形で並べる。",
      en: {
        title: "Square grid",
        description:
          "Set ratio to 1 to line up photos of different sizes as even squares.",
      },
    },
    {
      id: "in-card",
      title: "カードの見出し画像",
      description: "カードの上に 4 / 3 の画像を置き、下に文字を続ける。",
      en: {
        title: "Card cover",
        description:
          "Place a 4 / 3 image at the top of a card and follow it with text.",
      },
    },
  ],
  en: {
    usage: [
      "An aspect ratio box sets its height from its width and keeps the ratio. Use it for images, videos or map embeds to reserve their space before they load, so the page does not shift.",
      "Pass width divided by height to ratio: 16 / 9 for a wide box, 1 for a square. Let the parent set the width, and fill the box with size-full and object-cover.",
      "It is a container without actions, so name it through the alt of the image inside. Add overflow-hidden when rounding the corners so the content stays inside.",
    ],
  },
} satisfies ComponentGuide
