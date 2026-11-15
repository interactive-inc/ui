import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Multi-line or copyable code/commands. Inline identifier -> code element.",
    "CodeBlockContent takes string; lineNumbers, startLine. CodeBlockLine variants added | removed | highlighted for per-line marks. variant destructive, wrap for long text.",
    "Parts: CodeBlockHeader (file name), CodeBlockActions (copy without header), CodeBlockCopyButton (aria-label says what it copies).",
    'CodeBlockCopyButton is SDK-based Button; rest display only. After copy: announce("コピーしました"), data-copied for 2s. No aria-live needed.',
    "onClick(event, details) runs before copy. Agent: button named by aria-label (default コードをコピー), action press.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "1行のコマンドを CodeBlockContent に渡す。",
      en: {
        title: "Basic",
        description: "One-line command in CodeBlockContent.",
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
          "File name and copy button in CodeBlockHeader; lineNumbers.",
      },
    },
    {
      id: "diff",
      title: "差分を見せる",
      description:
        "CodeBlockLine の variant で、足した行、消した行、注目の行を示す。startLine で行番号の始まりを変える。",
      en: {
        title: "Diff",
        description: "CodeBlockLine variants mark lines; startLine.",
      },
    },
    {
      id: "error",
      title: "エラーを見せる",
      description: "variant を destructive にし、長い文は wrap で折り返す。",
      en: {
        title: "Error",
        description: "variant destructive; wrap for long text.",
      },
    },
    {
      id: "in-message",
      title: "回答の中に置く",
      description:
        "AI アシスタントの回答に添え、ヘッダーなしでも CodeBlockActions でコピーできるようにする。",
      en: {
        title: "In a message",
        description: "CodeBlockActions keeps copy without a header.",
      },
    },
  ],
} satisfies ComponentGuide
