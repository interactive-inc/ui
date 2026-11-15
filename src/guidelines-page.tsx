import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { choosingDiagrams } from "@/src/choosing-diagrams"
import { colorDiagrams } from "@/src/color-layers"
import { findGuidelinePage } from "@/src/guidelines"
import { layoutDiagrams } from "@/src/layout-diagrams"
import { PageTitle } from "@/src/page-title"
import { Prose } from "@/src/prose"

type Props = {
  slug: string | undefined
}

const diagrams = {
  ...layoutDiagrams,
  ...colorDiagrams,
  ...choosingDiagrams,
}

export function GuidelinesPage(props: Props) {
  const page = findGuidelinePage(props.slug)

  return (
    <div className="flex flex-col gap-8">
      <PageTitle title={page.title} description={page.description} />
      {page.sections.map((section) => {
        const Diagram = diagrams[section.id]
        return (
          <Card key={section.id} id={section.id}>
            <CardHeader>
              <CardTitle>
                <h2>{section.title}</h2>
              </CardTitle>
              <CardDescription className="text-base text-foreground">
                <Prose>{section.lead}</Prose>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              {Diagram !== undefined && <Diagram />}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
