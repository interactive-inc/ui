import { UploadIcon } from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputList,
  FileInputTrigger,
} from "@/components/ui/file-input"

export function FileInputBasic() {
  return (
    <Field>
      <FieldLabel>問い合わせの添付ファイル</FieldLabel>
      <FileInput name="attachments" multiple>
        <FileInputDropzone>
          <UploadIcon aria-hidden="true" />
          <p>ここにファイルをドロップ、または貼り付け</p>
          <FileInputTrigger />
        </FileInputDropzone>
        <FileInputList aria-label="添付したファイル">
          <FileInputItem />
        </FileInputList>
      </FileInput>
    </Field>
  )
}
