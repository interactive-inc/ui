import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "見出しを並べておき、押した項目の中身だけを開いて読ませる。よくある質問、設定の項目ごとの説明、手順の補足などに使う。",
    "開閉する面が1つだけなら Collapsible、同時に1つの面だけを切り替えて見せるなら Tabs を使う。Accordion は縦に並んだ見出しを、読みたいものだけ開いていく部品。",
    "AccordionItem に value を付け、開いている項目は value と onValueChange で配列として持つ。初めは1つしか開かず、multiple を付けると複数を同時に開ける。使えない項目は AccordionItem に disabled を付ける。",
  ],
  sdk: [
    "`@ui-sdk/react/accordion` の上に作ってある。AccordionTrigger は SDK の AccordionHeader と AccordionTrigger をまとめたもので、開閉で入れ替わる山形のアイコンも含む。AccordionContent は SDK の AccordionPanel にあたり、高さの動きは SDK が出す `--accordion-panel-height` で付けている。AccordionContent の className は中身を包む要素に付く。",
    "Tab でトリガーを順に移り、Enter か Space で開閉する。矢印キーではフォーカスは動かない。hiddenUntilFound を渡すと、閉じたパネルの文言もブラウザのページ内検索に掛かり、見つかるとその項目が開く。",
    "項目、トリガー、パネルに data-open か data-closed、使えないものに data-disabled が付く。開いている項目は配列の value と onValueChange で持ち、details.reason は trigger-press、find-in-page、imperative、details.cancel() で開閉を止められる。項目ごとに知りたいときは AccordionItem の onOpenChange と onOpenChangeComplete を使う。",
    "エージェントからは accordion という種類で見え、setValue、open、close、toggle、openAll、closeAll を呼べる。閉じた項目の中にある部品も、エージェントは開いて探し当てる。ほかの場所から開閉するときは createAccordionController() を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "1度に1つだけ開く。defaultValue で最初に開く項目を決める。",
      en: {
        title: "Basic",
        description:
          "Only one item opens at a time. Set the item open at first with defaultValue.",
      },
    },
    {
      id: "multiple",
      title: "複数を開く",
      description:
        "multiple を付けると、ほかの項目を閉じずに開ける。見比べたい手順に向く。",
      en: {
        title: "Multiple",
        description:
          "With multiple, items open without closing the others. Good for steps people want to compare.",
      },
    },
    {
      id: "controlled",
      title: "開閉を外で持つ",
      description:
        "value と onValueChange で開いている項目を useState に持ち、進み具合を表示する。",
      en: {
        title: "Controlled",
        description:
          "Keep the open items in useState with value and onValueChange, and show progress from them.",
      },
    },
    {
      id: "disabled",
      title: "使えない項目",
      description:
        "準備中の項目は disabled にする。フォーカスは残るので存在は伝わる。",
      en: {
        title: "Disabled",
        description:
          "Mark items that are not ready as disabled. They stay focusable, so people still know they exist.",
      },
    },
  ],
  en: {
    usage: [
      "Lists headings and opens only the content of the one that is pressed. Use it for FAQs, explanations for each setting or extra notes on steps.",
      "For a single panel, use Collapsible. To switch one pane at a time, use Tabs. Accordion is for a vertical list of headings where people open only what they want to read.",
      "Give each AccordionItem a value, and keep open items as an array with value and onValueChange. By default only one item opens; add multiple to open several at once. Add disabled to an AccordionItem that cannot be used.",
    ],
    sdk: [
      "Built on `@ui-sdk/react/accordion`. AccordionTrigger combines the SDK AccordionHeader and AccordionTrigger and includes the chevron that swaps when it opens. AccordionContent is the SDK AccordionPanel, and its height animation uses `--accordion-panel-height` from the SDK. The className of AccordionContent goes to the element that wraps the content.",
      "Tab moves through the triggers in order, and Enter or Space opens and closes. Arrow keys do not move focus. With hiddenUntilFound, the text of closed panels can be matched by the browser's find in page, which opens the item.",
      "Items, triggers and panels get data-open or data-closed, and disabled ones get data-disabled. Keep the open items with the array value and onValueChange; details.reason is trigger-press, find-in-page or imperative, and details.cancel() stops the change. For a single item, use onOpenChange and onOpenChangeComplete on AccordionItem.",
      "An agent sees it as the kind accordion and can call setValue, open, close, toggle, openAll and closeAll. An agent can also find a component inside a closed item by opening it. To open and close items from elsewhere, use createAccordionController().",
    ],
  },
} satisfies ComponentGuide
