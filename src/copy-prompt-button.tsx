import { CheckIcon, CopyIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { siteUrl } from "@/src/site"

const prompt = `${siteUrl}/llms.txt を読んで、このプロジェクトに interactive-inc/ui を導入して使ってください。`

export function CopyPromptButton() {
  const [copied, setCopied] = useState(false)

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      aria-label={copied ? "コピーしました" : "AI への指示文をコピー"}
      onClick={copyPrompt}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  )
}
