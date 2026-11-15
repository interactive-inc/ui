import type { ComponentGuide } from "@/src/patterns/types"

type PatternModule = Record<string, () => React.ReactNode>

const guides = import.meta.glob<ComponentGuide>("./*/index.ts", {
  eager: true,
  import: "guide",
})

const previews = import.meta.glob<PatternModule>(["./*/*.tsx"], {
  eager: true,
})

const sources = import.meta.glob<string>(["./*/*.tsx"], {
  eager: true,
  query: "?raw",
  import: "default",
})

export function findGuide(name: string) {
  return guides[`./${name}/index.ts`]
}

export function findPattern(name: string, id: string) {
  const path = `./${name}/${id}.tsx`
  const module = previews[path]
  const Preview = module === undefined ? undefined : Object.values(module)[0]
  return { Preview, source: sources[path] }
}
