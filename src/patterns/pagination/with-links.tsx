import { useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationWithLinks() {
  const [page, setPage] = useState(2)

  return (
    <Pagination
      aria-label="請求書一覧のページ送り"
      page={page}
      onPageChange={setPage}
      pageCount={5}
      getHref={(item) => `#invoices-page-${item}`}
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
