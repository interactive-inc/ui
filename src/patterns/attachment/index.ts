import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Card for one attached file; upload progress. Display only: does not pick files -> FileInput.",
    "state: idle | uploading | processing | error | done.",
    "AttachmentTrigger opens whole file; per-file actions (remove) in AttachmentActions.",
    "Card not in agent snapshot. AttachmentTrigger and AttachmentAction are buttons (action press), named by aria-label.",
    "Put file name in each action's aria-label; remove gets data-agent-confirm.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description: "アイコン、ファイル名、補足の3つでファイルを1件見せる。",
      en: {
        title: "Basic",
        description: "One file with icon, name and short detail.",
      },
    },
    {
      id: "states",
      title: "状態",
      description:
        "state でアップロード中や失敗を見せる。説明文に進み具合や理由を書く。",
      en: {
        title: "States",
        description: "state shows uploading or failed files.",
      },
    },
    {
      id: "sizes",
      title: "大きさ",
      description:
        "size で詰め具合を変える。狭い入力欄の上では sm や xs を使う。",
      en: {
        title: "Sizes",
        description: "size changes density; sm or xs for narrow inputs.",
      },
    },
    {
      id: "image",
      title: "画像のサムネイル",
      description:
        "orientation を vertical、AttachmentMedia を image にすると画像を大きく見せられる。",
      en: {
        title: "Image thumbnails",
        description: "orientation vertical with image AttachmentMedia.",
      },
    },
    {
      id: "with-actions",
      title: "操作付きの一覧",
      description:
        "AttachmentGroup で横に並べ、開く操作と削除の操作をファイルごとに付ける。",
      en: {
        title: "List with actions",
        description: "AttachmentGroup with open and remove actions per file.",
      },
    },
  ],
} satisfies ComponentGuide
