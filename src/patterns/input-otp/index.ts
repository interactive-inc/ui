import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Fixed-length code, one box per char over one native input (paste, autofill work). Variable length -> Input.",
    'Parts: InputOTP, InputOTPGroup, InputOTPSlot (one per char), InputOTPSeparator. maxLength, pattern; autoComplete="one-time-code".',
    "onValueChange reason: input-change, paste, undo, redo, reset, imperative; cancel(). onValueCommit fires when all boxes filled (not on reset); verify code there.",
    "Paste 123-456 drops separators. name submits code; partial code fails validation.",
    "Data: data-complete (root), data-active, data-fake-caret (slot).",
    "Controller createOTPInputController(). Agent: kind otp-input, setValue, clear; value [redacted].",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "6桁の数字。値は onValueChange で受ける。",
      en: {
        title: "Basic",
        description: "A six-digit code.",
      },
    },
    {
      id: "with-separator",
      title: "区切りを入れる",
      description:
        "InputOTPGroup を分けて InputOTPSeparator を挟むと、桁が読みやすくなる。",
      en: {
        title: "With a separator",
        description:
          "Split slots into InputOTPGroups with InputOTPSeparator between.",
      },
    },
    {
      id: "alphanumeric",
      title: "英数字のコード",
      description:
        "pattern を alphanumeric にすると英字も受け付ける。合わない文字は入らない。",
      en: {
        title: "Alphanumeric",
        description: "Set pattern to alphanumeric to accept letters too.",
      },
    },
    {
      id: "verify-on-complete",
      title: "そろったら確かめる",
      description:
        "onValueCommit は全桁がそろったときに呼ばれる。結果に合わせて Field を invalid にする。",
      en: {
        title: "Verify when complete",
        description: "onValueCommit runs once every slot is filled.",
      },
    },
  ],
} satisfies ComponentGuide
