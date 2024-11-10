"use client"

import React from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { ParsedUrlQueryInput } from 'querystring';

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
  queryParams: ParsedUrlQueryInput;
};

export default function PaginationBar({ currentPage, totalPages, queryParams }: PaginationBarProps) {
  const handleNavigation = (page: number) => {
    return {
      pathname: `/page/${page}`,
      query: queryParams
    };
  };

  const toPrevPage = (page: number) => {
    if (page === 0) {
      return handleNavigation(page);
    } else {
      return handleNavigation(page - 1);
    }
  }

  const toNextPage = (page: number) => {
    if (page === totalPages) {
      return handleNavigation(page);
    } else {
      return handleNavigation(page + 1);
    }
  }

  if (totalPages === 0) {
    return null;
  }

  if (totalPages <= 6) {
    return (
      <Pagination className="text-darkText font-semibold p-7">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious size="lg" href={toPrevPage(currentPage)} />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink className="text-medium" href={handleNavigation(i + 1)}> {i + 1} </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext size="lg" href={toNextPage(currentPage)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }

  return (
    <Pagination className="text-darkText font-semibold p-7">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious size="lg" href={toPrevPage(currentPage)} />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink className="text-medium" href={handleNavigation(1)}> 1 </PaginationLink>
        </PaginationItem>

        {
          currentPage > 2 &&
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        }

        {
          currentPage > 2 &&
          <PaginationItem>
            <PaginationLink className="text-medium" href={handleNavigation(currentPage - 1)}> {currentPage - 1} </PaginationLink>
          </PaginationItem>
        }

        {
          currentPage > 1 && currentPage < totalPages &&
          <PaginationItem>
            <PaginationLink className="text-medium" href={handleNavigation(currentPage)}> {currentPage} </PaginationLink>
          </PaginationItem>
        }

        {
          currentPage < totalPages - 1 &&
          <PaginationItem>
            <PaginationLink className="text-medium" href={handleNavigation(currentPage + 1)}> {currentPage + 1} </PaginationLink>
          </PaginationItem>
        }

        {
          currentPage < totalPages - 1 &&
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        }

        <PaginationItem>
          <PaginationLink className="text-medium" href={handleNavigation(totalPages)}> {totalPages} </PaginationLink>
        </PaginationItem>


        <PaginationItem>
          <PaginationNext size="lg" href={toNextPage(currentPage)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
