import { findCategory } from "@/src/categories"
import { BasicDemos } from "@/src/demos/basic"
import { ContentDemos } from "@/src/demos/content"
import { DemoBoard } from "@/src/demos/demo"
import { FormDemos } from "@/src/demos/form"
import { MenuDemos } from "@/src/demos/menu"
import { OverlayDemos } from "@/src/demos/overlay"
import { SdkDisplayDemos } from "@/src/demos/sdk-display"
import { SdkInputDemos } from "@/src/demos/sdk-input"
import { SelectionDemos } from "@/src/demos/selection"
import { PageTitle } from "@/src/page-title"

type Props = {
  slug: string | undefined
}

export function CategoryPage(props: Props) {
  const category = findCategory(props.slug)

  return (
    <div className="flex flex-col gap-6">
      <PageTitle title={category.title} />
      <DemoBoard components={category.components}>
        <BasicDemos />
        <FormDemos />
        <SdkInputDemos />
        <SelectionDemos />
        <OverlayDemos />
        <MenuDemos />
        <ContentDemos />
        <SdkDisplayDemos />
      </DemoBoard>
    </div>
  )
}
