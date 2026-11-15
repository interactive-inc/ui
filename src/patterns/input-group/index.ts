import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Icons, text or buttons around an input as one field. Independent buttons -> ButtonGroup.",
    "Parts: InputGroupInput | InputGroupTextarea, InputGroupAddon (align: inline-start | inline-end | block-start | block-end), InputGroupText, InputGroupButton (needs aria-label).",
    "Frame and Addon are plain divs (role=group), not SDK InputGroup. Pressing padding focuses input.",
    "Input/Textarea/Button wrap SDK ones: onValueChange, Field, pending, agent setValue/press work as standalone.",
    "No InputClear: add InputGroupButton and empty value yourself.",
  ],
  patterns: [
    {
      id: "with-icon",
      title: "アイコンを添える",
      description: "InputGroupAddon にアイコンを置いて、欄の用途を示す。",
      en: {
        title: "With an icon",
        description:
          "Put an icon in InputGroupAddon to show what the field is for.",
      },
    },
    {
      id: "with-text",
      title: "前後に文字を添える",
      description: "InputGroupText で URL の前半や通貨記号、単位を表示する。",
      en: {
        title: "With text",
        description:
          "Show a URL prefix, a currency symbol or a unit with InputGroupText.",
      },
    },
    {
      id: "with-button",
      title: "ボタンを置く",
      description: "InputGroupButton でコピーや再発行の操作を欄の中に置く。",
      en: {
        title: "With buttons",
        description:
          "Place actions such as copy or regenerate inside the field with InputGroupButton.",
      },
    },
    {
      id: "with-textarea",
      title: "複数行の欄",
      description:
        "InputGroupTextarea の下に block-end の Addon を置き、文字数と送信ボタンを並べる。",
      en: {
        title: "With a textarea",
        description:
          "Block-end addon under InputGroupTextarea for count and send button.",
      },
    },
  ],
} satisfies ComponentGuide
