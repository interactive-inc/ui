import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Row of slides in limited width; do not put key info or actions on later slides. Compare all at once -> grid/Table.",
    "CarouselContent > CarouselItem; CarouselPrevious/CarouselNext sit outside, give parent horizontal padding. CarouselContent includes SDK Viewport.",
    "Match CarouselItem basis with slidesPerPage. page, onPageChange; playing, onPlayingChange.",
    "Callback reason: previous-press | next-press | swipe | scroll | timeout | ... Previous/Next default aria-label Japanese. CarouselPlayToggle available.",
    "Attrs: data-active, data-in-view, data-disabled, data-selected (indicator), data-playing on Carousel. Slides under half in view are inert.",
    "Agent: kind carousel, actions setPage, next, previous, setPlaying, play, pause. Controller createCarouselController().",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "1枚ずつ送る。前後のボタンが外に出るので、親に px-12 の余白を取る。",
      en: {
        title: "Basic",
        description: "One slide at a time; parent needs px-12.",
      },
    },
    {
      id: "multiple",
      title: "複数枚を並べる",
      description:
        "CarouselItem の basis と slidesPerPage をそろえ、1画面に3枚ずつ見せて送る。",
      en: {
        title: "Multiple per page",
        description: "CarouselItem basis matches slidesPerPage.",
      },
    },
    {
      id: "controlled",
      title: "ページ番号を出す",
      description:
        "page と onPageChange でいまのページを useState に持ち、何枚目かを表示する。",
      en: {
        title: "Controlled",
        description: "page and onPageChange in useState.",
      },
    },
    {
      id: "with-card",
      title: "カードを送る",
      description:
        "CarouselItem の中に Card を置き、導入事例のような要約を並べる。",
      en: {
        title: "With cards",
        description: "Card inside each CarouselItem.",
      },
    },
  ],
} satisfies ComponentGuide
