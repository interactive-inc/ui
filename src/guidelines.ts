type Guideline = {
  id: string
  title: string
  titleEn: string
  lead: string
  /**
   * AI 向けの決まり。英語の短い文
   */
  rules: string[]
}

const layoutSections: Guideline[] = [
  {
    id: "regions",
    title: "3つの領域",
    titleEn: "Three regions",
    lead: "画面は、ヘッダー、サイドバー、ページの3つの領域でできています。",
    rules: [
      "The screen has three regions. The header sits at the very top and spans the full width. The sidebar and the page sit below it, side by side.",
      "The header and the sidebar share one surface and form the chrome. The page is a darker surface that sits on the chrome. When scrolling, only the page moves; the chrome stays.",
      "On mobile the sidebar is hidden and opened from a button at the left end of the header. The roles of the regions do not change.",
      "To implement it, put the header, Sidebar (variant inset) and SidebarInset inside SidebarProvider. Pass the header height as --header-height and the Sidebar starts below it. Make the header translucent with backdrop-blur over the page scrolling beneath.",
    ],
  },
  {
    id: "roles",
    title: "領域の役割",
    titleEn: "What each region holds",
    lead: "どの領域に何を置くかは、それが効く範囲で決まります。",
    rules: [
      "Things that concern the whole service go in the header: the service title and settings used on every page, such as the theme switch.",
      "Things for moving between pages go in the sidebar. Do not put the title or settings in the sidebar.",
      "Everything that concerns only the current page goes inside the page. Never lift page actions into the header.",
    ],
  },
  {
    id: "ends",
    title: "行の両端",
    titleEn: "Two ends of a row",
    lead: "どの行も、左端に「それが何か」、反対側の右端に「それにできること」を置きます。",
    rules: [
      "The header, the page heading and a section heading are all the same kind of row: the name at the left end and the actions pushed to the opposite right end, with the space between left empty.",
      "This way names are found along the left line and actions along the right line, on every screen.",
      "Only actions go at the right end. Supplementary items such as categories and external links are not actions; make them Badges below the name.",
      "Write the header title as the logo followed by a path (logo / service / app). The logo is a plain image link and the path is text links, not buttons.",
    ],
  },
  {
    id: "hierarchy",
    title: "ページの組み立て",
    titleEn: "Page structure",
    lead: "ページは、頭と、その下に積み重なるセクションでできています。",
    rules: [
      "A page is a heading followed by stacked sections. The heading holds an h1 title and a one or two sentence description; below it, stack one section per meaningful block.",
      "Wrap each section in a Card with an h2 in CardTitle. Put an action at the head of the scope it affects: the page heading for the whole page, CardAction for one section. Actions that conclude a section, such as form submit, go at the right end of CardFooter.",
      "Use a single primary Button for the main action and secondary for the rest.",
      "For a list of same-shaped items, do not wrap the whole list in one Card: put the heading outside and give each item its own Card. Never nest Cards; divide the inside with Separator or the subtle surface.",
    ],
  },
  {
    id: "spacing",
    title: "余白と間隔",
    titleEn: "Gutter and spacing",
    lead: "画面の端からの余白は 24px にそろえ、間隔は3段階だけを使います。",
    rules: [
      "Keep a 24px (p-6) gutter from the screen edges. The header's left and right ends, the text of sidebar items and the page content all sit on the same lines. Do not stack paddings: an item's inner padding counts toward the 24px. Use 16px (p-4) on mobile.",
      "Use three spacing steps: 32px (gap-8) between sections, 16px (gap-4) inside a section and 8px (gap-2) between inline controls.",
      "Pages use the full width and the heading row reaches the right edge; cap only long prose. Leave padding and radius to the components and do not add extra borders or backgrounds around them.",
    ],
  },
]

const choosingSections: Guideline[] = [
  {
    id: "forms",
    title: "入力を並べる",
    titleEn: "Laying out inputs",
    lead: "入力は、ラベルと1組にして縦に積みます。",
    rules: [
      "Always wrap an input in Field. Field pairs a FieldLabel with its input, so people, screen readers and agents all know what the input is for.",
      "When there are several Fields, stack them vertically inside FieldGroup. Place Fields side by side only when two of them form one meaning, such as family name and given name.",
      "Show a validation error inside its Field with FieldError. Do not collect errors at the top of the form.",
    ],
  },
  {
    id: "states",
    title: "中身がないとき、待たせるとき",
    titleEn: "Empty and waiting states",
    lead: "空白のままにせず、いま何が起きているかを見せます。",
    rules: [
      "When there is nothing to show yet, use Empty. Say in a few words why it is empty and offer one next action.",
      "While loading, use Skeleton. Trace the shape of the content to come so the layout does not jump when it arrives.",
      "For tasks that take more than a few seconds, use Progress so people can see how far it has gone. For short waits with no measurable progress, use Spinner.",
    ],
  },
  {
    id: "overlays",
    title: "重ねて出す",
    titleEn: "Overlays",
    lead: "重ねて出す部品は、作業の性質で選びます。",
    rules: [
      "Use Dialog for a task that finishes on the spot and returns to the screen behind it, such as editing an item or checking details. The screen behind is dimmed and inert.",
      "Use Sheet for details you want to read next to a list. It slides in from the edge, so the list stays visible beside it.",
      "Use AlertDialog to confirm an irreversible action. Before deleting or sending, state what will happen. The confirm button is destructive.",
      "For a small note or setting there is no need to block the screen; use Popover, which appears in place.",
    ],
  },
  {
    id: "code",
    title: "コードを見せる",
    titleEn: "Showing code",
    lead: "コードやコマンドは、CodeBlock で見せます。",
    rules: [
      "Put code, commands and config file contents in CodeBlock. Do not write long code inline in prose.",
      "CodeBlock is a dark, terminal-like surface in both light and dark themes. Add a copy button so the code can be pasted as is.",
    ],
  },
]

type ColorToken = {
  tokens: string[]
  role: string
  roleEn: string
  light: string
  dark: string
}

export const colorTokens: ColorToken[] = [
  {
    tokens: ["sidebar"],
    role: "枠組み。ヘッダーとサイドバー",
    roleEn: "Chrome: header and sidebar",
    light: "oklch(0.985 0 0)",
    dark: "oklch(0.205 0 0)",
  },
  {
    tokens: ["page"],
    role: "ページの地。カードを載せる面",
    roleEn: "Page ground: the surface cards sit on",
    light: "oklch(0.94 0 0)",
    dark: "oklch(0.175 0 0)",
  },
  {
    tokens: ["card", "popover"],
    role: "面。カード、ポップアップ",
    roleEn: "Surface: cards and popups",
    light: "oklch(1 0 0)",
    dark: "oklch(0.205 0 0)",
  },
  {
    tokens: ["muted"],
    role: "薄い面。面の中の区切りやプレビュー",
    roleEn: "Subtle surface: insets and previews inside a surface",
    light: "oklch(0.97 0 0)",
    dark: "oklch(0.269 0 0)",
  },
  {
    tokens: ["secondary", "sidebar-accent"],
    role: "サブの操作と選択中の項目",
    roleEn: "Secondary actions and selected items",
    light: "oklch(0.9 0 0)",
    dark: "oklch(0.269 0 0)",
  },
  {
    tokens: ["accent"],
    role: "面の上でのホバーとハイライト",
    roleEn: "Hover and highlight on a surface",
    light: "oklch(0.97 0 0)",
    dark: "oklch(0.269 0 0)",
  },
  {
    tokens: ["primary"],
    role: "主要な操作と選択中の切り替え",
    roleEn: "Primary actions and the selected toggle",
    light: "oklch(0.205 0 0)",
    dark: "oklch(0.922 0 0)",
  },
  {
    tokens: ["foreground"],
    role: "文字",
    roleEn: "Text",
    light: "oklch(0.145 0 0)",
    dark: "oklch(0.985 0 0)",
  },
  {
    tokens: ["muted-foreground"],
    role: "控えめな文字。注記や日付",
    roleEn: "Quiet text: captions and dates",
    light: "oklch(0.556 0 0)",
    dark: "oklch(0.708 0 0)",
  },
  {
    tokens: ["border"],
    role: "線。区切り線と入力欄の縁",
    roleEn: "Lines: dividers and input outlines",
    light: "oklch(0.922 0 0)",
    dark: "oklch(1 0 0 / 10%)",
  },
]

const colorSections: Guideline[] = [
  {
    id: "overview",
    title: "面の重なり",
    titleEn: "Layered surfaces",
    lead: "色は、重なる面の濃さの順で決めてあります。",
    rules: [
      "A screen is built by layering surfaces of different darkness. From the outside in: chrome, page ground, surface and subtle surface.",
      "Actions sit on top of the surfaces. The darker one is the primary action; the lighter one is a secondary action or a selected item.",
      "The sections below explain surfaces, layering order, actions, and lines and text one at a time.",
    ],
  },
  {
    id: "surfaces",
    title: "4つの面",
    titleEn: "Four surfaces",
    lead: "面は4種類あり、それぞれにトークンがあります。",
    rules: [
      "sidebar is the chrome surface formed by the header and the sidebar. It is the outermost surface.",
      "page is the page ground. It sits on the chrome and is where cards are placed.",
      "card is the surface that holds content, used for cards and popups. It is the lightest of the four.",
      "muted is a subtle surface for dividing the inside of a surface, used for previews and notes.",
    ],
  },
  {
    id: "layering",
    title: "重ねる順",
    titleEn: "Layering order",
    lead: "面は決まった順に重ね、隣り合う面は必ず違う色にします。",
    rules: [
      "The order is sidebar, page, card, then muted. The figure adds one surface at a time from left to right.",
      "Do not skip or swap the order. For example, do not put card directly on the chrome or page on top of card.",
      "Do not stack surfaces of the same color and rely on a border alone. Show the boundary with the difference in color.",
    ],
  },
  {
    id: "actions",
    title: "操作の色",
    titleEn: "Action colors",
    lead: "主要な操作は primary を1つだけ。ほかはすべて secondary です。",
    rules: [
      "primary is for the most important action on a surface and for the selected toggle. Keep one primary per surface.",
      "secondary is for every other action and for selected items. It is clearly distinct from every surface, so it stays visible on all four.",
      "Never give page and secondary the same color; a selected item would merge with the page ground.",
      "Only destructive (irreversible actions) and charts carry hue. Do not add color for decoration.",
    ],
  },
  {
    id: "text",
    title: "線と文字",
    titleEn: "Lines and text",
    lead: "文字は2種類、線は1種類です。",
    rules: [
      "foreground is the normal text color for headings, body and descriptions.",
      "muted-foreground is quiet text for short, skippable bits such as captions and dates. Never use it for prose meant to be read.",
      "border is the line color, used for dividers inside a surface and input outlines. Do not use it for the boundary between surfaces.",
    ],
  },
  {
    id: "tokens",
    title: "トークンの一覧",
    titleEn: "Token list",
    lead: "色は、必ずトークンの名前で指定します。",
    rules: [
      "In components, write colors by token name: bg-card, bg-page, bg-secondary, text-muted-foreground and so on.",
      "Never write oklch or hex values, or Tailwind's gray-100 and the like, in components. A single color outside the tokens breaks the order of darkness between surfaces.",
    ],
  },
  {
    id: "themes",
    title: "ライトとダーク",
    titleEn: "Light and dark",
    lead: "ダークでも役割は同じで、入れ替わるのは値だけです。",
    rules: [
      "In dark mode each token keeps its role and only the values change, so components need no dark: color overrides.",
      "The only exception is code blocks, which stay dark regardless of the theme.",
    ],
  },
]

type GuidelinePage = {
  slug: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  sections: Guideline[]
}

export const guidelinePages: GuidelinePage[] = [
  {
    slug: "layout",
    title: "レイアウト",
    titleEn: "Layout",
    description:
      "画面をどう分け、どこに何を置くかの決まりです。領域、役割、行の形、ページの組み立て、余白の順に説明します。",
    descriptionEn:
      "How the screen is divided and what goes where: regions, their roles, the shape of a row, page structure and spacing.",
    sections: layoutSections,
  },
  {
    slug: "color",
    title: "カラー",
    titleEn: "Color",
    description:
      "色は、役割ごとのデザイントークンで指定します。面をどう重ね、その上の操作や文字にどのトークンを使うかを、順に説明します。",
    descriptionEn:
      "Colors are specified with role-based design tokens. Their order of darkness is fixed so surfaces and selection never collide.",
    sections: colorSections,
  },
  {
    slug: "choosing",
    title: "使い分け",
    titleEn: "Choosing components",
    description:
      "よくある場面で、どの部品を使うかの決まりです。入力、状態、重ねて出すもの、コードの順に説明します。",
    descriptionEn:
      "Which component to use in common situations. See the use case and component pages for details.",
    sections: choosingSections,
  },
]

export function findGuidelinePage(slug: string | undefined) {
  return guidelinePages.find((page) => page.slug === slug) ?? guidelinePages[0]
}
