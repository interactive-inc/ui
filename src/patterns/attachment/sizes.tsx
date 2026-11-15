import { FileTextIcon } from "lucide-react"
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"

export function AttachmentSizes() {
  return (
    <div className="flex flex-col gap-3">
      <Attachment>
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>就業規則.pdf</AttachmentTitle>
          <AttachmentDescription>標準</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment size="sm">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>給与規程.pdf</AttachmentTitle>
          <AttachmentDescription>小</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment size="xs">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>旅費規程.pdf</AttachmentTitle>
        </AttachmentContent>
      </Attachment>
    </div>
  )
}
