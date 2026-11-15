import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "添付済みのファイルを1件ずつ見せるカード。メッセージや問い合わせに付いたファイル、アップロード中のファイルの進み具合を見せるときに使う。",
    "ファイルを選ばせる入力ではない。選ぶ操作は FileInput に任せ、受け取ったあとの見た目を Attachment で描く。state で待機中、アップロード中、処理中、失敗、完了を切り替える。",
    "全体を開く操作は AttachmentTrigger、削除などの個別の操作は AttachmentActions に置く。操作の名前にはファイル名を入れて区別し、削除には data-agent-confirm を付ける。",
  ],
  sdk: [
    "Attachment のカードは表示だけの要素で、UI SDK の部品ではなく、エージェントの snapshot にも載らない。中の AttachmentTrigger は UI SDK の Button そのもの、AttachmentAction はこの部品集の Button（土台は同じ UI SDK の Button）なので、エージェントからは button として見え、aria-label が名前になり、press で押せる。カードの文字は名前にならないので、操作の名前にファイル名を入れ、削除には data-agent-confirm を付けて人の確認を待たせる。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description: "アイコン、ファイル名、補足の3つでファイルを1件見せる。",
      en: {
        title: "Basic",
        description: "Show one file with an icon, its name and a short detail.",
      },
    },
    {
      id: "states",
      title: "状態",
      description:
        "state でアップロード中や失敗を見せる。説明文に進み具合や理由を書く。",
      en: {
        title: "States",
        description:
          "Use state to show uploading or failed files, and put the progress or reason in the description.",
      },
    },
    {
      id: "sizes",
      title: "大きさ",
      description:
        "size で詰め具合を変える。狭い入力欄の上では sm や xs を使う。",
      en: {
        title: "Sizes",
        description:
          "Use size to change the density. Use sm or xs above a narrow input.",
      },
    },
    {
      id: "image",
      title: "画像のサムネイル",
      description:
        "orientation を vertical、AttachmentMedia を image にすると画像を大きく見せられる。",
      en: {
        title: "Image thumbnails",
        description:
          "Set orientation to vertical and AttachmentMedia to image to show pictures large.",
      },
    },
    {
      id: "with-actions",
      title: "操作付きの一覧",
      description:
        "AttachmentGroup で横に並べ、開く操作と削除の操作をファイルごとに付ける。",
      en: {
        title: "List with actions",
        description:
          "Line files up in an AttachmentGroup and give each one an open action and a remove action.",
      },
    },
  ],
  en: {
    usage: [
      "An attachment is a card for one attached file. Use it for files on a message or an inquiry, and to show the progress of an upload.",
      "It does not pick files. Leave picking to FileInput and draw the received files with Attachment. Switch state between idle, uploading, processing, error and done.",
      "Put the action that opens the whole file on AttachmentTrigger, and per-file actions like remove in AttachmentActions. Include the file name in each action's name to tell them apart, and add data-agent-confirm to remove.",
    ],
    sdk: [
      "The Attachment card is a display-only element: it is not a UI SDK component and does not appear in an agent's snapshot. AttachmentTrigger is the UI SDK Button itself and AttachmentAction is this registry's Button (built on the same UI SDK Button), so an agent sees each as a button, named by its aria-label, with the press action. The card's text does not name them, so put the file name in each action's name, and mark a remove action with data-agent-confirm so it waits for a person.",
    ],
  },
} satisfies ComponentGuide
