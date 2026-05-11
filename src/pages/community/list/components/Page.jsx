import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import S, { colorCSS } from '../../style';
import { flexCenterRow } from '../../../../styles/common';

const Page = ({ minPage, maxPage, onPageChange, page }) => {
  const [currentPage, setCurrentPage] = useState(page ?? minPage);

  useEffect(() => {
    if (page !== undefined) setCurrentPage(page);
  }, [page]);

  const groupStart = Math.floor((currentPage - minPage) / 5) * 5 + minPage;

  const pages = [];
  for (let i = groupStart; i <= Math.min(groupStart + 4, maxPage); i++) {
    pages.push(i);
  }

  const canPrev = groupStart > minPage;
  const canNext = groupStart + 5 <= maxPage;

  const changePage = (page) => {
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const handlePrev = () => {
    if (canPrev) changePage(groupStart - 1);
  };

  const handleNext = () => {
    if (canNext) changePage(groupStart + 5);
  };

  return (
    <Wrapper>
      <NavButton onClick={handlePrev} disabled={!canPrev}>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path
            d="M7 1L1 7L7 13"
            stroke={canPrev ? colorCSS["faillog_gray9"] : colorCSS["faillog_gray4"]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </NavButton>

      {pages.map(page => (
        <PageButton
          key={page}
          isActive={page === currentPage}
          onClick={() => {
            if(page !== currentPage)
              changePage(page)
          }}
        >
          <S.Span
            size="h9Regular"
            color={page === currentPage ? "faillog_white" : "faillog-black"}
          >
            {page}
          </S.Span>
        </PageButton>
      ))}

      <NavButton onClick={handleNext} disabled={!canNext}>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path
            d="M1 1L7 7L1 13"
            stroke={canNext ? colorCSS["faillog_gray9"] : colorCSS["faillog_gray4"]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </NavButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NavButton = styled.button`
  ${flexCenterRow}
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  padding: 0;
`;

const PageButton = styled.button`
  ${flexCenterRow}
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: none;
  background-color: ${({ isActive }) => isActive ? colorCSS["faillog_purple"] : 'transparent'};
  cursor: pointer;
  padding: 0;
`;

export default Page;
