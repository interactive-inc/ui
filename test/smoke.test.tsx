import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { SidebarProvider } from "@/components/ui/sidebar"
import { categories } from "@/src/categories"
import { CategoryPage } from "@/src/category-page"
import { componentDocs, componentNames } from "@/src/component-docs"
import { ComponentPage } from "@/src/component-page"

test.each(categories)("$title のページが描画される", (category) => {
  render(
    <SidebarProvider>
      <CategoryPage slug={category.slug} />
    </SidebarProvider>,
  )
  expect(
    screen.getByRole("heading", { level: 1, name: category.title }),
  ).toBeTruthy()
})

test.each(componentNames)("%s の部品ページが描画される", (name) => {
  render(
    <SidebarProvider>
      <ComponentPage name={name} />
    </SidebarProvider>,
  )
  expect(
    screen.getByRole("heading", { level: 1, name: componentDocs[name].title }),
  ).toBeTruthy()
})
