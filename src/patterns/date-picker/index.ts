import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "入力欄に日付を打ち込むか、ボタンから開いたカレンダーで選ぶ入力。フォームの中で場所を取らずに日付を聞きたいときの標準的な部品。カレンダーを常に見せたいなら Calendar、打ち込むだけでよいなら DateInput を使う。",
    "DatePickerGroup に DatePickerInput と DatePickerTrigger を並べ、DatePickerContent に DatePickerCalendar を入れる。Field で包むと FieldLabel が名前になる。アイコンだけのトリガーと消去ボタンには aria-label を付ける。",
    '値は ISO 形式の文字列で onValueChange に届く。mode="range" では入力欄を2つ並べ、2つ目に end を付ける。期間のように入力欄が複数あるときは FieldSet と FieldLegend でまとめる。よく使う日付は DatePickerPreset で1回で選べるようにする。',
  ],
  sdk: [
    "UI SDK の DatePicker の上に作っている。DatePickerContent は子を渡さなければ DatePickerCalendar を描き、その中身は SDK の Calendar のパーツ（CalendarPrevious、CalendarHeading、CalendarNext、CalendarGrid、CalendarDay など）で組んである。DatePickerTrigger と DatePickerClear には日本語の名前とアイコンを入れてある。DatePickerGroup、DatePickerSeparator、DatePickerPresets は並べるためにこの部品集で足した入れ物で、SDK のパーツではない。",
    "入力欄は Enter を押すかフォーカスを外したときに文字を日付として読み、Alt と下矢印でカレンダーを開く。開くとフォーカスがグリッドに入り、日付を選ぶか Escape で閉じると DatePickerTrigger に戻る。日付として読めない文字は欄に残ったまま aria-invalid と data-invalid が付き、値は前のまま変わらない。",
    '値は ISO の日付で、onValueChange の details.reason から、カレンダーで選んだ（item-press）、打って確定した（input-commit）、プリセットを押した（preset-press）、消去した（clear-press）を分けられる。開閉は onOpenChange、表示中の月は onMonthChange で受ける。name を渡すと ISO の日付が FormData に載り、mode="range" では startName と endName で開始と終了を別の名前で送れる。Field の中では、DatePicker に name がなければ Field の name が使われる。',
    "エージェントからは date-picker という種類で見え、setOpen、setValue、clear、setMonth、previous、next を呼べる。createDatePickerController の open() は Promise を返し、ポップアップが閉じたときに解決する。年と月を選ぶ CalendarMonthSelect と CalendarYearSelect は DatePickerCalendar に入れていないので、使うときは @ui-sdk/react/date-picker から Calendar のパーツを import して DatePickerContent の子に並べる。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "入力欄とカレンダーを開くボタンを並べる。打ち込んでも選んでもよい。",
      en: {
        title: "Basic",
        description:
          "Place the input beside a button that opens the calendar. People can type or pick.",
      },
    },
    {
      id: "presets",
      title: "よく使う日付",
      description:
        "DatePickerPreset で月末のような決まった日付を1回で選べるようにする。",
      en: {
        title: "Presets",
        description:
          "Use DatePickerPreset to pick common dates such as the end of the month in one step.",
      },
    },
    {
      id: "unavailable",
      title: "選べない日と消去",
      description:
        "min、max、unavailable で選べる日を絞り、DatePickerClear で値を消せるようにする。",
      en: {
        title: "Unavailable days and clearing",
        description:
          "Narrow the pickable days with min, max and unavailable, and let people clear the value with DatePickerClear.",
      },
    },
    {
      id: "range",
      title: "期間を選ぶ",
      description:
        'mode="range" で開始日と終了日の入力欄を並べ、カレンダーを2か月分見せる。',
      en: {
        title: "Range",
        description:
          'Use mode="range" with start and end inputs, and show two months in the calendar.',
      },
    },
  ],
  en: {
    usage: [
      "A date picker lets people type a date into an input or pick it from a calendar opened by a button. It is the standard way to ask for a date in a form without taking much room. Use Calendar to keep the calendar visible, and DateInput when typing is enough.",
      "Put DatePickerInput and DatePickerTrigger in a DatePickerGroup, and DatePickerCalendar in DatePickerContent. Wrap it in a Field so the FieldLabel names it. Give the icon-only trigger and clear button an aria-label.",
      'The value arrives in onValueChange as an ISO string. With mode="range", place two inputs and add end to the second. When there are several inputs, as in a range, group them with FieldSet and FieldLegend. Offer common dates with DatePickerPreset.',
    ],
    sdk: [
      "Built on the UI SDK DatePicker. With no children, DatePickerContent renders DatePickerCalendar, which is assembled from the SDK's Calendar parts (CalendarPrevious, CalendarHeading, CalendarNext, CalendarGrid, CalendarDay, and others). DatePickerTrigger and DatePickerClear come with Japanese names and icons. DatePickerGroup, DatePickerSeparator, and DatePickerPresets are layout wrappers this library adds; they are not SDK parts.",
      "The input parses its text as a date on Enter or when it loses focus, and Alt+ArrowDown opens the calendar. Opening moves focus into the grid, and picking a date or closing with Escape returns it to DatePickerTrigger. Text that is not a date stays visible and sets aria-invalid and data-invalid, while the previous value stays unchanged.",
      'The value is an ISO date. details.reason in onValueChange tells a calendar pick (item-press) from a typed commit (input-commit), a preset (preset-press), and a clear (clear-press). Read the open state in onOpenChange and the displayed month in onMonthChange. With name the ISO date is added to FormData; with mode="range", startName and endName submit the two ends under separate names. Inside a Field, the Field\'s name is used when DatePicker has none.',
      "To an agent it appears with the kind date-picker and offers the setOpen, setValue, clear, setMonth, previous, and next actions. open() on a controller from createDatePickerController returns a Promise that resolves once the popup closes. CalendarMonthSelect and CalendarYearSelect are not part of DatePickerCalendar; to use them, import the Calendar parts from @ui-sdk/react/date-picker and compose them as children of DatePickerContent.",
    ],
  },
} satisfies ComponentGuide
