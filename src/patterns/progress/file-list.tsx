import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

const files = [
  { name: "見積書_11月.pdf", value: 100 },
  { name: "打ち合わせ資料.pptx", value: 48 },
  { name: "現場写真.zip", value: null },
]

export function ProgressFileList() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {files.map((file) => (
        <Progress key={file.name} value={file.value}>
          <ProgressLabel>{file.name}</ProgressLabel>
          {file.value !== null && <ProgressValue />}
        </Progress>
      ))}
    </div>
  )
}
