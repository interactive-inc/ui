import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "一覧の1件を、アイコンや画像、見出し、説明、操作の決まった並びで見せる。通知、ファイル、担当者、予定など、縦に積む一覧に使う。",
    "列をそろえて見比べるなら Table、1件の中身が多いなら Card を使う。Item は1行に要点だけを置き、詳しくは開いた先で見せる部品。",
    "ItemMedia、ItemContent（ItemTitle と ItemDescription）、ItemActions の順に置く。一覧にするときは ul と li で包み、区切りは ItemSeparator。行全体をリンクにするなら render に a 要素を渡す。",
  ],
  sdk: [
    "Item は UI SDK の部品を土台にしていない表示だけの部品。Item の render は `@ui-sdk/react/primitive` の renderElement で受けているので、SDK の部品と同じ書き方で a 要素などに差し替えられる。ItemSeparator は SDK の Separator を使っている。Item 自体はエージェントのスナップショットに出ず、中に置いた Button などの部品だけが出る。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "アイコン、見出しと説明、右端の操作を1行に並べる。",
      en: {
        title: "Basic",
        description:
          "Line up an icon, a title with a description, and an action on the right in one row.",
      },
    },
    {
      id: "variants",
      title: "見た目と大きさ",
      description:
        "variant で枠や背景を、size で余白を選ぶ。密な一覧には sm や xs を使う。",
      en: {
        title: "Variants and sizes",
        description:
          "Pick the border or background with variant and the padding with size. Use sm or xs for dense lists.",
      },
    },
    {
      id: "as-link",
      title: "行をリンクにする",
      description:
        "render に a 要素を渡すと、行全体が押せるリンクになり、ホバーで背景が変わる。",
      en: {
        title: "As link",
        description:
          "Pass an a element to render to make the whole row a clickable link that highlights on hover.",
      },
    },
    {
      id: "list",
      title: "一覧にする",
      description:
        "ul と li で一覧として読ませ、行の間を ItemSeparator で区切る。担当者は Avatar で示す。",
      en: {
        title: "List",
        description:
          "Use ul and li so the rows read as a list, and divide them with ItemSeparator. Show each person with an Avatar.",
      },
    },
  ],
  en: {
    usage: [
      "Shows one entry of a list with a fixed layout of icon or image, title, description and actions. Use it for stacked lists such as notifications, files, assignees or events.",
      "To compare aligned columns, use Table. If one entry holds a lot of content, use Card. Item keeps only the essentials on one row and leaves the details for the page it opens.",
      "Place ItemMedia, ItemContent (with ItemTitle and ItemDescription) and ItemActions in that order. Wrap several items in ul and li elements and divide them with ItemSeparator. To make a whole row a link, pass an a element to render.",
    ],
    sdk: [
      "Item is a display-only component that is not built on a UI SDK component. Its render prop is handled by renderElement from `@ui-sdk/react/primitive`, so you can swap the element, for example to an a element, the same way as with SDK parts. ItemSeparator uses the SDK Separator. Item itself does not appear in an agent's snapshot; only components placed inside it, such as Button, do.",
    ],
  },
} satisfies ComponentGuide
