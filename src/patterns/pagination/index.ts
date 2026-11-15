import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "件数の多い一覧を、決まった件数ずつのページに分けて行き来する。注文一覧や検索結果の下に置く。",
    "件数が少なくスクロールで足りるなら ScrollArea、時系列で読み足していくなら「もっと見る」のボタンのほうが合う。Pagination はページ番号で位置を伝えたいときに使う。",
    "pageCount か total と pageSize でページ数を渡し、PaginationContent の子に関数を渡して items を並べる。番号の省略は siblings と boundaries で調整する。いまのページは page と onPageChange で持つ。",
  ],
  sdk: [
    "`@ui-sdk/react/pagination` の上に作ってある。PaginationContent は SDK の PaginationList にあたり、PaginationFirst と PaginationLast も出している。並べるページ番号と省略の位置は SDK が siblings と boundaries から計算して items で渡すので、自分で計算しなくてよい。同じ計算を別の場所で使うときは paginationRange を使う。",
    "この部品集では、Pagination と前後、最初、最後のボタンに日本語の aria-label を既定で付けている。別の言語で使うときは aria-label と PaginationPrevious、PaginationNext の text を渡して上書きする。",
    'いまのページのリンクに data-current と aria-current="page" が付く。端に着いた前後のボタンは data-disabled と aria-disabled が付いて何もしなくなるが、フォーカスは受ける。getHref を渡すと各パーツがリンクになり、渡さなければボタンになる。',
    "onPageChange の第2引数 details の reason は item-press、previous-press、next-press、first-press、last-press、imperative で、details.cancel() でページを変えずにおける。エージェントからは pagination という種類で見え、setPage、next、previous、first、last を呼べる。ほかの場所からページを送るときは createPaginationController() を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "ページ数の少ない一覧。番号と前後の移動だけを並べる。",
      en: {
        title: "Basic",
        description:
          "A short list with a few pages. Shows only page numbers and previous/next.",
      },
    },
    {
      id: "with-ellipsis",
      title: "番号を省略する",
      description:
        "ページ数が多いときは siblings と boundaries で見せる番号を絞り、間を PaginationEllipsis にする。",
      en: {
        title: "With ellipsis",
        description:
          "For many pages, limit the numbers shown with siblings and boundaries and fill the gaps with PaginationEllipsis.",
      },
    },
    {
      id: "with-summary",
      title: "件数の表示と連動",
      description:
        "total と pageSize でページ数を出し、何件目を表示中かを添える。",
      en: {
        title: "With summary",
        description:
          "Derive pages from total and pageSize, and show which range of items is on screen.",
      },
    },
    {
      id: "with-links",
      title: "リンクにする",
      description:
        "getHref を渡すと各ページがリンクになり、新しいタブでも開ける。",
      en: {
        title: "As links",
        description:
          "Pass getHref to turn each page into a link that can also open in a new tab.",
      },
    },
  ],
  en: {
    usage: [
      "Splits a long list into pages of a fixed size and moves between them. Place it under an order list or search results.",
      "If the list is short enough to scroll, use ScrollArea. For a feed read in order, a Load more button fits better. Use Pagination when page numbers should tell people where they are.",
      "Give the number of pages with pageCount, or with total and pageSize, and pass a function to PaginationContent to lay out items. Tune skipped numbers with siblings and boundaries. Keep the current page with page and onPageChange.",
    ],
    sdk: [
      "Built on `@ui-sdk/react/pagination`. PaginationContent is the SDK PaginationList, and PaginationFirst and PaginationLast are exported too. The SDK works out which page numbers to show and where to skip from siblings and boundaries and hands them over as items, so you do not compute the range yourself. Use paginationRange to run the same calculation elsewhere.",
      "This library adds Japanese aria-label defaults to Pagination and to the Previous, Next, First and Last buttons. For another language, override them with aria-label and with text on PaginationPrevious and PaginationNext.",
      'The current page\'s link gets data-current and aria-current="page". A step at the end it goes to gets data-disabled and aria-disabled and does nothing, but stays focusable. With getHref the parts are links; without it they are buttons.',
      "In onPageChange, the reason in the second argument details is item-press, previous-press, next-press, first-press, last-press or imperative, and details.cancel() keeps the page. An agent sees it as the kind pagination and can call setPage, next, previous, first and last. To page from elsewhere, use createPaginationController().",
    ],
  },
} satisfies ComponentGuide
