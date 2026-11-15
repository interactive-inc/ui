import { defineHead } from "void"
import type { PageParams } from "void/routes"
import { categories, findCategory } from "@/src/categories"

export async function getPrerenderPaths(): Promise<
  PageParams<"/cases/[case]/">[]
> {
  return categories.map((category) => ({ case: category.slug }))
}

export const head = defineHead((c) => ({
  title: findCategory(c.req.param("case")).title,
}))
