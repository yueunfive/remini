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

  return (
    <PaginationWrapper>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <PageButton
              onClick={() => handlePageClick(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </PageButton>
          </li>
        ))}
      </ul>
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  margin-top: 20px;
  margin-right: 40px;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 30px;

    li {
      button {
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #233e2c;
        color: #79cd96;
        border: none;
        cursor: pointer;

        &:hover {
          background-color: #79cd96;
          color: #233e2c;
        }
      }

      &.active {
        button {
          background-color: #79cd96;
          color: #233e2c;
        }
      }
    }
  }
`;

const PageButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #233e2c;
  color: #79cd96;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #79cd96;
    color: #233e2c;
  }

  &.active {
    background-color: #79cd96;
    color: #233e2c;
  }
`;

export default Pagination;
