import { useState } from "react"
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const members = [
  { id: "sato", name: "佐藤 美咲", team: "営業部", role: "管理者" },
  { id: "suzuki", name: "鈴木 陽菜", team: "経理部", role: "編集者" },
  { id: "takahashi", name: "高橋 蓮", team: "営業部", role: "閲覧者" },
  { id: "tanaka", name: "田中 健太", team: "開発部", role: "編集者" },
]

export function TableSelectable() {
  const [selected, setSelected] = useState(["suzuki"])

  return (
    <CheckboxGroup
      aria-label="メンバー"
      className="w-full"
      value={selected}
      onValueChange={setSelected}
      allValues={members.map((member) => member.id)}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <Checkbox aria-label="すべてのメンバーを選択" parent />
            </TableHead>
            <TableHead>名前</TableHead>
            <TableHead>部署</TableHead>
            <TableHead>権限</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow
              key={member.id}
              data-state={selected.includes(member.id) ? "selected" : undefined}
            >
              <TableCell>
                <Checkbox
                  aria-label={`${member.name}を選択`}
                  value={member.id}
                />
              </TableCell>
              <TableCell className="font-medium">{member.name}</TableCell>
              <TableCell>{member.team}</TableCell>
              <TableCell>{member.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-muted-foreground text-xs">
        {selected.length}名を選択中
      </p>
    </CheckboxGroup>
  )
}
