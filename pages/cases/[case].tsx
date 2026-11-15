import { useParams } from "@void/react"
import { CategoryPage } from "@/src/category-page"

export default function CategoryRoute() {
  const params = useParams<"/cases/[case]/">()

  return <CategoryPage slug={params.case} />
}
