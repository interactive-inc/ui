import { defineHead } from "void"
import type { PageParams } from "void/routes"
import { findGuidelinePage, guidelinePages } from "@/src/guidelines"

export async function getPrerenderPaths(): Promise<
  PageParams<"/guidelines/[slug]/">[]
> {
  return guidelinePages.map((page) => ({ slug: page.slug }))
}

export const head = defineHead((c) => ({
  title: findGuidelinePage(c.req.param("slug")).title,
}))
