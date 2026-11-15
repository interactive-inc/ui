import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "月のカレンダーを開いたまま見せて日付を選ぶ部品。曜日や前後の日との並びを見ながら選ばせたい予約画面や、期間の指定に向く。入力欄から開いて選ばせたいなら DatePicker、キーボードで打ち込ませたいなら DateInput を使う。",
    '値は "2026-11-20" のような ISO 形式の文字列で、onValueChange で受ける。mode で1日だけ、複数の日、期間を選び分け、期間の値は [開始日, 終了日] になる。日付の計算や表示は date-fns でできる。',
    "選べない日は min、max、unavailable で決める。土日なら { weekday: [0, 6] }、祝日は日付の文字列で並べる。プレビューでの水和ずれを避けるため、today には固定の日付を渡す。",
  ],
  sdk: [
    'UI SDK の Calendar の上に作っている。子を渡さなければ、前後の月のボタン、見出し、曜日、日付のグリッドを組んだ形で描く。captionLayout="dropdown" は SDK の CalendarMonthSelect と CalendarYearSelect を出し、months は CalendarGrid を月の数だけ並べる。前後のボタンの名前は「前の月」「次の月」にしてあり、mode と value の型の対応もこの部品集で付けている。',
    "グリッドのタブ移動は1か所で、選ばれた日付が見えていればそこに、なければ今日に入る。左右の矢印キーで1日、上下で1週間、Home と End で週の端、Page Up と Page Down で1か月、Shift を足すと1年動き、Enter か Space で選ぶ。別の月へ動くと、表示が切り替わってからその日付にフォーカスが移る。",
    '日付は "2026-10-16" のような ISO の文字列で、日付ライブラリは要らない。日付の状態は data-selected、data-today、data-outside、data-unavailable、data-disabled として出て、範囲では data-range-start、data-range-middle、data-range-end、data-preview も付く。月名や曜日は locale、省くとページの lang に従う。',
    "値は onValueChange、表示中の月は onMonthChange で受け、どちらも details.reason と details.cancel() を持つ。エージェントからは calendar という種類で見え、setValue、setMonth、previous、next を呼べる。画面の別の場所から動かすときは createCalendarController を使う。Calendar は name を持たないので、フォームで送る日付には DatePicker か DateInput を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "1日を選び、date-fns で日本語の日付にして表示する。",
      en: {
        title: "Basic",
        description:
          "Select a single day and format it as a Japanese date with date-fns.",
      },
    },
    {
      id: "range",
      title: "期間を選ぶ",
      description: 'mode="range" で開始日と終了日を選び、日数を数える。',
      en: {
        title: "Range",
        description:
          'Use mode="range" to pick a start and end date, and count the days.',
      },
    },
    {
      id: "multiple",
      title: "複数の日を選ぶ",
      description: 'mode="multiple" で値が日付の配列になる。',
      en: {
        title: "Multiple days",
        description: 'With mode="multiple" the value is an array of dates.',
      },
    },
    {
      id: "unavailable",
      title: "選べない日",
      description: "min と max で受付期間を決め、unavailable で休業日を外す。",
      en: {
        title: "Unavailable days",
        description:
          "Set the booking window with min and max, and exclude closed days with unavailable.",
      },
    },
  ],
  en: {
    usage: [
      "A calendar shows a month and lets people pick dates from it. It suits booking screens and date ranges where people choose while seeing weekdays and neighboring days. Use DatePicker to open it from an input, and DateInput when people should type the date.",
      'Values are ISO strings such as "2026-11-20", read in onValueChange. mode chooses one day, several days or a range; a range value is [start, end]. Use date-fns for date math and formatting.',
      "Decide which days cannot be picked with min, max and unavailable: { weekday: [0, 6] } for weekends and date strings for holidays. Pass a fixed date to today to avoid hydration mismatches in previews.",
    ],
    sdk: [
      'Built on the UI SDK Calendar. With no children it renders a ready-made layout: previous and next buttons, a heading, weekdays, and the day grid. captionLayout="dropdown" shows the SDK\'s CalendarMonthSelect and CalendarYearSelect, and months renders one CalendarGrid per month. The previous and next buttons are named 「前の月」 and 「次の月」, and this library also ties the type of value to mode.',
      "The grid is a single tab stop: the selected date when it is visible, otherwise today. Left and Right move one day, Up and Down one week, Home and End to the ends of the week, Page Up and Page Down one month, and with Shift one year; Enter or Space selects. Moving into another month shows it and then focuses the date.",
      'Dates are ISO strings such as "2026-10-16", and no date library is needed. Day state is exposed as data-selected, data-today, data-outside, data-unavailable, and data-disabled, and a range adds data-range-start, data-range-middle, data-range-end, and data-preview. Month and weekday names follow locale, or the page\'s lang when it is omitted.',
      "Read the value in onValueChange and the displayed month in onMonthChange; both receive details.reason and details.cancel(). To an agent it appears with the kind calendar and offers the setValue, setMonth, previous, and next actions. To drive it from elsewhere on the page, use createCalendarController. Calendar has no name prop, so use DatePicker or DateInput for a date a form submits.",
    ],
  },
} satisfies ComponentGuide
