import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "人やチームを小さな丸い画像で見せる部品。担当者、コメントの投稿者、ログイン中のユーザーなど、誰のものかを一目で伝えたいときに使う。",
    "AvatarImage が読み込めないあいだや失敗したときは AvatarFallback が出る。頭文字を入れておけば、画像がなくても誰か分かる。大きさは size で sm、default、lg から選ぶ。",
    "名前を横に書くなら Avatar は飾りなので aria-hidden を付ける。画像だけで人を示すときは aria-label で名前を付ける。複数人は AvatarGroup で重ね、入りきらない人数は AvatarGroupCount で見せる。",
  ],
  sdk: [
    "UI SDK の Avatar の上に作っている。画像の読み込み状態（idle、loading、loaded、error）は SDK が追い、読み込めるまでと失敗したときに AvatarFallback を出す。状態は各パーツの data-loading-status に出て、Avatar の onLoadingStatusChange でも受け取れる。AvatarFallback に delay を渡すと、すぐ読み込める画像の前に頭文字がちらつかない。",
    "操作を持たない表示の部品で、エージェントからは avatar として見え、名前は aria-label から付くが、呼べる操作はない。押せるようにするときは render に button を渡して要素を差し替える。",
    "この部品集では size と、aria-label を渡したときの role=img、AvatarBadge、AvatarGroup、AvatarGroupCount を足している。足した3つのパーツは UI SDK のものではなく、ただの要素。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "画像と頭文字のフォールバックを入れる。画像がないときは頭文字が出る。",
      en: {
        title: "Basic",
        description:
          "Add an image and an initial as the fallback. The initial shows when there is no image.",
      },
    },
    {
      id: "sizes",
      title: "大きさ",
      description:
        "size で sm、default、lg を選ぶ。頭文字の大きさも合わせて変わる。",
      en: {
        title: "Sizes",
        description:
          "Pick sm, default or lg with size. The initial scales with it.",
      },
    },
    {
      id: "with-badge",
      title: "状態のバッジ",
      description:
        "AvatarBadge を重ねてオンラインかどうかを見せる。色だけに頼らず文字でも伝える。",
      en: {
        title: "Status badge",
        description:
          "Overlay an AvatarBadge to show whether someone is online. Say it in text too, not only with color.",
      },
    },
    {
      id: "group",
      title: "複数人を重ねる",
      description:
        "AvatarGroup で重ねて並べ、残りの人数を AvatarGroupCount で見せる。",
      en: {
        title: "Group",
        description:
          "Stack people in an AvatarGroup and show the rest with AvatarGroupCount.",
      },
    },
  ],
  en: {
    usage: [
      "An avatar shows a person or a team as a small round image. Use it for assignees, comment authors or the signed-in user, so people can tell at a glance who something belongs to.",
      "AvatarFallback shows while AvatarImage loads or when it fails. Put an initial in it so the person is recognizable without a picture. Choose sm, default or lg with size.",
      "When the name is written next to it, the avatar is decorative, so add aria-hidden. When the image alone stands for the person, name it with aria-label. Stack several people in AvatarGroup and show the overflow with AvatarGroupCount.",
    ],
    sdk: [
      "Built on the UI SDK Avatar. The SDK tracks the image's loading status (idle, loading, loaded, error) and shows AvatarFallback until the image loads and when it fails. The status is on every part as data-loading-status and reaches onLoadingStatusChange on Avatar. A delay on AvatarFallback keeps the initials from flashing before a fast image.",
      "It is a display component with no actions: an agent sees it as an avatar, named by its aria-label, with nothing to call. To make it pressable, swap the element by passing a button to render.",
      "This registry adds size, role=img when an aria-label is passed, and the AvatarBadge, AvatarGroup and AvatarGroupCount parts. Those three parts are plain elements, not UI SDK parts.",
    ],
  },
} satisfies ComponentGuide
