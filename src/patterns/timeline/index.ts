import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "出来事を時間の順に縦や横に並べる。案件の進み方、注文の配送状況、問い合わせの対応履歴などに使う。",
    "数値の推移を見せるなら Chart、それぞれの所要時間を棒で比べるなら Waterfall を使う。Timeline は「いつ、何が起きたか」を文章で追うための部品。",
    "TimelineItem の status に complete、current、upcoming を渡すと、印と線の色が進み具合に合わせて変わる。current の項目は aria-current になる。時刻は TimelineTime の dateTime に機械が読める形でも書く。",
  ],
  sdk: [
    "`@ui-sdk/react/timeline` の上に作ってあり、SDK のパーツ（Timeline、TimelineItem、TimelineMarker、TimelineConnector、TimelineTitle、TimelineTime、TimelineDescription）をすべて出している。スクリーンリーダーには一覧として読まれ、各項目は TimelineTitle の文言で名前が付く。TimelineMarker と TimelineConnector は読み上げから外れる。",
    "Tab で止まる場所は全体で1つで、上下の矢印（横並びでは左右）と Home、End で項目の間を移る。項目の中のリンクやボタンへは Tab で入る。feed を付けると、PageDown と PageUp で次と前の項目へ移る。",
    'TimelineItem の status に応じて、項目とその中のパーツに data-complete、data-current、data-upcoming が付く。current の項目には aria-current="step" が付き、Tab が最初に止まる場所になる。',
    "選択や開閉の状態は持たないので、変更コールバックはない。createTimelineController() にあるのは、value を指定して項目へフォーカスを移す focus だけで、エージェントが呼べる操作はない。",
  ],
  patterns: [
    {
      id: "basic",
      title: "進み具合",
      description:
        "status で完了、進行中、これからを分け、完了した印にはチェックを入れる。",
      en: {
        title: "Progress",
        description:
          "Split steps into complete, current and upcoming with status, and put a check in completed markers.",
      },
    },
    {
      id: "activity",
      title: "対応履歴",
      description:
        "status を付けずに出来事を新しい順に並べ、誰が何をしたかを残す。",
      en: {
        title: "Activity log",
        description:
          "List events newest first without status to record who did what.",
      },
    },
    {
      id: "with-icon",
      title: "種類ごとのアイコン",
      description:
        "TimelineMarker にアイコンを入れ、出来事の種類を見分けやすくする。",
      en: {
        title: "With icons",
        description:
          "Put an icon in TimelineMarker so each kind of event is easy to tell apart.",
      },
    },
    {
      id: "horizontal",
      title: "横に並べる",
      description:
        'orientation="horizontal" で段階の少ない流れを横一列に見せる。',
      en: {
        title: "Horizontal",
        description:
          'Use orientation="horizontal" to show a short flow in a single row.',
      },
    },
  ],
  en: {
    usage: [
      "Lines up events in time order, vertically or horizontally. Use it for project progress, delivery status or the history of a support ticket.",
      "To show how numbers change, use Chart. To compare how long each step took with bars, use Waterfall. Timeline is for following when and what happened, in words.",
      "Pass complete, current or upcoming to the status of TimelineItem and the marker and line colors follow the progress. The current item gets aria-current. Write times in a machine-readable form with the dateTime of TimelineTime as well.",
    ],
    sdk: [
      "Built on `@ui-sdk/react/timeline`, with every SDK part exported: Timeline, TimelineItem, TimelineMarker, TimelineConnector, TimelineTitle, TimelineTime and TimelineDescription. Screen readers hear it as a list, and each event is named by the text of its TimelineTitle. TimelineMarker and TimelineConnector are hidden from screen readers.",
      "The events share one tab stop; Up and Down Arrow (Left and Right when horizontal), Home and End move between them. Tab moves into links and buttons inside an event. With feed, Page Down and Page Up move to the next and previous event.",
      'Depending on status on TimelineItem, the item and the parts inside it get data-complete, data-current or data-upcoming. The current event gets aria-current="step" and takes the tab stop first.',
      "It holds no selection or open state, so there are no change callbacks. createTimelineController() only has focus, which moves focus to an event by its value, and there are no actions for an agent to call.",
    ],
  },
} satisfies ComponentGuide
