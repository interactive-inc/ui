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

const total = 186
const pageSize = 20

export function PaginationWithSummary() {
  const [page, setPage] = useState(1)
  const from = (page - 1) * pageSize + 1
  const to = Math.min(page * pageSize, total)

  return (
    <div className="flex w-full flex-col gap-3">
      <p className="text-center text-muted-foreground text-sm tabular-nums">
        注文 {total}件中 {from}〜{to}件を表示
      </p>
      <Pagination
        aria-label="注文一覧のページ送り"
        page={page}
        onPageChange={setPage}
        total={total}
        pageSize={pageSize}
        siblings={0}
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
                    <PaginationLink
                      page={item}
                      aria-label={`${item}ページ目`}
                    />
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
    </div>
  )
}
