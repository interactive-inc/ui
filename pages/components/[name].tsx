import { useParams } from "@void/react"
import { ComponentPage } from "@/src/component-page"

export default function ComponentRoute() {
  const params = useParams<"/components/[name]/">()

  return <ComponentPage name={params.name} />
}
