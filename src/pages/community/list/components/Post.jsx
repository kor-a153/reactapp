import React from 'react';
import styled from 'styled-components';
import { h11Bold, h8Extrabold, h9Regular, h10Regular, h11Regular, flexCenterRow } from '../../../../styles/common';
import S, { colorCSS } from '../../style';

import eye from '../../resources/eye.svg'
import heart from '../../resources/like.svg'
import comment from '../../resources/post.svg'
import likeFill from '../../resources/like-fill2.svg'
import getCategoryInfo from '../../GetCategoryInfo';

const Wrapper = styled.div`
  width: 984px;
  padding: 27px
`;

const Card = styled.div`
  display: flex;
  gap: 27px;
  align-items: flex-start;
`;

const Thumbnail = styled.img`
  width: 324px;
  height: 184px;
  /* object-fit: cover; */
  border-radius: 15px 0px 15px 0px

  /* flex-shrink: 0; */
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
  /* height: 184px; */
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryBadge = styled.div`
  /* ${h11Bold}
  color: #ffffff; */
  background-color: ${({bgcolor}) => colorCSS[bgcolor]};
  width: 52px;
  height: 20px;
  padding-top: 1px;
  ${flexCenterRow}
  border-radius: 15px;
`;

// 삭제예정
const DateText = styled.span`
  ${h10Regular}
  color: ${({ theme }) => theme.GRAYSCALE?.[8] || '#999999'};
`;

//삭제예정
const Title = styled.h2`
  ${h8Extrabold}
  margin: 0;
  color: ${({ theme }) => theme.PALETTE?.black || '#333333'};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

//삭제예정
const Content = styled.p`
  ${h9Regular}
  margin: 0;
  flex: 1;
  color: ${({ theme }) => theme.GRAYSCALE?.[10] || '#555555'};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthorWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const AuthorImg = styled.img`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  /* object-fit: cover; */
`;

// 삭제예정
const AuthorName = styled.span`
  ${h11Regular}
  color: ${({ theme }) => theme.PALETTE?.black || '#333333'};
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Divider = styled.hr`
  /* padding-bottom: 27px; */
  margin: 0px;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.GRAYSCALE?.[2] || '#E6E6E6'};
`;

const Post = ({
  category,
  title,
  content,
  date,
  thumbnail,
  profile,
  author,
  views,
  likes,
  comments,
  isHrHidden
}) => {

  const {name, textColor ,bgColor} = getCategoryInfo(category)

  return (
    <div>
      <Wrapper>
        <Card>
          <Thumbnail src={thumbnail} alt={title} />
          <Info>
            <TopRow>
              <CategoryBadge bgcolor={bgColor}>
                <S.Span size={"h11Bold"} color={textColor}>
                  {name}
                </S.Span> 
              </CategoryBadge>
              <S.Span size={"h10Regular"} color={"faillog_gray9"}>{date}</S.Span>
            </TopRow>
            <S.Span2 size={"h8Extrabold"} color={"faillog-black"} lineclamp={1}>{title}</S.Span2>
            <S.Span2 size={"h9Regular"} color={"faillog_black"}>{content}</S.Span2>
            <BottomRow>
              <AuthorWrap>
                <AuthorImg src={profile} alt={author} />
                <AuthorName>{author}</AuthorName>
              </AuthorWrap>
              <Stats>
                <StatItem>
                  <img src={eye} width={12} height={8}></img>
                  <S.Span size="h10Regular" color="faillog-black" isvisible={true}>{views}</S.Span>
                </StatItem>
                <StatItem>
                  <img src={heart} width={14} height={14}></img>
                  <S.Span size="h10Regular" color="faillog-black" isvisible={true}>{likes}</S.Span>
                </StatItem>
                <StatItem>
                  <img src={comment} width={14} height={14}></img>
                  <S.Span size="h10Regular" color="faillog-black" isvisible={true}>{comments}</S.Span>
                </StatItem>
              </Stats>
            </BottomRow>
          </Info>
        </Card>
      </Wrapper>
      { isHrHidden || <Divider />}
    </div>
  );
};



export default Post;
