import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs"
import { categories } from "../src/categories"
import { componentDocs } from "../src/component-docs"
import { colorTokens, guidelinePages } from "../src/guidelines"
import type { ComponentGuide } from "../src/patterns/types"
import { siteUrl } from "../src/site"

const site = siteUrl

const sdkDocs = "https://ui-sdk.dev/docs/react/components"

type RegistryItem = {
  name: string
  title?: string
  description?: string
  dependencies?: string[]
  registryDependencies?: string[]
  files?: { path: string }[]
}

const registry = JSON.parse(readFileSync("registry.json", "utf8")) as {
  items: RegistryItem[]
}

const guides = new Map<string, ComponentGuide>()

for (const name of readdirSync("src/patterns")) {
  if (!existsSync(`src/patterns/${name}/index.ts`)) continue
  const module = (await import(`../src/patterns/${name}/index.ts`)) as {
    guide: ComponentGuide
  }
  guides.set(name, module.guide)
}

const demoSources = readdirSync("src/demos").map((file) =>
  readFileSync(`src/demos/${file}`, "utf8"),
)

function findExample(name: string) {
  for (const source of demoSources) {
    const start = source.search(new RegExp(`<Demo\\s+name="${name}"`))
    if (start === -1) continue
    const open = source.indexOf(">", start) + 1
    const end = source.indexOf("</Demo>", open)
    const lines = source.slice(open, end).split("\n")
    const indent = Math.min(
      ...lines
        .filter((line) => line.trim() !== "")
        .map((line) => line.length - line.trimStart().length),
    )
    return lines
      .map((line) => line.slice(indent))
      .join("\n")
      .trim()
  }
  return undefined
}

function findExports(name: string) {
  const source = readFileSync(`components/ui/${name}.tsx`, "utf8")
  const names = [...source.matchAll(/export\s*\{([^}]*)\}/g)].flatMap((match) =>
    match[1]
      .split(",")
      .map((part) => part.trim())
      .filter((part) => part !== "" && !part.startsWith("type ")),
  )
  return names
}

const rules = `## How to write code with this library

- Add a component with \`vp dlx shadcn@latest add @inta/<name>\` and import it from \`@/components/ui/<name>\`
- Behavior comes from UI SDK (@ui-sdk/react). Components own keyboard handling, focus and ARIA, so do not write your own roles, aria attributes or key handlers
- Replace the rendered element with \`render\` (for example \`render={<a href="/" />}\`). There is no \`asChild\`
- \`className\` is a string or a function of the component state. Style states with data attributes (\`data-checked\`, \`data-disabled\`, \`data-open\`, \`data-highlighted\`, \`data-invalid\` and so on)
- Put \`@layer ui-sdk;\` at the top of your CSS, before the tailwind import
- Popups render in the top layer, so no Portal is needed. Right-to-left languages work without a provider
- Receive changes through callbacks such as \`onValueChange\`, \`onCheckedChange\` and \`onOpenChange\`. Do not keep state in \`onClick\` or \`onKeyDown\`
- Wrap form inputs in \`Field\` and \`FieldLabel\` so every input has a name
- Do not place bare \`<button>\`, \`<input>\` or \`<select>\` elements. Use Button, Input, Select and the like (agents cannot operate bare elements)

## Letting agents operate the UI

- Create a bridge with \`import { createAgent, registerTools } from "@ui-sdk/react/agent"\` and agents can find and operate components by name. It can also register with WebMCP
- Give every interactive component a name that is unique on the page (FieldLabel, aria-label or the button text)
- Add \`data-agent-confirm="what will happen"\` to actions that need a human to confirm, such as delete, send or pay. In a confirm dialog, put it on the confirm button
- Add \`data-agent-secret\` to inputs whose value agents must not read, and \`data-agent-hidden\` to regions agents must not see
- Details: https://ui-sdk.dev/docs/react/agents

## When a component is missing

Do not hand-write markup for components that are not listed here. Build them with UI SDK core (\`definePrimitive\` and behaviors): https://ui-sdk.dev/docs/core/llms.txt`

const layout = guidelinePages
  .map((page) => {
    const scale =
      page.slug === "color"
        ? `\n\n| Tokens | Role | Light | Dark |\n| --- | --- | --- | --- |\n${colorTokens
            .map(
              (color) =>
                `| ${color.tokens.join(", ")} | ${color.roleEn} | ${color.light} | ${color.dark} |`,
            )
            .join("\n")}`
        : ""
    return `## ${page.titleEn} guidelines\n\n${page.descriptionEn}${scale}\n\n${page.sections
      .map(
        (section) =>
          `### ${section.titleEn}\n\n${section.rules.map((rule) => `- ${rule}`).join("\n")}`,
      )
      .join("\n\n")}`
  })
  .join("\n\n")

function componentLine(name: string) {
  const doc = componentDocs[name]
  return `- [${doc.title}](${site}/components/${name}.md): ${doc.summaryEn}`
}

const catalog = categories
  .map(
    (category) =>
      `### ${category.titleEn}\n\n${category.components.map(componentLine).join("\n")}`,
  )
  .join("\n\n")

const index = `# interactive-inc/ui

> React components distributed with the shadcn CLI. The look is shadcn base-maia and the behavior is Vercel's UI SDK (@ui-sdk/react), with keyboard handling, focus, ARIA and agent control built in.

This file is the entry point for AI writing UI with this library. Pick components by what the user wants to do, and always read the component's Markdown page before writing code. Every component page ${site}/components/<name>/ is available as Markdown at ${site}/components/<name>.md. Everything in one file: ${site}/llms-full.txt

## Install

1. Register the registry in components.json

\`\`\`json
{
  "registries": {
    "@inta": "${site}/r/{name}.json"
  }
}
\`\`\`

2. Put \`@layer ui-sdk;\` at the top of your CSS (before \`@import "tailwindcss";\`)
3. Add components: \`vp dlx shadcn@latest add @inta/button @inta/dialog\`. To add every component at once: \`vp dlx shadcn@latest add @inta/all\`

Requires Tailwind CSS v4 and React 19 or later. The CLI installs the dependencies (@ui-sdk/react, @ui-sdk/core, cn, lucide-react and others).

${rules}

${layout}

## Components by task

${catalog}

## More

- [Showcase](${site}/): examples by use case and a page per component
- [Skill](${site}/skills/): \`vp dlx skills add interactive-inc/ui --skill inta-ui\` installs the same guidance into your agent
- [UI SDK llms.txt](https://ui-sdk.dev/docs/react/llms.txt): component APIs and concepts
`

function componentPage(name: string) {
  const doc = componentDocs[name]
  const example = findExample(name)
  const exports = findExports(name)
  const header = [
    `- add: \`vp dlx shadcn@latest add @inta/${name}\``,
    `- import from \`@/components/ui/${name}\`: ${exports.join(", ")}`,
  ]
  if (doc.sdk !== undefined) {
    header.push(`- UI SDK API: ${sdkDocs}/${doc.sdk}.md`)
  }
  const sections = [`# ${doc.title}`, `> ${doc.summaryEn}`, header.join("\n")]
  const guide = guides.get(name)
  if (guide !== undefined) {
    sections.push(
      `## Notes\n\n${guide.notes.map((note) => `- ${note}`).join("\n")}`,
    )
    sections.push(
      `## Patterns\n\n${guide.patterns
        .map((pattern) => {
          const code = readFileSync(
            `src/patterns/${name}/${pattern.id}.tsx`,
            "utf8",
          ).trimEnd()
          return `### ${pattern.en.title}\n\n${pattern.en.description}\n\n\`\`\`tsx\n${code}\n\`\`\``
        })
        .join("\n\n")}`,
    )
  } else if (example !== undefined) {
    sections.push(`## Example\n\n\`\`\`tsx\n${example}\n\`\`\``)
  }
  return `${sections.join("\n\n")}\n`
}

rmSync("public/components", { recursive: true, force: true })
mkdirSync("public/components", { recursive: true })

const pages = categories.flatMap((category) =>
  category.components.map((name) => {
    const page = componentPage(name)
    writeFileSync(`public/components/${name}.md`, page)
    return page
  }),
)

writeFileSync("public/llms.txt", index)
writeFileSync("public/llms-full.txt", [index, ...pages].join("\n---\n\n"))

for (const item of registry.items) {
  const doc = componentDocs[item.name]
  if (doc === undefined) continue
  item.title = doc.title
  item.description = doc.summaryEn
}

const itemByPath = new Map<string, string>()

for (const item of registry.items) {
  for (const file of item.files ?? []) {
    itemByPath.set(file.path.replace(/\.tsx?$/, ""), item.name)
  }
}

for (const item of registry.items) {
  if (item.name === "all") continue
  const dependencies = new Set<string>()
  const registryDependencies = new Set<string>()
  for (const file of item.files ?? []) {
    const source = readFileSync(file.path, "utf8")
    for (const match of source.matchAll(/from "([^"]+)"/g)) {
      const specifier = match[1]
      if (specifier.startsWith("@/")) {
        const owner = itemByPath.get(specifier.slice(2))
        if (owner === undefined) {
          throw new Error(`${item.name}: ${specifier} is not in the registry`)
        }
        if (owner !== item.name) registryDependencies.add(owner)
        continue
      }
      const parts = specifier.split("/")
      const name = specifier.startsWith("@")
        ? parts.slice(0, 2).join("/")
        : parts[0]
      if (name === "react" || name === "react-dom") continue
      if (name.startsWith("@ui-sdk/")) {
        dependencies.add("@ui-sdk/core@beta")
        dependencies.add(`${name}@beta`)
        continue
      }
      dependencies.add(name)
    }
  }
  item.dependencies = [...dependencies].sort()
  item.registryDependencies = [...registryDependencies]
    .sort()
    .map((name) => `${site}/r/${name}.json`)
  if (item.dependencies.length === 0) delete item.dependencies
  if (item.registryDependencies.length === 0) delete item.registryDependencies
}

const allItem: RegistryItem & { type: string; files: never[] } = {
  name: "all",
  type: "registry:item",
  title: "All components",
  description: "Adds every component in the registry at once.",
  registryDependencies: Object.keys(componentDocs)
    .sort()
    .map((name) => `${site}/r/${name}.json`),
  files: [],
}

registry.items = [
  ...registry.items.filter((item) => item.name !== "all"),
  allItem,
]

writeFileSync("registry.json", `${JSON.stringify(registry, null, 2)}\n`)

console.log(`wrote llms.txt and ${pages.length} component pages`)

const skill = `---
name: inta-ui
description: Build React UI with interactive-inc/ui (shadcn registry @inta, powered by UI SDK). Covers choosing components, coding rules and agent support.
---

# inta-ui

Build screens with interactive-inc/ui components. Read ${site}/llms.txt first, then ${site}/components/<name>.md for each component you use.

## Install

- Add \`"@inta": "${site}/r/{name}.json"\` to registries in components.json
- Put \`@layer ui-sdk;\` at the top of your CSS, before the tailwind import
- Add components with \`vp dlx shadcn@latest add @inta/<name>\`, or all of them with \`vp dlx shadcn@latest add @inta/all\`

${rules}

${layout}

## Components by task

${catalog}
`

mkdirSync("skills/inta-ui", { recursive: true })
writeFileSync("skills/inta-ui/SKILL.md", skill)
