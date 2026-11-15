import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "表示密度や通貨、サイドバーの開閉のような、利用者ごとの表示の好みを持つための仕組み。値は data 属性として要素に付くので、見た目の切り替えは CSS だけで書ける。フォームで送る値ではなく、画面の表示を変える設定に使う。",
    "createPreference で値の候補、初期値、付ける属性名を決め、Preferences に渡すと中身がその属性を持つ。Tailwind では in-data-[density=compact]: のように書いて、属性に合わせて見た目を変える。",
    "描画する内容そのものが変わるときは usePreference で値を読む。値の変更は preference の set を呼ぶ。storage に createLocalStorage を渡すと、選んだ値がブラウザに保存されて次回も引き継がれる。",
  ],
  sdk: [
    'UI SDK の Preferences と usePreference をそのまま出していて、足したのは data-slot="preferences" だけ。createPreference と createLocalStorage は @ui-sdk/core のものを、この部品のファイルからそのまま import できるようにしてある。',
    "Preferences は display: contents で描かれるので、レイアウト上の箱は増えない。global: true を付けた設定は属性が html 要素に付き、ページ全体の CSS から使える。同じ設定のインスタンスを渡した Preferences は同じ値に従い、usePreference は Preferences の外でも使える。",
    "サーバーでの描画では、保存された値を最初の表示の前に属性へ当てるスクリプトが一緒に出るので、読み込み直後の切り替わりを自分で防がなくてよい。Content Security Policy で nonce が要るときは Preferences の nonce に渡す。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "Preferences が data-density を付け、一覧の行の高さを CSS だけで切り替える。",
      en: {
        title: "Basic",
        description:
          "Preferences sets data-density, and CSS alone switches the row height of the list.",
      },
    },
    {
      id: "read-value",
      title: "値を読んで描画を変える",
      description: "usePreference で値を読み、金額の書き方を変える。",
      en: {
        title: "Reading the value",
        description:
          "Read the value with usePreference and change how the amount is written.",
      },
    },
    {
      id: "storage",
      title: "選んだ値を保存する",
      description:
        "storage に createLocalStorage を渡し、サイドバーの開閉を次回も引き継ぐ。",
      en: {
        title: "Saving the choice",
        description:
          "Pass createLocalStorage to storage so the sidebar state carries over to the next visit.",
      },
    },
  ],
  en: {
    usage: [
      "Preferences hold per-person display choices such as density, currency or whether a sidebar is open. The value is set as a data attribute on an element, so CSS alone can switch the look. Use it for settings that change how the screen looks, not for values submitted with a form.",
      "Define the allowed values, the default and the attribute name with createPreference, then pass it to Preferences so its content carries that attribute. In Tailwind, write variants like in-data-[density=compact]: to style by the attribute.",
      "When the rendered content itself changes, read the value with usePreference. Change it by calling the preference's set. Pass createLocalStorage to storage to save the choice in the browser for the next visit.",
    ],
    sdk: [
      "Preferences and usePreference are the UI SDK's own; the only addition is data-slot=\"preferences\". createPreference and createLocalStorage from @ui-sdk/core are re-exported from this component's file so you can import them from one place.",
      "Preferences renders with display: contents, so it adds no box to the layout. A preference defined with global: true puts its attribute on the html element, where styles across the page can use it. Preferences components that share a preference instance follow the same value, and usePreference also works outside a Preferences component.",
      "When rendered on the server, Preferences includes a script that applies saved values to the attributes before the first paint, so you do not have to guard against a flash yourself. If your Content Security Policy requires a nonce, pass it to the nonce prop of Preferences.",
    ],
  },
} satisfies ComponentGuide
