import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Events in time order, in words; number trends -> Chart, duration bars -> Waterfall.",
    'TimelineItem status: complete | current | upcoming. Current gets aria-current="step". Use TimelineTime dateTime.',
    "All SDK parts exported: Timeline, TimelineItem, TimelineMarker, TimelineConnector, TimelineTitle, TimelineTime, TimelineDescription.",
    "Attrs: data-complete | data-current | data-upcoming. feed: PageUp/PageDown between events.",
    "No state or callbacks, no agent actions. createTimelineController() only has focus(value).",
  ],
  patterns: [
    {
      id: "basic",
      title: "進み具合",
      description:
        "status で完了、進行中、これからを分け、完了した印にはチェックを入れる。",
      en: {
        title: "Progress",
        description:
          "status complete, current, upcoming; check in completed markers.",
      },
    },
    {
      id: "activity",
      title: "対応履歴",
      description:
        "status を付けずに出来事を新しい順に並べ、誰が何をしたかを残す。",
      en: {
        title: "Activity log",
        description: "Newest-first events without status.",
      },
    },
    {
      id: "with-icon",
      title: "種類ごとのアイコン",
      description:
        "TimelineMarker にアイコンを入れ、出来事の種類を見分けやすくする。",
      en: {
        title: "With icons",
        description: "Icon in TimelineMarker per event kind.",
      },
    },
    {
      id: "horizontal",
      title: "横に並べる",
      description:
        'orientation="horizontal" で段階の少ない流れを横一列に見せる。',
      en: {
        title: "Horizontal",
        description: 'orientation="horizontal" for a single row.',
      },
    },
  ],
} satisfies ComponentGuide
