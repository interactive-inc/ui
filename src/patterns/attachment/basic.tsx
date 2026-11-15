import { FileTextIcon } from "lucide-react"
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"

export function AttachmentBasic() {
  return (
    <Attachment>
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>見積書_2026年11月.pdf</AttachmentTitle>
        <AttachmentDescription>PDF・842 KB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  )
}
