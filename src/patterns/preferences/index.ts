import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Per-person display settings (density, currency, sidebar open) as data attributes; not for form values.",
    "createPreference (values, default, attribute name; re-exported with createLocalStorage from this file) -> pass to Preferences. Style: in-data-[density=compact]:.",
    "Read via usePreference (works outside Preferences); change via preference set. storage={createLocalStorage(...)} persists.",
    'global: true puts attribute on html. Preferences shares value per preference instance; renders display: contents; data-slot="preferences".',
    "SSR emits script applying saved values before paint (no flash). CSP: pass nonce to Preferences.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "Preferences が data-density を付け、一覧の行の高さを CSS だけで切り替える。",
      en: {
        title: "Basic",
        description: "data-density switches row height via CSS.",
      },
    },
    {
      id: "read-value",
      title: "値を読んで描画を変える",
      description: "usePreference で値を読み、金額の書き方を変える。",
      en: {
        title: "Reading the value",
        description: "Read with usePreference; change amount format.",
      },
    },
    {
      id: "storage",
      title: "選んだ値を保存する",
      description:
        "storage に createLocalStorage を渡し、サイドバーの開閉を次回も引き継ぐ。",
      en: {
        title: "Saving the choice",
        description: "createLocalStorage persists sidebar state.",
      },
    },
  ],
} satisfies ComponentGuide
