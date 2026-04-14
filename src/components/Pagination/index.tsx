import React from 'react';
import { ArrowButton, Dots, PageButton, PaginationWrapper } from './styled';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleChangePage: (page: number) => void;
}

const getVisiblePages = (current: number, total: number) => {
  const pages: (number | string)[] = [];

  if (total <= 4) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  for (let i = 1; i <= 4; i++) pages.push(i);

  // Многоточие и последняя
  if (total > 5) pages.push('...');
  if (total > 4) pages.push(total);

  return pages;
};

export const Pagination = ({ currentPage, totalPages, handleChangePage }: PaginationProps) => {
  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <PaginationWrapper>
      <ArrowButton
        disabled={currentPage === 1}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        &lt;
      </ArrowButton>

      {visiblePages.map((page, index) =>
        page === '...' ? (
          <Dots key={`dots-${index}`}>...</Dots>
        ) : (
          <PageButton
            key={page}
            $active={page === currentPage}
            onClick={() => handleChangePage(page as number)}
          >
            {page}
          </PageButton>
        )
      )}

      <ArrowButton
        disabled={currentPage === totalPages}
        onClick={() => handleChangePage(currentPage + 1)}
      >
        &gt;
      </ArrowButton>
    </PaginationWrapper>
  );
};
