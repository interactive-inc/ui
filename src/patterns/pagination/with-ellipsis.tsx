import { useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationWithEllipsis() {
  const [page, setPage] = useState(8)

  return (
    <Pagination
      aria-label="顧客一覧のページ送り"
      page={page}
      onPageChange={setPage}
      pageCount={20}
      siblings={1}
      boundaries={1}
    >
      <PaginationContent>
        {({ items }) => (
          <>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            {items.map((item) => (
              <PaginationItem key={item}>
                {typeof item === "number" ? (
                  <PaginationLink page={item} aria-label={`${item}ページ目`} />
                ) : (
                  <PaginationEllipsis />
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
