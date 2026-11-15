import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "フォームの1項目を組み立てる枠。ラベル、入力部品、説明、エラーを Field の中に並べると、名前と説明が入力部品に自動で結び付く。",
    "Label は単体で文字と部品を結ぶだけだが、Field は無効、エラー、検証の状態をまとめて持つ。項目が複数あるときは FieldGroup で間隔をそろえ、意味のまとまりは FieldSet と FieldLegend で囲む。",
    "Field の name が送信時の名前になる。ブラウザの検証は FieldError の match で問題ごとに文言を出し、サーバーからのエラーは invalid と errors で見せる。チェックボックスやスイッチは orientation を horizontal にする。",
  ],
  sdk: [
    "UI SDK の Field の上に作られている。中に置いた SDK の入力部品が自分で Field につながり、id、aria-labelledby、aria-describedby、aria-invalid が付くので、これらを手で書く必要はない。",
    "検証はブラウザの制約をそのまま使い、送信を試みたあとにエラーが出て、最初の無効な部品にフォーカスが移る。Field の invalid に true を渡すとすぐにエラーを見せ、渡さなければブラウザの検証に従う。状態は data-invalid と data-disabled がすべてのパーツに付く。",
    "エージェントからは、エラーが出ているときだけ field として見え、ふだんは中の入力部品が FieldLabel の名前で見える。Field に data-agent-secret を付けると、エージェントは書き込めるが値は [redacted] と読める。FieldControl で描いた SDK 以外の部品は、エージェントからは見えない。",
    "この部品集では orientation、FieldContent、FieldTitle、FieldSeparator、FieldLegend の variant を足している。FieldError には errors を足し、同じ文言をまとめて表示する。children か errors を渡すと常に出て、match を渡したときだけブラウザの検証の種類で出し分ける。自作の部品を Field につなぐ useFieldControl も出している。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "FieldLabel、入力部品、FieldDescription を並べる。",
      en: {
        title: "Basic",
        description:
          "Line up a FieldLabel, the control and a FieldDescription.",
      },
    },
    {
      id: "validation",
      title: "ブラウザの検証",
      description:
        "required や pattern の結果に合わせ、FieldError の match で文言を出し分ける。",
      en: {
        title: "Browser validation",
        description:
          "Show a different message per result of required or pattern with FieldError's match.",
      },
    },
    {
      id: "server-error",
      title: "サーバーからのエラー",
      description:
        "invalid を付け、errors に渡したメッセージを一覧で表示する。",
      en: {
        title: "Errors from the server",
        description:
          "Set invalid and pass the messages to errors to list them.",
      },
    },
    {
      id: "horizontal",
      title: "横に並べる",
      description:
        "チェックボックスやスイッチは orientation を horizontal にし、FieldContent で文をまとめる。",
      en: {
        title: "Horizontal",
        description:
          "For checkboxes and switches, set orientation to horizontal and group the text in FieldContent.",
      },
    },
    {
      id: "fieldset",
      title: "項目のまとまり",
      description:
        "FieldSet と FieldLegend で囲み、FieldGroup と FieldSeparator で並べる。",
      en: {
        title: "Field sets",
        description:
          "Enclose related fields in FieldSet and FieldLegend, and lay them out with FieldGroup and FieldSeparator.",
      },
    },
  ],
  en: {
    usage: [
      "Builds one item of a form. Put the label, the control, a description and errors inside Field, and the name and description link to the control on their own.",
      "Label only ties text to a control, while Field also holds the disabled, invalid and validation state. Space several items with FieldGroup, and enclose related ones in FieldSet and FieldLegend.",
      "The Field's name is what the form submits. Show a message per browser validation problem with FieldError's match, and show server errors with invalid and errors. Set orientation to horizontal for checkboxes and switches.",
    ],
    sdk: [
      "Built on the UI SDK Field. SDK controls placed inside connect themselves to the Field and get id, aria-labelledby, aria-describedby and aria-invalid, so you do not write those by hand.",
      "Validation uses the browser's constraints: errors appear after a submit attempt and the first invalid control takes focus. Passing invalid as true shows the error at once; leaving it out follows the browser's validation. data-invalid and data-disabled are set on every part.",
      "An agent sees a field only while it has errors; otherwise it sees the control inside, named by FieldLabel. data-agent-secret on a Field lets an agent fill it while its value reads as [redacted]. A non-SDK control rendered through FieldControl is not visible to an agent.",
      "This library adds orientation, FieldContent, FieldTitle, FieldSeparator and a variant on FieldLegend. FieldError gains errors, which merges duplicate messages. It always shows when given children or errors, and follows a browser validity key only when match is passed. useFieldControl, for joining your own control to a Field, is exposed too.",
    ],
  },
} satisfies ComponentGuide
