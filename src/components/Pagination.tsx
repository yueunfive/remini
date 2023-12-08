import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    onPageChange(currentPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, onPageChange]);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  // 이전 페이지로 이동하는 함수
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // 페이지 버튼 5개 단위로 분리
  const firstPage = 1;
  const lastPage = 5;
  const maxPagesToShow = 5;

  let pagesToShow = pageNumbers.slice(firstPage - 1, lastPage);

  if (currentPage > maxPagesToShow - 1) {
    const firstPageToShow =
      Math.floor((currentPage - 1) / maxPagesToShow) * maxPagesToShow + 1;
    const lastPageToShow = Math.min(
      firstPageToShow + maxPagesToShow,
      totalPages + 1
    );
    pagesToShow = pageNumbers.slice(firstPageToShow - 1, lastPageToShow - 1);
  }

  return (
    <PaginationWrapper>
      <PageButton onClick={goToPrevPage}>&lt;</PageButton>
      {pagesToShow.map((number) => (
        <PageButton
          key={number}
          onClick={() => handlePageClick(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </PageButton>
      ))}
      <PageButton onClick={goToNextPage}>&gt;</PageButton>
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  border-radius: 50px;
  background-color: #121212;
  border: none;
  cursor: pointer;

  color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    background-color: #233e2c;
    color: #79cd96;
  }

  &.active {
    color: #79cd96;
  }
`;

export default Pagination;
