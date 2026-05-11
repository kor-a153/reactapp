import React from 'react';
import styled from 'styled-components';
import { flexCenterRow } from '../../../../styles/common';
import S from '../../style';
import file from '../../resources/file.svg';

const PostListEmptyContainer = ({ search }) => {
  search = "sss"
  return (
    <Wrapper>
      <Inner>
        <EmptyImg src={file} alt="empty" width={200} height={124} />
        <S.Span size="h10Bold" color="faillog_purple">SEARCH EMPTY</S.Span>
        <S.Span size="h4Bold" color="faillog-black">검색 결과가 없어요</S.Span>
        <DescWrap>
          <S.Span size="h8Regular" color="faillog_gray9">
            <S.Span size="h8Regular" color="faillog_purple">"{search}"</S.Span>
            {' '}와 일치하는 게시글을 찾지 못했어요.
          </S.Span>
          <S.Span size="h8Regular" color="faillog_gray9">
            다른 검색어를 입력하거나 카테고리를 변경해보세요.
          </S.Span>
        </DescWrap>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 984px;
  height: 1434px;
  ${flexCenterRow}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
`;

const EmptyImg = styled.img`
  margin-bottom: 39px;
`;

const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`;

export default PostListEmptyContainer;
