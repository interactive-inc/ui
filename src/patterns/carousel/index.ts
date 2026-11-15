import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "横に並んだ複数のカードや画像を、限られた幅の中で送りながら見せる。新着のお知らせ、おすすめの商品、導入事例の紹介などに使う。",
    "全件を一度に見比べたいなら grid で並べるか Table を使う。Carousel は見えない項目があることを前提にするので、大事な情報や操作を2枚目以降に置かない。",
    "CarouselContent の中に CarouselItem を並べ、CarouselPrevious と CarouselNext で送る。前後のボタンは外側に出るので、親に左右の余白を取る。1画面に何枚見せるかは CarouselItem の basis と slidesPerPage をそろえて決める。いまのページは page と onPageChange で持つ。",
  ],
  sdk: [
    "`@ui-sdk/react/carousel` の上に作ってある。CarouselContent は SDK の CarouselViewport と CarouselContent をまとめたもので、スクロールする枠を別に書かなくてよい。CarouselPrevious と CarouselNext には矢印のアイコンと日本語の aria-label を、CarouselPlayToggle には再生と一時停止のアイコンを既定で入れている。",
    "スワイプ、ドラッグ、スクロールでページが移る。スライドの枠にフォーカスがあるとき、左右の矢印（縦では上下）で前後のページへ、Home と End で最初と最後へ移る。半分以上見えていないスライドは inert になり、Tab も読み上げも届かない。キーボードのフォーカスが中に入ると自動送りは止まる。",
    "いまのページのスライドに data-active、見えているスライドに data-in-view、端に着いた前後のボタンに data-disabled、いまのページのインジケーターに data-selected、自動送りの間は Carousel に data-playing が付く。ページは page と onPageChange、自動送りは playing と onPlayingChange で持ち、details.reason で previous-press、next-press、swipe、scroll、timeout などを見分けられる。",
    "エージェントからは carousel という種類で見え、setPage、next、previous、setPlaying、play、pause を呼べる。ほかの場所から送るときは createCarouselController() を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "1枚ずつ送る。前後のボタンが外に出るので、親に px-12 の余白を取る。",
      en: {
        title: "Basic",
        description:
          "Move one slide at a time. The previous and next buttons sit outside, so give the parent px-12 padding.",
      },
    },
    {
      id: "multiple",
      title: "複数枚を並べる",
      description:
        "CarouselItem の basis と slidesPerPage をそろえ、1画面に3枚ずつ見せて送る。",
      en: {
        title: "Multiple per page",
        description:
          "Match the CarouselItem basis with slidesPerPage to show and move three slides per page.",
      },
    },
    {
      id: "controlled",
      title: "ページ番号を出す",
      description:
        "page と onPageChange でいまのページを useState に持ち、何枚目かを表示する。",
      en: {
        title: "Controlled",
        description:
          "Keep the current page in useState with page and onPageChange, and show which slide is on screen.",
      },
    },
    {
      id: "with-card",
      title: "カードを送る",
      description:
        "CarouselItem の中に Card を置き、導入事例のような要約を並べる。",
      en: {
        title: "With cards",
        description:
          "Place a Card inside each CarouselItem to line up summaries such as customer stories.",
      },
    },
  ],
  en: {
    usage: [
      "Shows several cards or images in a row and lets people move through them within a limited width. Use it for announcements, recommended products or customer stories.",
      "If everything should be compared at once, lay it out in a grid or use Table. Carousel assumes some items are out of view, so do not put important information or actions on later slides.",
      "Put CarouselItem elements inside CarouselContent and move with CarouselPrevious and CarouselNext. The buttons sit outside the slides, so leave horizontal padding on the parent. Decide how many slides show at once by matching the CarouselItem basis with slidesPerPage. Keep the current page with page and onPageChange.",
    ],
    sdk: [
      "Built on `@ui-sdk/react/carousel`. CarouselContent combines the SDK CarouselViewport and CarouselContent, so you do not write the scrolling frame separately. CarouselPrevious and CarouselNext come with arrow icons and Japanese aria-label defaults, and CarouselPlayToggle comes with play and pause icons.",
      "Swiping, dragging and scrolling change the page. With focus on the slide viewport, Left and Right Arrow (Up and Down when vertical) go to the previous and next page, and Home and End go to the first and last. Slides less than half in view are inert, so neither Tab nor screen readers reach them. Rotation stops when keyboard focus moves inside.",
      "Slides of the current page get data-active, slides in view get data-in-view, Previous or Next at an end gets data-disabled, the current page's indicator gets data-selected, and Carousel gets data-playing while it rotates. Keep the page with page and onPageChange and rotation with playing and onPlayingChange; details.reason tells apart previous-press, next-press, swipe, scroll, timeout and others.",
      "An agent sees it as the kind carousel and can call setPage, next, previous, setPlaying, play and pause. To page from elsewhere, use createCarouselController().",
    ],
  },
} satisfies ComponentGuide
