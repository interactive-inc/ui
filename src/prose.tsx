const plainWords = new Set([
  "AI",
  "ARIA",
  "CLI",
  "CSS",
  "Claude",
  "Code",
  "Codex",
  "DOM",
  "HTML",
  "JSON",
  "JSX",
  "Labs",
  "Markdown",
  "OS",
  "PC",
  "React",
  "SDK",
  "Tailwind",
  "UI",
  "URL",
  "Vercel",
  "WebMCP",
  "core",
  "hex",
  "shadcn",
  "v4",
])

const token = /[A-Za-z@<-][A-Za-z0-9_\-./:(){}<>="'@+[\]%*#]*/g

type Props = {
  children: string
}

/**
 * 文章の中の識別子（部品名、props、クラス名など）をインラインコードにする
 */
export function Prose(props: Props) {
  const nodes: React.ReactNode[] = []
  let last = 0
  for (const match of props.children.matchAll(token)) {
    const word = match[0].replace(/[.,:]+$/, "")
    const start = match.index
    if (!/[A-Za-z]/.test(word) || plainWords.has(word)) continue
    if (start > last) nodes.push(props.children.slice(last, start))
    nodes.push(
      <code
        key={start}
        className="rounded-md bg-muted px-1.5 py-0.5 text-[0.9em]"
      >
        {word}
      </code>,
    )
    last = start + word.length
  }
  if (last < props.children.length) nodes.push(props.children.slice(last))
  return <>{nodes}</>
}
