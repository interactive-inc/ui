import { FileIcon, FileTextIcon, TriangleAlertIcon } from "lucide-react"
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { Spinner } from "@/components/ui/spinner"

export function AttachmentStates() {
  return (
    <div className="flex flex-col gap-3">
      <Attachment state="idle">
        <AttachmentMedia>
          <FileIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>注文書.xlsx</AttachmentTitle>
          <AttachmentDescription>送信を待っています</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="uploading">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>納品書.pdf</AttachmentTitle>
          <AttachmentDescription>アップロード中 64%</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="error">
        <AttachmentMedia>
          <TriangleAlertIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>店舗写真.zip</AttachmentTitle>
          <AttachmentDescription>10MBを超えています</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="done">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>契約書.pdf</AttachmentTitle>
          <AttachmentDescription>1.4 MB・送信済み</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </div>
  )
}
