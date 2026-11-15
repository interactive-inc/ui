import { useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationBasic() {
  const [page, setPage] = useState(1)

  return (
    <Pagination
      aria-label="商品一覧のページ送り"
      page={page}
      onPageChange={setPage}
      pageCount={4}
    >
      <PaginationContent>
        {({ items }) => (
          <>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            {items.map((item) => (
              <PaginationItem key={item}>
                {typeof item === "number" && (
                  <PaginationLink page={item} aria-label={`${item}ページ目`} />
                )}
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  )
}
