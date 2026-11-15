import { Field, FieldLabel } from "@/components/ui/field"
import { FileInput, FileInputTrigger } from "@/components/ui/file-input"

export function FileInputUploadButton() {
  return (
    <Field>
      <FieldLabel>請求書のPDF</FieldLabel>
      <FileInput name="invoice" accept=".pdf" className="flex-row items-center">
        {(state) => (
          <>
            <FileInputTrigger>
              {state.value[0] ? "ファイルを差し替える" : "PDFを選ぶ"}
            </FileInputTrigger>
            <span className="truncate text-muted-foreground text-sm">
              {state.value[0]?.name ?? "まだ選ばれていません"}
            </span>
          </>
        )}
      </FileInput>
    </Field>
  )
}
