import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "1つの面を開いたり閉じたりして、普段は隠しておきたい情報や入力欄をしまっておく。注文の明細、詳しい検索条件、補足の説明などに使う。",
    "見出しが何個も並ぶなら Accordion、画面の上に重ねて出すなら Popover や Dialog を使う。Collapsible はその場で面を押し広げ、まわりの内容を下へずらす。",
    "見た目を持たない部品なので、CollapsibleTrigger と CollapsibleContent に className で形を付ける。開閉に合わせて矢印を回すときは data-open を使う。開いているかを外で知りたいときは open と onOpenChange で持つ。閉じても入力を残したい欄には keepMounted を付ける。",
  ],
  sdk: [
    "`@ui-sdk/react/collapsible` をそのまま出していて、見た目は付けていない。CollapsibleContent は SDK の CollapsiblePanel にあたる。",
    "トリガーは Enter か Space で開閉し、aria-expanded と aria-controls は SDK が付ける。パネルの中にフォーカスがあるまま閉じると、フォーカスはトリガーへ戻る。hiddenUntilFound を CollapsibleContent に渡すと、閉じた中身もページ内検索に掛かって開く。",
    "各パーツに data-open か data-closed が付き、開閉の動きは `--collapsible-panel-height` と data-starting-style、data-ending-style で付けられる。open と onOpenChange で状態を持て、details.reason は trigger-press、find-in-page、imperative、details.cancel() で止められる。動きが終わったあとに何かするなら onOpenChangeComplete を使う。",
    "エージェントからは collapsible という種類で見え、setOpen を呼べる。ほかの場所から開閉するときは createCollapsibleController() の open、close、toggle を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "注文の要約を見出しにして、押すと明細が開く。矢印は data-open で回す。",
      en: {
        title: "Basic",
        description:
          "Use an order summary as the trigger and open the line items on press. Rotate the arrow with data-open.",
      },
    },
    {
      id: "controlled",
      title: "開閉を外で持つ",
      description:
        "open と onOpenChange で開閉を useState に持ち、ボタンの文言を切り替える。",
      en: {
        title: "Controlled",
        description:
          "Keep the open state in useState with open and onOpenChange, and switch the button text with it.",
      },
    },
    {
      id: "advanced-filters",
      title: "詳しい条件をしまう",
      description:
        "よく使う条件だけを出し、残りは閉じておく。keepMounted で閉じても入力を残す。",
      en: {
        title: "Advanced filters",
        description:
          "Show only common filters and keep the rest closed. keepMounted keeps what was typed while closed.",
      },
    },
  ],
  en: {
    usage: [
      "Opens and closes a single panel to tuck away information or fields that are usually hidden. Use it for order line items, advanced search filters or extra notes.",
      "For several headings in a row, use Accordion. To float content over the page, use Popover or Dialog. Collapsible expands in place and pushes the content below it down.",
      "It has no styling of its own, so shape CollapsibleTrigger and CollapsibleContent with className. Use data-open to rotate an arrow as it opens. Keep the state with open and onOpenChange when other parts need it, and add keepMounted to keep field values while closed.",
    ],
    sdk: [
      "Exports `@ui-sdk/react/collapsible` as is, with no styles added. CollapsibleContent is the SDK CollapsiblePanel.",
      "The trigger opens and closes with Enter or Space, and the SDK sets aria-expanded and aria-controls. Closing the panel while focus is inside it moves focus back to the trigger. With hiddenUntilFound on CollapsibleContent, closed content can be matched by find in page, which opens it.",
      "Each part gets data-open or data-closed, and the open and close motion can be styled with `--collapsible-panel-height`, data-starting-style and data-ending-style. Keep the state with open and onOpenChange; details.reason is trigger-press, find-in-page or imperative, and details.cancel() stops the change. Use onOpenChangeComplete to run something after the animation ends.",
      "An agent sees it as the kind collapsible and can call setOpen. To open and close it from elsewhere, use open, close and toggle on createCollapsibleController().",
    ],
  },
} satisfies ComponentGuide
