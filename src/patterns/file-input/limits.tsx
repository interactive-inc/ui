import { useState } from "react"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import {
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputList,
  FileInputTrigger,
} from "@/components/ui/file-input"

export function FileInputLimits() {
  const [rejected, setRejected] = useState<string[]>([])

  return (
    <Field>
      <FieldLabel>商品画像</FieldLabel>
      <FileInput
        name="productImages"
        multiple
        accept="image/*"
        maxFiles={4}
        maxSize={2_000_000}
        onValueChange={() => setRejected([])}
        onReject={(files) => setRejected(files.map((item) => item.file.name))}
      >
        <FileInputDropzone>
          <p>画像を4枚までドロップ</p>
          <FileInputTrigger>画像を選ぶ</FileInputTrigger>
        </FileInputDropzone>
        <FileInputList aria-label="追加した商品画像">
          <FileInputItem />
        </FileInputList>
      </FileInput>
      <FieldDescription>JPEG または PNG、1枚2MBまで</FieldDescription>
      {rejected.length > 0 && (
        <FieldError>
          {`${rejected.join("、")} は追加できませんでした。形式と大きさを確認してください。`}
        </FieldError>
      )}
    </Field>
  )
}
