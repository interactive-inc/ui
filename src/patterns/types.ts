export type Pattern = {
  id: string
  title: string
  description: string
  en: {
    title: string
    description: string
  }
}

export type ComponentGuide = {
  /**
   * AI 向けの要点。英語の短い箇条書き
   */
  notes: string[]
  patterns: Pattern[]
}
