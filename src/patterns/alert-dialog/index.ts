import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "操作を実行する前に、本当に進めてよいかを確かめるダイアログ。削除、送信、解約など、取り消せない操作や影響の大きい操作の直前に出す。",
    "Dialog と違い、外側を押しても閉じず、選ぶまで先に進めない。入力や詳しい内容を見せたいだけなら Dialog を使う。",
    "題名は「〜しますか?」の問いにし、説明に起きることを具体的に書く。確定ボタンは AlertDialogAction、やめるボタンは AlertDialogCancel。確定ボタンには value と data-agent-confirm を付け、結果は onOpenChange の details.returnValue で受け取る。",
  ],
  sdk: [
    "UI SDK の AlertDialog の上に作っている。role は alertdialog で、常にモーダルになり、外側を押しても閉じない。Dialog にある modal、closeOnOutsidePress、presentation は持たない。Escape では閉じ、フォーカスはトリガーに戻る。トップレイヤーに描くので Portal は要らない。",
    "開くとフォーカスは最初の Close パーツに移るので、AlertDialogCancel を先に置く。AlertDialogAction と AlertDialogCancel は、どちらも SDK の AlertDialogClose に buttonVariants を付けたもので、value が onOpenChange の details.returnValue に届く。action が Promise を返すと、終わるまで開いたままで data-pending が付き、成功すると reason が action で閉じ、失敗すると開いたまま残る。",
    "createConfirm() は、イベントハンドラから await で答えを受け取る関数を作る。その controller を AlertDialog に渡すと、value が confirm の Close パーツで閉じたときだけ true、それ以外は false で解決し、同じ関数への呼び出しは順番を待つ。開閉だけを外から動かすなら createAlertDialogController() を使う。",
    "エージェントからは alert-dialog として見え、名前は閉じているあいだはトリガー、開いているあいだは AlertDialogTitle から付く。呼べる操作は setOpen と press。確定ボタンに data-agent-confirm を付けると、エージェントの press は人の確認を待つ。この部品集では AlertDialogContent の size、AlertDialogMedia、AlertDialogHeader、AlertDialogFooter を足している。マークアップなしで尋ねる SDK の confirm() は出していない。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "問いの題名、起きることの説明、キャンセルと確定の2つのボタン。",
      en: {
        title: "Basic",
        description:
          "A question as the title, what will happen as the description, and cancel and confirm buttons.",
      },
    },
    {
      id: "destructive",
      title: "取り消せない操作",
      description:
        "AlertDialogMedia でアイコンを添え、確定ボタンを destructive にして重さを伝える。",
      en: {
        title: "Destructive",
        description:
          "Add an icon with AlertDialogMedia and make the confirm button destructive to show the weight of the action.",
      },
    },
    {
      id: "small",
      title: "小さい確認",
      description:
        "size を sm にすると、短い確認向けにボタンが横に並んだ小さい形になる。",
      en: {
        title: "Small",
        description:
          "Set size to sm for a compact confirmation with the buttons side by side.",
      },
    },
    {
      id: "with-result",
      title: "結果を受け取る",
      description:
        "onOpenChange の details.returnValue で、確定で閉じたかどうかを見分けて画面に反映する。",
      en: {
        title: "Read the result",
        description:
          "Use details.returnValue in onOpenChange to tell whether it closed from the confirm button, and update the screen.",
      },
    },
  ],
  en: {
    usage: [
      "An alert dialog asks for confirmation before an action runs. Show it right before actions that cannot be undone or have a large effect, like deleting, sending or canceling a contract.",
      "Unlike Dialog, an outside press does not close it, and the user must choose before moving on. Use Dialog when you only need a form or more details.",
      "Phrase the title as a question and describe exactly what will happen. Use AlertDialogAction for the confirm button and AlertDialogCancel to back out. Give the confirm button a value and data-agent-confirm, and read the result from details.returnValue in onOpenChange.",
    ],
    sdk: [
      "Built on the UI SDK AlertDialog. Its role is alertdialog, it is always modal, and an outside press never closes it. It has no modal, closeOnOutsidePress or presentation options, unlike Dialog. Escape closes it and focus returns to the trigger. It renders in the top layer, so no Portal is needed.",
      "Opening focuses the first Close part, so put AlertDialogCancel first. AlertDialogAction and AlertDialogCancel are both the SDK's AlertDialogClose with buttonVariants applied, and their value reaches details.returnValue in onOpenChange. When action returns a Promise, the dialog stays open with data-pending until it settles: it closes with reason action on success and stays open on a rejection.",
      "createConfirm() makes a function you await in an event handler. Pass its controller to AlertDialog; it resolves true only when the Close part with value confirm closes the dialog and false otherwise, and calls to the same function wait their turn. Use createAlertDialogController() to only open and close it from outside.",
      "To an agent it is an alert-dialog, named by its trigger while closed and by AlertDialogTitle while open, with the actions setOpen and press. With data-agent-confirm on the confirming button, an agent's press waits for a person. This registry adds size on AlertDialogContent, AlertDialogMedia, AlertDialogHeader and AlertDialogFooter. The SDK's markup-free confirm() is not exported.",
    ],
  },
} satisfies ComponentGuide
