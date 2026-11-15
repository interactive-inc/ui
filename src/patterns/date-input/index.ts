import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "年、月、日を区切りごとに打ち込む日付の入力。生年月日や契約日のように、カレンダーを開くより入力したほうが早い日付に向く。カレンダーから選ばせたいなら DatePicker、時刻だけなら TimeInput を使う。",
    "Field で包むと FieldLabel が名前になる。locale で区切りの並びと書き方が決まり、矢印キーで各区切りの値を増減できる。min と max で入力できる範囲を絞る。",
    '値は "2026-12-01" のような ISO 形式の文字列で onValueChange に届き、入力が途中のあいだは null になる。granularity に minute を渡すと時刻まで入力でき、値は "2026-11-28T02:00" の形になる。変更させない日付は readOnly にする。',
  ],
  sdk: [
    "UI SDK の DateInput と DateInputSegment の上に作っている。子を渡さなければ state.segments から DateInputSegment を並べるので、年、月、日の欄と区切りの文字を自分で書かなくてよい。並び順と区切りは locale、省くとページの言語に従う。",
    "各欄は spinbutton で、数字を打つと欄が埋まって次へ進み、上下の矢印キーで1ずつ、Page Up と Page Down で大きく増減する。左右の矢印キーで欄を移り、Backspace は最後の桁を消し、欄を空にし、前の欄へ戻る。貼り付けた日付は全部の欄に入る。",
    '値は "2026-10-16" のような ISO の日付で、欄がすべて埋まると onValueChange が呼ばれ、消されると null で呼ばれる。details.reason は input-change、step-key、paste、reset、restore、imperative のいずれか。name を渡すと隠れた input が ISO の日付を FormData に載せる。min や max の外の日付には data-invalid が付き、フォームを送信できない。',
    'エージェントからは date-input という種類で見え、setValue と clear を呼べる。画面の別の場所から変えるときは createDateInputController を使い、focus("month") のように欄を指定してフォーカスも移せる。',
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: 'locale="ja-JP" で年、月、日の順に入力する。',
      en: {
        title: "Basic",
        description: 'With locale="ja-JP" the segments run year, month, day.',
      },
    },
    {
      id: "min-max",
      title: "入力できる範囲",
      description: "min と max で範囲を決め、入力した日付を説明に反映する。",
      en: {
        title: "Min and max",
        description:
          "Limit the range with min and max, and reflect the entered date in the description.",
      },
    },
    {
      id: "date-time",
      title: "日時を入力する",
      description: 'granularity="minute" で時刻まで入力する。',
      en: {
        title: "Date and time",
        description: 'Use granularity="minute" to include the time.',
      },
    },
    {
      id: "read-only",
      title: "読み取り専用",
      description:
        "readOnly にすると、値はフォームで送られたまま変更だけを止める。",
      en: {
        title: "Read-only",
        description:
          "readOnly stops changes while the value is still submitted with the form.",
      },
    },
  ],
  en: {
    usage: [
      "A date input takes a date typed segment by segment: year, month and day. It suits dates that are faster to type than to find in a calendar, such as birthdays or contract dates. Use DatePicker to pick from a calendar, and TimeInput for a time alone.",
      "Wrap it in a Field so the FieldLabel names it. locale sets the order and format of the segments, and arrow keys step each segment. Narrow the accepted range with min and max.",
      'The value arrives in onValueChange as an ISO string such as "2026-12-01", and is null while the input is incomplete. Pass minute to granularity to include the time, making the value look like "2026-11-28T02:00". Use readOnly for dates that must not change.',
    ],
    sdk: [
      "Built on the UI SDK DateInput and DateInputSegment. With no children it renders a DateInputSegment for each entry in state.segments, so you do not write the year, month, and day fields or the text between them. Their order and separators follow locale, or the page's language when it is omitted.",
      "Each field is a spinbutton: digits fill the segment and move to the next one, ArrowUp and ArrowDown step by one, and Page Up and Page Down step by more. ArrowLeft and ArrowRight move between segments, and Backspace removes the last digit, then empties the segment, then moves back. Pasting a date fills every segment.",
      'The value is an ISO date such as "2026-10-16". onValueChange runs once every segment is filled, and with null once the date is erased. details.reason is one of input-change, step-key, paste, reset, restore, or imperative. With name, a hidden input adds the ISO date to FormData. A date outside min and max sets data-invalid, and its form will not submit.',
      'To an agent it appears with the kind date-input and offers the setValue and clear actions. To change it from elsewhere on the page, use createDateInputController, which can also focus a segment, as in focus("month").',
    ],
  },
} satisfies ComponentGuide
