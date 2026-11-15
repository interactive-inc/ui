import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Person/team as small round image: assignees, authors, current user.",
    "AvatarFallback shows while AvatarImage loads or fails; put initials. delay on AvatarFallback avoids flash. size: sm | default | lg.",
    "Name beside it -> aria-hidden. Image alone -> aria-label (adds role=img).",
    "Registry-only plain parts: AvatarBadge, AvatarGroup, AvatarGroupCount.",
    "Status: data-loading-status (idle|loading|loaded|error) on every part; onLoadingStatusChange on Avatar.",
    "Agent: kind avatar, named by aria-label, no actions. Pressable: render={<button />}.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "画像と頭文字のフォールバックを入れる。画像がないときは頭文字が出る。",
      en: {
        title: "Basic",
        description: "Image with initial as fallback.",
      },
    },
    {
      id: "sizes",
      title: "大きさ",
      description:
        "size で sm、default、lg を選ぶ。頭文字の大きさも合わせて変わる。",
      en: {
        title: "Sizes",
        description: "size sm, default or lg; initial scales.",
      },
    },
    {
      id: "with-badge",
      title: "状態のバッジ",
      description:
        "AvatarBadge を重ねてオンラインかどうかを見せる。色だけに頼らず文字でも伝える。",
      en: {
        title: "Status badge",
        description: "AvatarBadge for online status; add text too.",
      },
    },
    {
      id: "group",
      title: "複数人を重ねる",
      description:
        "AvatarGroup で重ねて並べ、残りの人数を AvatarGroupCount で見せる。",
      en: {
        title: "Group",
        description: "AvatarGroup with AvatarGroupCount for overflow.",
      },
    },
  ],
} satisfies ComponentGuide
