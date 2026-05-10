import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';

// Hardcoded mock data (In real app, this would come from an API or props)
const LOG_DATA = {
  id: 1,
  badges: [
    { label: "분석 완료", color: "#22C55E", bg: "#F0FDF4" },
    { label: "공부/취업", color: "#027DF0", bg: "#DBEAFE" },
  ],
  title: "정보처리기사 자격증 필기 도전기",
  date: "2026.03.15",
  author: {
    name: "필기마스터",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=faillog",
  },
  likes: 24,
  vision: "정보처리기사 합격",
  content: `이론서(기본기) 학습을 완전히 생략하고, 최근 5개년 기출문제 달치기(문제-답 암기)에만 집중하기로 했다. 1과목 (소프트웨어설계)과 2과목 (소프트 웨어 개발)은 용어 위주라 암기로 버텼으나, 4과목 (프로그래밍 언어 활용)과 5과목 (정보시스템 구축 관리)의 신유형 문제에서 완전히 무너졌다. 문제를 조금만 꼬아내도 원리를 몰라서 응용이 불가능했다.

정치기는 기출만 돌리면 무조건 합격한다"는 커뮤니티의 수많은 후기 중 내 입맛에 맞는 글만 골라 읽었다. 본인이 비전공자이거나 기초가 부족한 상태임에도 불구하고, 남들과 똑같은 단기 합격 전략이 통할 것이라고 생각했다. 방대한 양의 이론 공부가 주는 압박감을 피하기 위해 '효율성'이라는 핑계로 '암기'라는 쉬운 길을 선택했다.

회사 병시 준비 기간과 시험 기간이 겹치면서 절대적인 학습 시간이 부족했다. 해당 회차부터 신규 유형 및 실무 위주의 주관식 스타일 객관식 문제가 대거 출제되어, 단순 기출 암기법의 유효기간이 끝났다.

이번 실패를 계기로 단순히 지식을 암기하는 것과 원리를 완전히 이해하는 것의 차이를 뼈저리게 느꼈습니다. 다음 도전에서는 기본서 위주로 전체적인 흐름을 먼저 파악한 뒤, 기출문제를 응용 풀이하는 방식으로 학습 전략을 전면 수정할 계획입니다.

부족한 학습 시간을 보완하기 위해 퇴근 후 최소 3시간 이상의 몰입 학습 시간을 고정적으로 확보하고, 주말에는 신규 유형 문제들을 집중적으로 분석하는 시간을 가질 예정입니다. 남들이 말하는 '지름길'보다는 나에게 맞는 '바른 길'을 선택하는 것이 결국 가장 빠른 방법이라는 것을 깨달았습니다.`,
};

const LogDetailContainer = () => {
  const { isMyLog } = useOutletContext();
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
            {badge.label === "분석 완료" && (
              <svg width="17" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 1.25C11.8023 1.25 12.25 1.69772 12.25 2.25C12.25 2.80228 11.8023 3.25 11.25 3.25H3.375C3.34185 3.25 3.30958 3.26269 3.28613 3.28613C3.26269 3.30958 3.25 3.34185 3.25 3.375V14.625C3.25 14.6582 3.26269 14.6904 3.28613 14.7139C3.30958 14.7373 3.34185 14.75 3.375 14.75H14.625C14.6582 14.75 14.6904 14.7373 14.7139 14.7139C14.7373 14.6904 14.75 14.6582 14.75 14.625V7.5C14.75 6.94772 15.1977 6.5 15.75 6.5C16.3023 6.5 16.75 6.94772 16.75 7.5V14.625C16.75 15.1886 16.5264 15.7294 16.1279 16.1279C15.7294 16.5264 15.1886 16.75 14.625 16.75H3.375C2.81141 16.75 2.27058 16.5264 1.87207 16.1279C1.47356 15.7294 1.25 15.1886 1.25 14.625V3.375C1.25 2.81141 1.47356 2.27059 1.87207 1.87207C2.27059 1.47356 2.81141 1.25 3.375 1.25H11.25ZM14.5615 2.04395C14.8825 1.59453 15.5066 1.49051 15.9561 1.81152C16.4055 2.13253 16.5095 2.75664 16.1885 3.20605L10.5635 11.0811C10.4039 11.3045 10.1597 11.4524 9.8877 11.4902C9.61563 11.528 9.33948 11.4528 9.125 11.2812L5.375 8.28125C4.94374 7.93624 4.87374 7.30626 5.21875 6.875C5.56376 6.44374 6.19374 6.37374 6.625 6.71875L9.5498 9.05859L14.5615 2.04395Z" fill="#00B53F"/>
              </svg>
            )}
            {badge.label}
          </S.Badge>
        ))}
      </S.BadgeRow>

      {/* Title & Date */}
      <S.TitleRow>
        <S.LogTitle>{LOG_DATA.title}</S.LogTitle>
        <S.Date>{LOG_DATA.date}</S.Date>
      </S.TitleRow>

      {/* Author & Actions (Like or Edit/Delete) */}
      <S.MetaRow>
        <S.AuthorInfo>
          {/* <S.Avatar src={LOG_DATA.author.avatar} alt="avatar" /> */}
          <S.AuthorName>{LOG_DATA.author.name}</S.AuthorName>
        </S.AuthorInfo>

        {isMyLog ? (
          <S.ActionGroup>
            <S.ActionButton onClick={() => alert('수정 페이지로 이동')}>수정하기</S.ActionButton>
            <S.ActionButton className="delete" onClick={() => alert('정말 삭제하시겠습니까?')}>삭제하기</S.ActionButton>
          </S.ActionGroup>
        ) : (
          <S.LikeButton onClick={handleLike} $liked={liked}>
            <S.HeartIcon $liked={liked}>
              <svg width="18" height="16" viewBox="0 0 25 22" fill={liked ? "#FF4B4B" : "none"} xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.19401 0.777345C3.65026 0.777345 0.777344 3.65026 0.777344 7.19401C0.777344 13.6107 8.36068 19.444 12.444 20.8008C16.5273 19.444 24.1107 13.6107 24.1107 7.19401C24.1107 3.65026 21.2378 0.777345 17.694 0.777345C15.524 0.777345 13.6048 1.85476 12.444 3.50384C11.8522 2.66115 11.0661 1.97342 10.1523 1.49883C9.23846 1.02424 8.22374 0.776763 7.19401 0.777345Z"
                  stroke="#FF4B4B"
                  strokeWidth="1.55556"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </S.HeartIcon>
            <span>{likeCount}</span>
          </S.LikeButton>
        )}
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
  width: 1096px;
  margin: 0 auto;
`;

S.BadgeRow = styled.div`
  display: flex;
  gap: 8px;
`;

S.Badge = styled.span`
  width: 100px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
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
  font-size: ${({ theme }) => theme.FONT_SIZE.h3_2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  line-height: 1.3;
  letter-spacing: -0.5px;
`;

S.Date = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  color: ${({ theme }) => theme.GRAYSCALE[5]};
  flex-shrink: 0;
  margin-left: 20px;
`;

S.MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
  border-bottom: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
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
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;

  span {
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
  }

  &:hover {
    opacity: 0.7;
  }
`;

S.HeartIcon = styled.div`
  width: 18px;
  height: 16px;
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
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  color: ${({ theme }) => theme.GRAYSCALE[9]};
  white-space: nowrap;
`;

S.VisionValue = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.ContentBox = styled.div`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.PALETTE.white};
`;

S.ContentText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  line-height: 2;
  white-space: pre-line;
  letter-spacing: -0.2px;
`;

S.ActionGroup = styled.div`
  display: flex;
  gap: 12px;
`;

S.ActionButton = styled.button`
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[3]};
  border-radius: 12px;
  background: ${({ theme }) => theme.PALETTE.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.GRAYSCALE[1]};
    border-color: ${({ theme }) => theme.GRAYSCALE[4]};
  }

  &.delete {
    color: #FF4B4B;
    border-color: #FF4B4B1A;
    background: #FF4B4B05;

    &:hover {
      background: #FF4B4B10;
    }
  }
`;

export default LogDetailContainer;