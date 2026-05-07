import React, { useState } from 'react';
import styled from 'styled-components';

// Hardcoded mock data (In real app, this would come from an API or props)
const LOG_DATA = {
  id: 1,
  badges: [
    { label: "분석 완료", color: "#22C55E", bg: "#F0FDF4" },
    { label: "공부/취업", color: "#FF34C5", bg: "#FFF0FA" },
  ],
  title: "정보처리기사 자격증 필기 도전기",
  date: "2026-03-15",
  author: {
    name: "필기마스터",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=faillog",
  },
  likes: 24,
  vision: "정보처리기사 합격",
  content: `이론서(기본기) 학습을 완전히 생략하고, 최근 5개년 기출문제 달치기(문제-답 암기)에만 집중하기로 했다. 1과목 (소프트웨어설계)과 2과목 (소프트 웨어 개발)은 용어 위주라 암기로 버텼으나, 4과목 (프로그래밍 언어 활용)과 5과목 (정보시스템 구축 관리)의 신유형 문제에서 완전히 무너졌다. 문제를 조금만 꼬아내도 원리를 몰라서 응용이 불가능했다.

정치기는 기출만 돌리면 무조건 합격한다"는 커뮤니티의 수많은 후기 중 내 입맛에 맞는 글만 골라 읽었다. 본인이 비전공자이거나 기초가 부족한 상태임에도 불구하고, 남들과 똑같은 단기 합격 전략이 통할 것이라고 생각했다. 방대한 양의 이론 공부가 주는 압박감을 피하기 위해 '효율성'이라는 핑계로 '암기'라는 쉬운 길을 선택했다.

회사 병시 준비 기간과 시험 기간이 겹치면서 절대적인 학습 시간이 부족했다. 해당 회차부터 신규 유형 및 실무 위주의 주관식 스타일 객관식 문제가 대거 출제되어, 단순 기출 암기법의 유효기간이 끝났다.`,
};

const LogDetailContainer = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(LOG_DATA.likes);

  const handleLike = () => {
    setLiked(prev => !prev);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <S.Container>
      {/* Badges */}
      <S.BadgeRow>
        {LOG_DATA.badges.map((badge, idx) => (
          <S.Badge key={idx} $color={badge.color} $bg={badge.bg}>
            {badge.label}
          </S.Badge>
        ))}
      </S.BadgeRow>

      {/* Title & Date */}
      <S.TitleRow>
        <S.LogTitle>{LOG_DATA.title}</S.LogTitle>
        <S.Date>{LOG_DATA.date}</S.Date>
      </S.TitleRow>

      {/* Author & Like */}
      <S.MetaRow>
        <S.AuthorInfo>
          <S.Avatar src={LOG_DATA.author.avatar} alt="avatar" />
          <S.AuthorName>{LOG_DATA.author.name}</S.AuthorName>
        </S.AuthorInfo>
        <S.LikeButton onClick={handleLike} $liked={liked}>
          <S.HeartIcon $liked={liked}>
            <svg width="25" height="22" viewBox="0 0 25 22" fill={liked ? "#FF4B4B" : "none"} xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.19401 0.777345C3.65026 0.777345 0.777344 3.65026 0.777344 7.19401C0.777344 13.6107 8.36068 19.444 12.444 20.8008C16.5273 19.444 24.1107 13.6107 24.1107 7.19401C24.1107 3.65026 21.2378 0.777345 17.694 0.777345C15.524 0.777345 13.6048 1.85476 12.444 3.50384C11.8522 2.66115 11.0661 1.97342 10.1523 1.49883C9.23846 1.02424 8.22374 0.776763 7.19401 0.777345Z"
                stroke={liked ? "#FF4B4B" : "#333333"}
                strokeWidth="1.55556"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </S.HeartIcon>
          <span>좋아요 {likeCount}</span>
        </S.LikeButton>
      </S.MetaRow>

      {/* Vision */}
      <S.VisionBox>
        <S.VisionLabel>이루고 싶은 비전</S.VisionLabel>
        <S.VisionValue>{LOG_DATA.vision}</S.VisionValue>
      </S.VisionBox>

      {/* Content */}
      <S.ContentBox>
        <S.ContentText>{LOG_DATA.content}</S.ContentText>
      </S.ContentBox>
    </S.Container>
  );
};

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

S.BadgeRow = styled.div`
  display: flex;
  gap: 8px;
`;

S.Badge = styled.span`
  padding: 5px 12px;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h11};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ $color }) => $color};
  background-color: ${({ $bg }) => $bg};
`;

S.TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

S.LogTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  line-height: 1.3;
  letter-spacing: -0.5px;
`;

S.Date = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  color: ${({ theme }) => theme.GRAYSCALE[5]};
  flex-shrink: 0;
  margin-left: 20px;
`;

S.MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

S.Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
`;

S.AuthorName = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[3]};
  border-radius: 12px;
  background: ${({ theme }) => theme.PALETTE.white};
  cursor: pointer;
  transition: all 0.2s;

  span {
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
  }

  &:hover {
    background: ${({ theme }) => theme.GRAYSCALE[1]};
    border-color: ${({ theme }) => theme.GRAYSCALE[4]};
  }
`;

S.HeartIcon = styled.div`
  width: 25px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.VisionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.GRAYSCALE[1]};
`;

S.VisionLabel = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  color: ${({ theme }) => theme.GRAYSCALE[5]};
  white-space: nowrap;
`;

S.VisionValue = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.ContentBox = styled.div`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.PALETTE.white};
`;

S.ContentText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  line-height: 2;
  white-space: pre-line;
  letter-spacing: -0.2px;
`;

export default LogDetailContainer;