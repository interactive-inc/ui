import { useParams } from "@void/react"
import { GuidelinesPage } from "@/src/guidelines-page"

export default function GuidelinesRoute() {
  const params = useParams<"/guidelines/[slug]/">()

  return <GuidelinesPage slug={params.slug} />
}
