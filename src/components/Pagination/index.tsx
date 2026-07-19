import { ArrowButton, Dots, PageButton, PaginationWrapper } from './styled';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleChangePage: (page: number) => void;
}

const getVisiblePages = (current: number, total: number) => {
  const pages: (number | string)[] = [];
  const delta = 1; // сколько страниц показывать слева и справа от текущей

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  pages.push(1);

  if (left > 2) pages.push('...');

  for (let i = left; i <= right; i++) pages.push(i);

  if (right < total - 1) pages.push('...');

  pages.push(total);

  return pages;
};

export const Pagination = ({ currentPage, totalPages, handleChangePage }: PaginationProps) => {
  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <PaginationWrapper>
      {currentPage > 1 && (
        <ArrowButton onClick={() => handleChangePage(currentPage - 1)}>&lt;</ArrowButton>
      )}

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
        ),
      )}

      {currentPage < totalPages && (
        <ArrowButton onClick={() => handleChangePage(currentPage + 1)}>&gt;</ArrowButton>
      )}
    </PaginationWrapper>
  );
};
