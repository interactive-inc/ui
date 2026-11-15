import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    '時と分を区切りごとに打ち込む時刻の入力。営業時間や送信時刻のように、日付を伴わない時刻を聞くときに使う。日付と時刻をまとめて聞くなら DateInput に granularity="minute" を渡す。',
    "Field で包むと FieldLabel が名前になる。表記は locale で決まり、hourCycle で12時間表記か24時間表記かを選べる。granularity に second を渡すと秒まで入力できる。",
    '値は "09:00" のような24時間表記の文字列で onValueChange に届き、入力が途中のあいだは null になる。min と max で入力できる時刻を絞り、開始と終了のように2つ並べるときは前後関係を確かめて知らせる。',
  ],
  sdk: [
    "UI SDK の TimeInput と TimeInputSegment の上に作っている。子を渡さなければ state.segments から TimeInputSegment を並べるので、時、分、午前と午後の欄を自分で書かなくてよい。12時間制か24時間制かは locale に従い、hourCycle で固定できる。",
    'キー操作は DateInput と同じで、数字を打つと次の欄へ進み、上下の矢印キーで増減し、左右の矢印キーで欄を移る。値は表示の時計に関係なく "14:30" のような24時間制の文字列になる。onValueChange の details.reason は input-change、step-key、paste、reset、restore、imperative のいずれか。',
    "name を渡すと隠れた input が時刻を FormData に載せる。min や max の外の時刻には data-invalid が付き、フォームを送信できない。エージェントからは time-input という種類で見え、setValue と clear を呼べる。画面の別の場所から変えるときは createTimeInputController を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "時と分を入力する。矢印キーで値を増減できる。",
      en: {
        title: "Basic",
        description: "Enter hours and minutes. Arrow keys step the values.",
      },
    },
    {
      id: "hour-cycle",
      title: "12時間表記と秒",
      description:
        'hourCycle で表記を選び、granularity="second" で秒まで入力する。値はどちらも24時間表記になる。',
      en: {
        title: "12-hour clock and seconds",
        description:
          'Choose the clock with hourCycle and add seconds with granularity="second". Both submit 24-hour values.',
      },
    },
    {
      id: "business-hours",
      title: "開始と終了",
      description: "2つの時刻を useState で持ち、前後関係と長さを説明に出す。",
      en: {
        title: "Start and end",
        description:
          "Keep both times in useState and show their order and length below.",
      },
    },
  ],
  en: {
    usage: [
      'A time input takes a time typed segment by segment: hours and minutes. Use it for times without a date, such as business hours or a send time. To ask for a date and time together, pass granularity="minute" to DateInput.',
      "Wrap it in a Field so the FieldLabel names it. locale sets the format, and hourCycle chooses a 12-hour or 24-hour clock. Pass second to granularity to include seconds.",
      'The value arrives in onValueChange as a 24-hour string such as "09:00", and is null while the input is incomplete. Narrow the accepted times with min and max, and when placing a start and end side by side, check their order and tell people.',
    ],
    sdk: [
      "Built on the UI SDK TimeInput and TimeInputSegment. With no children it renders a TimeInputSegment for each entry in state.segments, so you do not write the hour, minute, and AM/PM fields yourself. The 12- or 24-hour clock follows locale, and hourCycle fixes it.",
      'The keys are the same as DateInput: digits move on to the next segment, ArrowUp and ArrowDown step it, and ArrowLeft and ArrowRight move between segments. The value is a 24-hour string such as "14:30", whatever clock is shown. details.reason in onValueChange is one of input-change, step-key, paste, reset, restore, or imperative.',
      "With name, a hidden input adds the time to FormData. A time outside min and max sets data-invalid, and its form will not submit. To an agent it appears with the kind time-input and offers the setValue and clear actions. To change it from elsewhere on the page, use createTimeInputController.",
    ],
  },
} satisfies ComponentGuide
