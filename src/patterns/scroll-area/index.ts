import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "決まった大きさの枠の中だけをスクロールさせ、スクロールバーの見た目をそろえる。長い一覧、横に長い表、流れてくる記録などを、ページ全体を伸ばさずに収めたいときに使う。",
    "件数が多くページで区切りたいなら Pagination、中身を隠して必要なときだけ開くなら Collapsible を使う。ScrollArea は全部を並べたまま、見える範囲だけを絞る部品。",
    "ScrollArea に高さか幅を付ける。横にも流すときは orientation に horizontal か both を渡す。中身が何かを aria-label で書くと、キーボードで枠に入ったときに読み上げられる。新しい行が下に増えていくなら stickToEnd で末尾に付いていく。",
  ],
  sdk: [
    '`@ui-sdk/react/scroll-area` の上に作ってある。ScrollArea は SDK の ScrollAreaViewport、ScrollAreaContent、スクロールバー、ScrollAreaCorner を中に組んで出しているので、子に中身を置くだけでよい。バーの向きはこの部品集で足した orientation（vertical、horizontal、both）で選ぶ。aria-label を渡すとスクロールする枠に付き、role="region" になる。SDK の ScrollAreaScrollToEnd は出していない。',
    "スクロールはブラウザのものなので、矢印キー、PageUp と PageDown、Home と End、Space がそのまま効く。中にフォーカスできるものがないときだけ、スクロールする枠が Tab で止まる場所になる。",
    "表示すべきスクロールバーに data-visible が付き、いつ出すかは type（auto、always、scroll、hover）で決める。ScrollArea には data-overflow-x、data-overflow-y、data-at-start、data-at-end、data-scrolling が付き、はみ出した量は `--scroll-area-overflow-y-start` などの CSS 変数で読めるので、端のぼかしや影に使える。",
    "stickToEnd を渡すと、チャットのように中身が増えても末尾を見せ続け、上へスクロールすると離れる。ほかの場所から動かすときは createScrollAreaController() の scrollToEnd と scrollToStart を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "高さを決めた枠の中で、長い一覧を縦にスクロールさせる。",
      en: {
        title: "Basic",
        description:
          "Scroll a long list vertically inside a box with a fixed height.",
      },
    },
    {
      id: "horizontal",
      title: "横に流す",
      description:
        'orientation="horizontal" にして、中身を w-max で横に並べる。',
      en: {
        title: "Horizontal",
        description:
          'Set orientation="horizontal" and lay the content out in a row with w-max.',
      },
    },
    {
      id: "with-table",
      title: "大きな表",
      description:
        'orientation="both" で、列の多い Table を縦横どちらにも動かせるようにする。',
      en: {
        title: "With a table",
        description:
          'Use orientation="both" so a wide Table can scroll both ways.',
      },
    },
    {
      id: "stick-to-end",
      title: "末尾に付いていく",
      description:
        "stickToEnd を付けると最初から末尾を表示し、行が増えても下に付いていく。",
      en: {
        title: "Stick to end",
        description:
          "With stickToEnd it starts at the bottom and keeps following as new rows arrive.",
      },
    },
  ],
  en: {
    usage: [
      "Scrolls only the inside of a fixed-size box and keeps scrollbars consistent. Use it to fit long lists, wide tables or streaming logs without stretching the whole page.",
      "To split many records into pages, use Pagination. To hide content until needed, use Collapsible. ScrollArea keeps everything in place and narrows only what is visible.",
      "Give ScrollArea a height or width. Pass horizontal or both to orientation to scroll sideways too. Describe the content with aria-label so it is announced when keyboard focus enters the box. If new rows are added at the bottom, stickToEnd keeps the end in view.",
    ],
    sdk: [
      'Built on `@ui-sdk/react/scroll-area`. ScrollArea already composes the SDK ScrollAreaViewport, ScrollAreaContent, scrollbars and ScrollAreaCorner, so you only place the content as children. Choose the scrollbars with orientation (vertical, horizontal or both), a prop added by this library. An aria-label goes to the scrolling viewport, which then gets role="region". The SDK part ScrollAreaScrollToEnd is not exported.',
      "Scrolling is native, so arrow keys, Page Up and Page Down, Home, End and Space work as usual. The viewport is a tab stop only when it holds nothing focusable.",
      "A scrollbar that should show gets data-visible, and type (auto, always, scroll or hover) decides when. ScrollArea gets data-overflow-x, data-overflow-y, data-at-start, data-at-end and data-scrolling, and CSS variables such as `--scroll-area-overflow-y-start` hold how far the content reaches past each edge, for fades and shadows.",
      "With stickToEnd, the end stays in view as content grows, like a chat, and scrolling toward the top lets go. To drive it from elsewhere, use scrollToEnd and scrollToStart on createScrollAreaController().",
    ],
  },
} satisfies ComponentGuide
