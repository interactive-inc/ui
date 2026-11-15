import { CopyPromptButton } from "@/src/copy-prompt-button"
import { Prose } from "@/src/prose"

type Props = {
  title: string
  description?: string
  actions?: React.ReactNode
  children?: React.ReactNode
}

export function PageTitle(props: Props) {
  return (
    <div className="flex flex-col gap-2 not-dark:[--secondary:var(--card)]">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h1 className="font-medium text-2xl">{props.title}</h1>
        <div className="flex flex-wrap items-center justify-end gap-2">
          {props.actions}
          <CopyPromptButton />
        </div>
      </div>
      {props.description !== undefined && (
        <p className="max-w-2xl text-sm">
          <Prose>{props.description}</Prose>
        </p>
      )}
      {props.children !== undefined && (
        <div className="flex flex-wrap items-center gap-2">
          {props.children}
        </div>
      )}
    </div>
  )
}
