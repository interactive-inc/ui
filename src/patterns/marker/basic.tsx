import { PackageCheckIcon } from "lucide-react"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"

export function MarkerBasic() {
  return (
    <Marker>
      <MarkerIcon>
        <PackageCheckIcon />
      </MarkerIcon>
      <MarkerContent>ご注文の商品を発送しました</MarkerContent>
    </Marker>
  )
}
