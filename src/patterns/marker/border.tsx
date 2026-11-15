import { UserPlusIcon } from "lucide-react"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"

export function MarkerBorder() {
  return (
    <Marker variant="border">
      <MarkerIcon>
        <UserPlusIcon />
      </MarkerIcon>
      <MarkerContent>
        担当者が小林に替わりました <a href="#history">履歴を見る</a>
      </MarkerContent>
    </Marker>
  )
}
