import { Spinner } from "@/components/ui/spinner"

export function SpinnerBasic() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8 text-muted-foreground" />
    </div>
  )
}
