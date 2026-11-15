import { ImageIcon } from "lucide-react"
import {
  Attachment,
  AttachmentContent,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"

export function AttachmentImage() {
  return (
    <div className="flex gap-3">
      <Attachment orientation="vertical">
        <AttachmentMedia variant="image">
          <img src="/inta-icon.png" alt="破損した商品の写真" />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>破損箇所.png</AttachmentTitle>
        </AttachmentContent>
      </Attachment>
      <Attachment orientation="vertical" state="processing">
        <AttachmentMedia variant="image">
          <img src="/inta-icon.png" alt="外箱の写真" />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>外箱.png</AttachmentTitle>
        </AttachmentContent>
      </Attachment>
      <Attachment orientation="vertical" state="idle">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>伝票の写真</AttachmentTitle>
        </AttachmentContent>
      </Attachment>
    </div>
  )
}
