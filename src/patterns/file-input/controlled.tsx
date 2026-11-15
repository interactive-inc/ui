import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputList,
  FileInputTrigger,
  formatFileSize,
} from "@/components/ui/file-input"

export function FileInputControlled() {
  const [files, setFiles] = useState<File[]>([])
  const total = files.reduce((sum, file) => sum + file.size, 0)

  return (
    <Field>
      <FieldLabel>経費の領収書</FieldLabel>
      <FileInput
        name="receipts"
        multiple
        value={files}
        onValueChange={(value) => setFiles(value)}
      >
        <FileInputDropzone>
          <p>領収書の写真やPDFをドロップ</p>
          <FileInputTrigger>領収書を選ぶ</FileInputTrigger>
        </FileInputDropzone>
        <FileInputList aria-label="追加した領収書">
          <FileInputItem />
        </FileInputList>
      </FileInput>
      <FieldDescription>
        {files.length === 0
          ? "まだ領収書がありません"
          : `${files.length}件・合計 ${formatFileSize(total)}`}
      </FieldDescription>
    </Field>
  )
}
