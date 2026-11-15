import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "AI アシスタントが答えを出すまでに何をしたかを、1行ずつ並べて見せる記録。注文の照会や記事の検索のように、裏で進んだ手順を利用者に開示するときに使う。",
    "時刻と出来事を縦に並べる履歴なら Timeline、会話の中の区切りなら Marker を使う。Trace は回答に至る作業の途中経過に特化し、実行中は文字が光り、待ちは薄く、失敗は警告の色になる。",
    "TraceLine に TraceIcon、TraceTitle、TraceDescription を並べ、status で running、pending、error を示す。詳細を畳んでおくなら TraceCollapsible で包み、開閉を自分で持つなら open と onOpenChange を渡す。",
  ],
  sdk: [
    "TraceCollapsible、TraceCollapsibleTrigger、TraceCollapsibleContent は、この部品集の Collapsible（@ui-sdk/react/collapsible）を包んだもの。TraceLine などの行のパーツは span を描くだけで、UI SDK を使わない。",
    "トリガーは Enter と Space で開閉し、フォーカスはトリガーに残る。開閉の状態は data-open と data-closed で付き、パネルは --collapsible-panel-height と data-starting-style、data-ending-style で高さを動かしている。",
    "onOpenChange の第2引数 details で reason（trigger-press、find-in-page、imperative）が分かり、details.cancel() で開閉を止められる。離れたボタンから開閉するなら、createCollapsibleController() で作った controller を TraceCollapsible に渡す。エージェントからは collapsible として見え、名前はトリガーの文言から付き、setOpen と press を呼べる。",
    "TraceCollapsibleTrigger は末尾に矢印を自分で足し、TraceCollapsibleContent の className は内側の div に付く。open を渡すときは onOpenChange も必須にしてある。keepMounted と hiddenUntilFound は TraceCollapsibleContent にそのまま渡せる。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "手順を1行ずつ並べ、status で実行中と待ちを示す。",
      en: {
        title: "Basic",
        description:
          "List steps one per line and mark running and pending ones with status.",
      },
    },
    {
      id: "collapsible",
      title: "詳細を畳む",
      description:
        "TraceCollapsible で包むと、行を押して中身を開ける。失敗は status を error にする。",
      en: {
        title: "Collapsible",
        description:
          "Wrap a line in TraceCollapsible so pressing it reveals details. Set status to error for failures.",
      },
    },
    {
      id: "controlled",
      title: "開閉を自分で持つ",
      description: "open と onOpenChange を渡し、開閉に合わせて文言を変える。",
      en: {
        title: "Controlled",
        description:
          "Pass open and onOpenChange and change the text to match the state.",
      },
    },
    {
      id: "in-message",
      title: "回答の前に置く",
      description:
        "Message の中で回答の Bubble の前に置き、答えの根拠をたどれるようにする。",
      en: {
        title: "In a message",
        description:
          "Place it before the answer's Bubble inside a Message so people can follow how the answer was reached.",
      },
    },
  ],
  en: {
    usage: [
      "A record that lists, line by line, what an AI assistant did before answering. Use it to show the steps taken behind the scenes, such as looking up an order or searching articles.",
      "Use Timeline for a dated history and Marker for breaks within a conversation. Trace focuses on the work leading to an answer: running steps shimmer, pending steps are faded and failures use the warning color.",
      "Put TraceIcon, TraceTitle and TraceDescription in a TraceLine, and mark running, pending or error with status. Wrap a line in TraceCollapsible to fold away details, and pass open and onOpenChange to control it yourself.",
    ],
    sdk: [
      "TraceCollapsible, TraceCollapsibleTrigger and TraceCollapsibleContent wrap this collection's Collapsible (@ui-sdk/react/collapsible). The line parts such as TraceLine only render a span and do not use UI SDK.",
      "Enter and Space on the trigger open and close the panel, and focus stays on the trigger. Open state is exposed as data-open and data-closed, and the panel animates its height with --collapsible-panel-height, data-starting-style and data-ending-style.",
      "The second argument of onOpenChange, details, gives the reason (trigger-press, find-in-page or imperative), and details.cancel() stops the change. To open or close it from a button elsewhere, pass a controller made with createCollapsibleController() to TraceCollapsible. An agent sees it as a collapsible named by the trigger's text and can call setOpen and press.",
      "TraceCollapsibleTrigger adds the chevron at the end itself, and TraceCollapsibleContent applies className to its inner div. When you pass open, onOpenChange is required as well. keepMounted and hiddenUntilFound pass straight through TraceCollapsibleContent.",
    ],
  },
} satisfies ComponentGuide
