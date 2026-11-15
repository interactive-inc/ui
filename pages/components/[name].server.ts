import { defineHead } from "void"
import type { PageParams } from "void/routes"
import { componentDocs, componentNames } from "@/src/component-docs"

export async function getPrerenderPaths(): Promise<
  PageParams<"/components/[name]/">[]
> {
  return componentNames.map((name) => ({ name }))
}

export const head = defineHead((c) => ({
  title: componentDocs[c.req.param("name") ?? ""]?.title ?? "コンポーネント",
}))
