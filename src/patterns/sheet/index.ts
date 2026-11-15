import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "画面の端から滑り出るパネル。一覧を見ながら1件の詳細を確かめたり、絞り込みや設定をまとめて変えたりするときに使う。",
    "中央に出す Dialog より縦に長い内容を入れやすい。スマートフォンで指で引き下ろして閉じたいなら Drawer を選ぶ。出す向きは SheetContent の side で上下左右から選ぶ。",
    "SheetTitle で題名を付け、本文は SheetHeader と SheetFooter のあいだに置く。右上の閉じるボタンは自動で入るので、フッターのボタンは「保存」など別の名前にする。",
  ],
  sdk: [
    "UI SDK の Dialog をそのまま土台にしていて、Sheet 専用の SDK の部品はない。フォーカスの移動と閉じ込め、Escape と外側の押下で閉じること、フォーカスがトリガーに戻ること、onOpenChange の details（reason、cancel()、returnValue）、dismissible と onDismissAttempt は Dialog と同じ。トップレイヤーに描くので Portal は要らない。",
    "出す向きは SDK の機能ではない。この部品集が SheetContent の side を data-side に出し、CSS で画面の端に寄せている。Dialog の presentation が sheet のとき（下から出てスワイプで閉じる）とは別の仕組みなので、スワイプで動かしたいなら Drawer を使う。",
    "エージェントからは dialog として見える。sheet という種類はない。名前は閉じているあいだはトリガー、開いているあいだは SheetTitle から付き、呼べる操作は setOpen と press。コントローラは createDialogController() をそのまま出している。右上の閉じるボタン（showCloseButton）、SheetHeader、SheetFooter はこの部品集で足したもの。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description: "右から出して、1件の詳細を一覧の横で見せる。",
      en: {
        title: "Basic",
        description:
          "Slide in from the right to show one record's details beside the list.",
      },
    },
    {
      id: "sides",
      title: "出す向き",
      description: "side で上下左右のどこから出すかを選ぶ。",
      en: {
        title: "Sides",
        description: "Choose the edge it slides in from with side.",
      },
    },
    {
      id: "with-form",
      title: "設定をまとめて変える",
      description:
        "入力欄やスイッチを並べ、フッターの保存ボタンで閉じたときに反映する。",
      en: {
        title: "Settings form",
        description:
          "Line up fields and switches, and apply them when the save button in the footer closes it.",
      },
    },
    {
      id: "from-list",
      title: "一覧の行から開く",
      description: "行ごとにトリガーを置き、名前に行の内容を入れて区別する。",
      en: {
        title: "Open from list rows",
        description:
          "Give every row its own trigger and include the row in its name to tell them apart.",
      },
    },
  ],
  en: {
    usage: [
      "A sheet is a panel that slides in from an edge of the screen. Use it to check one record's details while looking at a list, or to change filters and settings together.",
      "It fits longer content than a centered Dialog. Choose Drawer when phone users should drag it closed. Pick the edge with side on SheetContent.",
      "Give it a SheetTitle and put the body between SheetHeader and SheetFooter. The close button in the corner is added for you, so name the footer buttons differently, like Save.",
    ],
    sdk: [
      "Built directly on the UI SDK Dialog; the SDK has no separate Sheet component. Moving and trapping focus, closing on Escape and an outside press, returning focus to the trigger, the details of onOpenChange (reason, cancel(), returnValue), and dismissible with onDismissAttempt all work as in Dialog. It renders in the top layer, so no Portal is needed.",
      "The side is not an SDK feature. This registry puts the side of SheetContent on data-side and pins the panel to that edge with CSS. That is a different mechanism from Dialog's presentation set to sheet (which slides up from the bottom and can be swiped away), so use Drawer when the panel should be dragged.",
      "To an agent it is a dialog; there is no sheet kind. It is named by its trigger while closed and by SheetTitle while open, with the actions setOpen and press. The controller is createDialogController(), re-exported as is. The corner close button (showCloseButton), SheetHeader and SheetFooter are added by this registry.",
    ],
  },
} satisfies ComponentGuide
