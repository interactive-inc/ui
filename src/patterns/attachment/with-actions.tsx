import { FileTextIcon, XIcon } from "lucide-react"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/ui/attachment"

const files = [
  { name: "発注書_A-1024.pdf", size: "320 KB" },
  { name: "仕様書_第2版.pdf", size: "2.1 MB" },
  { name: "納期の調整案.docx", size: "48 KB" },
]

export function AttachmentWithActions() {
  return (
    <AttachmentGroup>
      {files.map((file) => (
        <Attachment key={file.name}>
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{file.name}</AttachmentTitle>
            <AttachmentDescription>{file.size}</AttachmentDescription>
          </AttachmentContent>
          <AttachmentTrigger aria-label={`${file.name}を開く`} />
          <AttachmentActions>
            <AttachmentAction
              aria-label={`${file.name}を削除`}
              data-agent-confirm={`${file.name}を添付から外します`}
            >
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      ))}
    </AttachmentGroup>
  )
}
