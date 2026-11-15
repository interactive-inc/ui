"use client"

import {
  CalendarPlusIcon,
  CopyIcon,
  MoreHorizontalIcon,
  PencilIcon,
  StarIcon,
  UserIcon,
  XCircleIcon,
} from "lucide-react"
import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Demo } from "./demo"

const features = [
  {
    href: "#jobs",
    title: "求人管理",
    hint: "求人票の作成から公開まで",
  },
  {
    href: "#applicants",
    title: "応募者管理",
    hint: "選考ステージごとに進捗を一覧",
  },
  {
    href: "#interviews",
    title: "面接調整",
    hint: "面接官の予定から候補日を提案",
  },
]

const cases = [
  { href: "#case-engineer", title: "エンジニア採用" },
  { href: "#case-designer", title: "デザイナー採用" },
  { href: "#case-backoffice", title: "バックオフィス採用" },
]

const pageTitles: Record<string, string> = {
  "#jobs": "求人管理",
  "#applicants": "応募者管理",
  "#interviews": "面接調整",
  "#pricing": "料金",
  "#contact": "相談",
}

const stages = ["書類選考", "一次面接", "二次面接", "最終面接", "内定"]

const applicants = [
  {
    id: "sato",
    name: "佐藤 美咲",
    kana: "さとう",
    stage: "一次面接",
    applied: "11/4",
    appliedOrder: 4,
    rejected: false,
  },
  {
    id: "tanaka",
    name: "田中 健太",
    kana: "たなか",
    stage: "書類選考",
    applied: "11/10",
    appliedOrder: 5,
    rejected: false,
  },
  {
    id: "suzuki",
    name: "鈴木 陽菜",
    kana: "すずき",
    stage: "二次面接",
    applied: "10/28",
    appliedOrder: 2,
    rejected: false,
  },
  {
    id: "takahashi",
    name: "高橋 蓮",
    kana: "たかはし",
    stage: "最終面接",
    applied: "10/21",
    appliedOrder: 1,
    rejected: false,
  },
  {
    id: "ito",
    name: "伊藤 さくら",
    kana: "いとう",
    stage: "書類選考",
    applied: "11/2",
    appliedOrder: 3,
    rejected: true,
  },
]

type Applicant = (typeof applicants)[number]

/**
 * メニューバーで選んだ並び順に並べ替える
 */
function sortApplicants(list: Applicant[], sort: string) {
  const sorted = [...list]

  if (sort === "stage") {
    return sorted.sort(
      (a, b) => stages.indexOf(b.stage) - stages.indexOf(a.stage),
    )
  }

  if (sort === "name") {
    return sorted.sort((a, b) => a.kana.localeCompare(b.kana, "ja"))
  }

  return sorted.sort((a, b) => b.appliedOrder - a.appliedOrder)
}

export function MenuDemos() {
  const [rowAction, setRowAction] = useState("")
  const [notifyUpdate, setNotifyUpdate] = useState(true)
  const [notifyReminder, setNotifyReminder] = useState(false)
  const [stage, setStage] = useState("一次面接")
  const [cardAction, setCardAction] = useState("")
  const [starred, setStarred] = useState(true)
  const [interviewer, setInterviewer] = useState("小林 由香")
  const [toolAction, setToolAction] = useState("")
  const [showRejected, setShowRejected] = useState(true)
  const [sort, setSort] = useState("applied")
  const [route, setRoute] = useState("#pricing")

  const visibleApplicants = sortApplicants(
    applicants.filter((applicant) => showRejected || !applicant.rejected),
    sort,
  )

  return (
    <>
      <Demo name="dropdown-menu">
        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center gap-3">
            <Avatar aria-hidden="true">
              <AvatarFallback>佐</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-sm">佐藤 美咲</p>
              <p className="truncate text-muted-foreground text-xs">
                フロントエンドエンジニア
              </p>
            </div>
            <Badge variant="secondary">{stage}</Badge>
            <DropdownMenu>
              <DropdownMenuTrigger
                aria-label="佐藤 美咲さんの操作メニュー"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon-sm",
                })}
              >
                <MoreHorizontalIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-60">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>佐藤 美咲</DropdownMenuLabel>
                  <DropdownMenuItem
                    onSelect={() => setRowAction("プロフィールを開きました")}
                    shortcut="mod+o"
                  >
                    <UserIcon />
                    プロフィールを開く
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => setRowAction("面接の設定を開きました")}
                    shortcut="mod+i"
                  >
                    <CalendarPlusIcon />
                    面接を設定
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    inset
                    disabled
                    data-agent-confirm="佐藤 美咲さんに内定を通知します"
                  >
                    内定を通知(最終面接後)
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>連絡する</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem
                      data-agent-confirm="佐藤 美咲さんにメールを送ります"
                      onSelect={() => setRowAction("メールを作成しました")}
                    >
                      佐藤さんにメールを送る
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      data-agent-confirm="佐藤 美咲さんに日程調整の案内を送ります"
                      onSelect={() =>
                        setRowAction("日程調整の案内を送りました")
                      }
                    >
                      日程調整の案内を送る
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>その他</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem
                          onSelect={() =>
                            setRowAction("応募ページのリンクをコピーしました")
                          }
                        >
                          応募ページのリンクをコピー
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>通知</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={notifyUpdate}
                    onCheckedChange={setNotifyUpdate}
                  >
                    選考の更新を通知
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={notifyReminder}
                    onCheckedChange={setNotifyReminder}
                  >
                    面接前日にリマインド
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem disabled>
                    チャットに通知(未連携)
                  </DropdownMenuCheckboxItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={stage} onValueChange={setStage}>
                  <DropdownMenuLabel>選考ステージ</DropdownMenuLabel>
                  <DropdownMenuRadioItem value="書類選考">
                    書類選考
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="一次面接">
                    一次面接
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="二次面接">
                    二次面接
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  variant="destructive"
                  data-agent-confirm="佐藤 美咲さんの選考を終了し、見送りにします"
                  onSelect={() => setRowAction("見送りにしました")}
                >
                  <XCircleIcon />
                  佐藤さんを見送る
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-3">
            <Avatar aria-hidden="true">
              <AvatarFallback>田</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-sm">田中 健太</p>
              <p className="truncate text-muted-foreground text-xs">
                フロントエンドエンジニア
              </p>
            </div>
            <Badge variant="outline">書類選考</Badge>
            <DropdownMenu>
              <DropdownMenuTrigger
                aria-label="田中 健太さんの操作メニュー"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon-sm",
                })}
              >
                <MoreHorizontalIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="end" className="w-48">
                <DropdownMenuItem
                  onSelect={() => setRowAction("メモの編集を開きました")}
                >
                  <PencilIcon />
                  メモを編集
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setRowAction("連絡先をコピーしました")}
                >
                  <CopyIcon />
                  連絡先をコピー
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p className="text-muted-foreground text-xs">
            {rowAction === ""
              ? "行の右端のボタンから操作を選べます"
              : rowAction}
          </p>
        </div>
      </Demo>

      <Demo name="context-menu">
        <div className="flex w-full flex-col gap-3">
          <ContextMenu>
            <ContextMenuTrigger
              tabIndex={0}
              role="group"
              aria-label="鈴木 陽菜さんのカード"
              className="flex w-full flex-col gap-3 rounded-lg border p-4 text-sm"
            >
              <div className="flex items-center gap-3">
                <Avatar aria-hidden="true">
                  <AvatarFallback>鈴</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">鈴木 陽菜</p>
                  <p className="truncate text-muted-foreground text-xs">
                    プロダクトデザイナー
                  </p>
                </div>
                {starred && (
                  <StarIcon
                    aria-label="注目の候補者"
                    className="size-4 fill-current text-amber-500"
                  />
                )}
              </div>
              <div className="flex items-center justify-between gap-2">
                <Badge variant="secondary">二次面接</Badge>
                <span className="text-muted-foreground text-xs">
                  面接担当: {interviewer}
                </span>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
              <ContextMenuItem
                onSelect={() => setCardAction("詳細を開きました")}
                shortcut="mod+o"
              >
                詳細を開く
              </ContextMenuItem>
              <ContextMenuItem disabled shortcut="mod+]">
                最終面接に進める
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>共有</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem
                    data-agent-confirm="鈴木 陽菜さんの応募情報を中村 大輔さんに共有します"
                    onSelect={() =>
                      setCardAction("中村 大輔さんに共有しました")
                    }
                  >
                    中村 大輔さんに共有
                  </ContextMenuItem>
                  <ContextMenuItem
                    onSelect={() => setCardAction("リンクをコピーしました")}
                  >
                    リンクをコピー
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem
                checked={starred}
                onCheckedChange={setStarred}
              >
                注目の候補者にする
              </ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuRadioGroup
                value={interviewer}
                onValueChange={setInterviewer}
              >
                <ContextMenuLabel>面接担当</ContextMenuLabel>
                <ContextMenuRadioItem value="小林 由香">
                  小林 由香
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="山本 直子">
                  山本 直子
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem
                  variant="destructive"
                  data-agent-confirm="鈴木 陽菜さんの選考を終了し、見送りにします"
                  onSelect={() => setCardAction("見送りにしました")}
                >
                  <XCircleIcon />
                  鈴木さんを見送る
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
          <p className="text-muted-foreground text-xs">
            {cardAction === ""
              ? "カードを右クリックすると操作メニューが開きます"
              : cardAction}
          </p>
        </div>
      </Demo>

      <Demo name="menubar">
        <div className="flex w-full flex-col gap-3">
          <Menubar aria-label="応募者一覧のメニューバー">
            <MenubarMenu>
              <MenubarTrigger>求人</MenubarTrigger>
              <MenubarContent>
                <MenubarItem
                  onSelect={() => setToolAction("新しい求人を作成しました")}
                  shortcut="mod+n"
                >
                  新しい求人を作成
                </MenubarItem>
                <MenubarItem disabled>応募者を一括で取り込む</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>共有</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem
                      onSelect={() =>
                        setToolAction("求人ページのリンクをコピーしました")
                      }
                    >
                      求人ページのリンクをコピー
                    </MenubarItem>
                    <MenubarItem
                      data-agent-confirm="応募者の一覧を面接官に共有します"
                      onSelect={() =>
                        setToolAction("面接官に一覧を共有しました")
                      }
                    >
                      面接官に一覧を共有
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem
                  variant="destructive"
                  data-agent-confirm="この求人の募集を終了し、求人ページを非公開にします"
                  onSelect={() => setToolAction("募集を終了しました")}
                >
                  募集を終了
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>表示</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem
                  checked={showRejected}
                  onCheckedChange={setShowRejected}
                >
                  見送り済みを表示
                </MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarLabel inset>一覧</MenubarLabel>
                  <MenubarItem
                    inset
                    onSelect={() => setToolAction("一覧を更新しました")}
                    shortcut="mod+r"
                  >
                    最新の状態に更新
                  </MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarRadioGroup value={sort} onValueChange={setSort}>
                  <MenubarLabel inset>並び順</MenubarLabel>
                  <MenubarRadioItem value="applied">
                    応募日が新しい順
                  </MenubarRadioItem>
                  <MenubarRadioItem value="stage">
                    選考が進んでいる順
                  </MenubarRadioItem>
                  <MenubarRadioItem value="name">名前順</MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger disabled>レポート</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>応募数の推移</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <ul className="flex flex-col divide-y text-sm">
            {visibleApplicants.map((applicant) => (
              <li key={applicant.id} className="flex items-center gap-2 py-2">
                <span className="min-w-0 flex-1 truncate">
                  {applicant.name}
                </span>
                <span className="text-muted-foreground text-xs tabular-nums">
                  {applicant.applied} 応募
                </span>
                <Badge variant={applicant.rejected ? "outline" : "secondary"}>
                  {applicant.rejected ? "見送り" : applicant.stage}
                </Badge>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-xs">
            {toolAction === ""
              ? `応募者 ${visibleApplicants.length}名を表示中`
              : toolAction}
          </p>
        </div>
      </Demo>

      <Demo name="navigation-menu">
        <div className="flex w-full flex-col gap-3">
          <NavigationMenu aria-label="サービスサイトのメニュー">
            <NavigationMenuList>
              <NavigationMenuItem value="features">
                <NavigationMenuTrigger>機能</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-72 gap-1">
                    {features.map((page) => (
                      <li key={page.href}>
                        <NavigationMenuLink
                          href={page.href}
                          current={route === page.href}
                          onClick={() => setRoute(page.href)}
                          className="flex-col items-start gap-0.5"
                        >
                          <span className="font-medium">{page.title}</span>
                          <span className="text-muted-foreground text-xs">
                            {page.hint}
                          </span>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem value="cases">
                <NavigationMenuTrigger>導入事例</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-52 gap-1">
                    {cases.map((page) => (
                      <li key={page.href}>
                        <NavigationMenuLink href={page.href}>
                          {page.title}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#pricing"
                  current={route === "#pricing"}
                  onClick={() => setRoute("#pricing")}
                >
                  料金
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  current={route === "#contact"}
                  onClick={() => setRoute("#contact")}
                >
                  相談
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuIndicator />
          </NavigationMenu>
          <p className="text-muted-foreground text-xs">
            表示中のページ: {pageTitles[route] ?? "トップ"}
          </p>
        </div>
      </Demo>
    </>
  )
}
