import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "コードやコマンドを等幅の文字で、そのまま写せる形に見せる枠。インストール手順、API の呼び出し例、エラーの中身のように、一字一句が大事な文字列に使う。",
    "文中の短い識別子なら code 要素で足りる。CodeBlock は複数行やコピーしたい内容に使い、ファイル名、コピーのボタン、行番号、差分の印までを持てる。",
    "CodeBlockContent に文字列を渡し、lineNumbers で行番号を付ける。行ごとに印を変えるなら CodeBlockLine を並べて variant を added、removed、highlighted にする。コピーのボタンは CodeBlockActions に置き、aria-label で何をコピーするかを書く。",
  ],
  sdk: [
    "枠や行は UI SDK を使わない表示だけのパーツで、CodeBlockCopyButton だけがこの部品集の Button（@ui-sdk/react/button）でできている。コピーに成功すると @ui-sdk/core の announce で コピーしました と読み上げ、ボタンに data-copied が2秒付く。announce は共有のライブリージョンに書くので、CodeBlock の中に aria-live の要素を置かなくてよい。",
    "エージェントからは CodeBlockCopyButton が button として見え、名前は aria-label（既定は コードをコピー）から付き、press で押せる。onClick は event と details を受け取り、コピーの前に呼ばれる。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "1行のコマンドを CodeBlockContent に渡す。",
      en: {
        title: "Basic",
        description: "Pass a one-line command to CodeBlockContent.",
      },
    },
    {
      id: "with-header",
      title: "ファイル名とコピー",
      description:
        "CodeBlockHeader にファイル名とコピーのボタンを置き、lineNumbers で行番号を付ける。",
      en: {
        title: "With a header",
        description:
          "Put the file name and a copy button in CodeBlockHeader, and add line numbers with lineNumbers.",
      },
    },
    {
      id: "diff",
      title: "差分を見せる",
      description:
        "CodeBlockLine の variant で、足した行、消した行、注目の行を示す。startLine で行番号の始まりを変える。",
      en: {
        title: "Diff",
        description:
          "Mark added, removed and highlighted lines with the CodeBlockLine variant. Change the first line number with startLine.",
      },
    },
    {
      id: "error",
      title: "エラーを見せる",
      description: "variant を destructive にし、長い文は wrap で折り返す。",
      en: {
        title: "Error",
        description: "Set variant to destructive and wrap long text with wrap.",
      },
    },
    {
      id: "in-message",
      title: "回答の中に置く",
      description:
        "AI アシスタントの回答に添え、ヘッダーなしでも CodeBlockActions でコピーできるようにする。",
      en: {
        title: "In a message",
        description:
          "Attach code to an AI assistant's answer; CodeBlockActions keeps it copyable without a header.",
      },
    },
  ],
  en: {
    usage: [
      "A frame that shows code or commands in a monospace font, ready to copy. Use it for strings where every character matters, such as install steps, API examples and error details.",
      "For a short identifier in a sentence, a code element is enough. Use CodeBlock for multiple lines or anything worth copying; it can hold a file name, a copy button, line numbers and diff marks.",
      "Pass a string to CodeBlockContent and add line numbers with lineNumbers. To mark lines individually, list CodeBlockLine elements with the added, removed or highlighted variant. Put the copy button in CodeBlockActions and say what it copies with aria-label.",
    ],
    sdk: [
      "The frame and lines are display-only parts that do not use UI SDK; only CodeBlockCopyButton is built on this collection's Button (@ui-sdk/react/button). After a successful copy it calls announce from @ui-sdk/core with コピーしました (Copied), and the button has data-copied for two seconds. announce writes to a shared live region, so you do not need an aria-live element inside CodeBlock.",
      "An agent sees CodeBlockCopyButton as a button named by its aria-label (コードをコピー by default) and can call press on it. onClick receives the event and details and runs before the copy.",
    ],
  },
} satisfies ComponentGuide
