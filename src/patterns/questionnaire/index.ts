import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "質問を1つずつ見せ、選ぶか書くかして先へ進むアンケート。サポートのあとの満足度調査や、問い合わせ前の聞き取りのように、答えやすさを優先したい場面で使う。",
    "項目を一度に全部見せる入力なら Field と各入力部品でフォームを組む。Questionnaire は1画面1問で進み、数字キーでの選択、必須のチェック、スキップを最初から持っている。中身は Field、Radio Group、Checkbox、Input でできているので、質問のタイトルと選択肢の文言がそのまま部品の名前になり、エージェントも名前で答えを入れられる。",
    "QuestionnaireItem を質問の数だけ並べ、name を付ける。multiple で複数選択、required で必須になる。回答は質問ごとに value、defaultValue、onValueChange で受け取る。form を送信すれば、name ごとの回答が FormData にも載る。今の質問を自分で持つなら item と onItemChange を使う。",
  ],
  sdk: [
    "Field、RadioGroup、CheckboxGroup と Checkbox、Input の上に作っている。QuestionnaireItem が Field、QuestionnaireTitle が FieldLabel で、タイトルがそのまま radiogroup、group、textbox の名前になる。選択肢の文言は Radio や Checkbox の名前になり、description は名前に含めず説明として結び付く。",
    "ラジオの矢印キーは RadioGroup が受け持つ。Questionnaire が足しているのは、チェックボックス間の上下キー、左右キーでの前後の質問、Enter で次へ進むこと、shortcuts の数字キーや英字キーでの選択。必須の質問に答えずに進もうとすると Field が invalid になり、data-invalid と QuestionnaireError で知らせる。",
    "回答は QuestionnaireItem の onValueChange で受け取る。第1引数は単一選択と入力なら string か null、multiple なら string の配列で、第2引数の details には reason（item-press、input-change、スキップで消えたときの imperative）と source が入る。details.cancel() で変更を取り消せて、送信時には name ごとに FormData に載る（空欄の入力とスキップした質問は載らない）。",
    "エージェントからは、単一選択の質問が radio として見え、名前は質問のタイトル、items に選択肢の value と label が並ぶ。setValue に選択肢の文言を渡せば答えられ、複数選択は選択肢の文言を名前に setChecked、入力はタイトルを名前に setValue、次へ や 送信 のボタンは press で押す。このとき onValueChange の details.source は agent になる。",
  ],
  patterns: [
    {
      id: "single-choice",
      title: "1つを選ぶ",
      description:
        "回答を value と onValueChange で持つ。required を付けると、選ばずに送ったときに QuestionnaireError が出る。",
      en: {
        title: "Single choice",
        description:
          "Hold the answer with value and onValueChange. With required, QuestionnaireError shows when people submit without choosing.",
      },
    },
    {
      id: "multiple-choice",
      title: "複数を選ぶ",
      description:
        "multiple を付けると選択肢がチェックボックスになり、回答は配列になる。補足は QuestionnaireChoice の description に書く。",
      en: {
        title: "Multiple choice",
        description:
          "Add multiple to turn choices into checkboxes and the answer into an array. Put extra detail in the description of QuestionnaireChoice.",
      },
    },
    {
      id: "text-input",
      title: "自由に書く",
      description:
        "QuestionnaireInput で1行の回答を受ける。入力の名前は QuestionnaireTitle から付く。",
      en: {
        title: "Text input",
        description:
          "Take a one-line answer with QuestionnaireInput. The input takes its name from QuestionnaireTitle.",
      },
    },
    {
      id: "steps",
      title: "複数の質問を順に進む",
      description:
        "進み具合、戻る、スキップ、次へを並べ、今の質問を item と onItemChange で持つ。",
      en: {
        title: "Steps",
        description:
          "Show progress with previous, skip and next, and keep the current question with item and onItemChange.",
      },
    },
  ],
  en: {
    usage: [
      "A survey that shows one question at a time and moves on as people choose or type. Use it where ease of answering matters, such as a satisfaction survey after support or a short intake before an inquiry.",
      "When all fields should be visible at once, build a form with Field and input components instead. Questionnaire goes one question per screen and comes with number-key selection, required checks and skipping. It is built from Field, Radio Group, Checkbox and Input, so each question's title and choice text become the names of its controls, and an agent can fill in answers by name.",
      "Place one QuestionnaireItem per question and give it a name. multiple allows several choices and required makes an answer mandatory. Read each answer with value, defaultValue and onValueChange on the item. Submitting the form also puts the answers in FormData under each name. To own the current question, use item and onItemChange.",
    ],
    sdk: [
      "Built on Field, RadioGroup, CheckboxGroup with Checkbox, and Input. QuestionnaireItem is a Field and QuestionnaireTitle is its FieldLabel, so the title becomes the name of the radiogroup, group or textbox. Each choice's text names its Radio or Checkbox, and description is attached as a description, not as part of the name.",
      "RadioGroup handles the arrow keys for radios. Questionnaire adds ArrowUp and ArrowDown between checkboxes, ArrowLeft and ArrowRight for the previous and next question, Enter to move on, and number or letter keys through shortcuts. Moving on from a required question without an answer makes the Field invalid, shown through data-invalid and QuestionnaireError.",
      "Read answers with onValueChange on QuestionnaireItem. The first argument is a string or null for a single choice or text input and a string array with multiple; the second, details, has reason (item-press, input-change, or imperative when Skip clears the answer) and source. details.cancel() cancels the change, and on submit each answer is in FormData under its name (blank inputs and skipped questions are left out).",
      "An agent sees a single-choice question as a radio component whose label is the question's title and whose items list each choice's value and label. It answers with setValue and the choice's text; for multiple choice it calls setChecked on the choice by its text, for text input setValue on the title, and press on buttons such as 次へ (Next) and 送信 (Submit). onValueChange then receives details.source set to agent.",
    ],
  },
} satisfies ComponentGuide
