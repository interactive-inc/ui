import { createContext, use } from "react"
import { Card, CardContent } from "@/components/ui/card"

const DemoFilterContext = createContext<readonly string[] | undefined>(
  undefined,
)

type BoardProps = {
  components?: readonly string[]
  children: React.ReactNode
}

export function DemoBoard(props: BoardProps) {
  return (
    <DemoFilterContext value={props.components}>
      <div className="columns-1 gap-4 lg:columns-2 2xl:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {props.children}
      </div>
    </DemoFilterContext>
  )
}

type Props = {
  name: string
  bare?: boolean
  children: React.ReactNode
}

export function Demo(props: Props) {
  const components = use(DemoFilterContext)

  if (components !== undefined && !components.includes(props.name)) {
    return null
  }

  if (props.bare === true) {
    return (
      <div id={props.name} className="flex flex-col gap-4">
        {props.children}
      </div>
    )
  }

  return (
    <Card id={props.name}>
      <CardContent className="flex flex-wrap items-start gap-4">
        {props.children}
      </CardContent>
    </Card>
  )
}
