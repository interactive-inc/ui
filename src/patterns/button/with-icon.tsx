import { ArrowRightIcon, DownloadIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline">
        <DownloadIcon data-icon="inline-start" />
        書き出す
      </Button>
      <Button>
        次へ進む
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  )
}
