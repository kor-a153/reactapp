import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import TrumpetIcon from './otherLog_icon/1ee6415a019300001 1.png';
import FeroIcon from './otherLog_icon/chatbot_10541415.svg';
import ArrowIcon from './otherLog_icon/uiw--right.svg';
import ProfileImg1 from './otherLog_profile/IMAGE.png';
import ProfileImg2 from './otherLog_profile/image 338.png';
import ProfileImg3 from './otherLog_profile/image 309.png';
import ProfileImg4 from './otherLog_profile/image 337.png';

const cards = [
    {
        nickname: '필기마스터',
        profileImg: ProfileImg1,
        failText: '정보처리기사 실기도 필기처럼 기출문제 위주로 했더니 떨어져버렸다.',
        solution: '실기도 문제가 중요하지만, 전체 개념과 코드를 읽고 이해할 수 있는 능력이 필요합니다.',
    },
    {
        nickname: '하워드슐츠',
        profileImg: ProfileImg2,
        failText: '카페 차리고 싶어서 창업 준비를 1년 했는데, 돈이 먼저 바닥났다.',
        solution: '완벽한 준비보다 작은 시작이 먼저예요. 지금 할 수 있는 최소한의 첫 발걸음을 찾아보세요.',
    },
    {
        nickname: '조용한관찰자',
        profileImg: ProfileImg3,
        failText: '오랜만에 만나거나 다른 모임에 나가면 늘 구석에만 있다가 오게 되버린다.',
        solution: '나에게 말을 걸어주는 상황을 기다리기보다, 작은 질문 하나가 대화의 문을 열어줄 수 있을 거에요!',
    },
    {
        nickname: '비전공의희망',
        profileImg: ProfileImg4,
        failText: '파이썬 독학하다가 크롤링에서 배우지 않은 맥락이 있어서 막혀버렸어요.',
        solution: '강의에서 보이던 코드가 막혔을 때, 공식 문서와 에러 메시지를 읽는 습관이 큰 도움이 돼요.',
    },
];

const LogPopularSolution = () => {
    const [index, setIndex] = useState(0);
    const CARD_WIDTH = 280 + 20;
    const VISIBLE = 3;

    const handlePrev = () => setIndex(i => Math.max(0, i - 1));
    const handleNext = () => setIndex(i => Math.min(cards.length - VISIBLE, i + 1));

    return (
        <S.Wrapper>
            <S.Inner>

                <S.TitleWrap>
                    <S.TrumpetIcon src={TrumpetIcon} alt="trumpet" />
                    <h2 className="solutions-title">인기있는 솔루션</h2>
                </S.TitleWrap>

                <S.Viewport>
                    <S.Track style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}>
                        {cards.map((card, i) => (
                            <S.Card key={i}>

                                {/* 프로필 */}
                                <S.Profile>
                                    <S.ProfileCircle>
                                        <S.ProfileImg src={card.profileImg} alt={card.nickname} />
                                    </S.ProfileCircle>
                                    <S.Nickname>{card.nickname}</S.Nickname>
                                </S.Profile>

                                {/* 실패 텍스트 박스 */}
                                <S.FailTextBox>
                                    <S.FailText>{card.failText}</S.FailText>
                                </S.FailTextBox>

                                {/* 페로 라벨 */}
                                <S.SolLabel>
                                    <S.SolLabelText>페로</S.SolLabelText>
                                    <S.SolIconWrap>
                                        <S.SolIcon src={FeroIcon} alt="fero" />
                                    </S.SolIconWrap>
                                </S.SolLabel>

                                {/* 솔루션 요약 박스 */}
                                <S.SolSummaryBox>
                                    <S.SolSummary>{card.solution}</S.SolSummary>
                                </S.SolSummaryBox>

                            </S.Card>
                        ))}
                    </S.Track>
                </S.Viewport>

                <S.NavButtons>
                    <S.NavBtn onClick={handlePrev}>
                        <S.NavIconLeft src={ArrowIcon} alt="prev" />
                    </S.NavBtn>
                    <S.NavBtn onClick={handleNext}>
                        <S.NavIcon src={ArrowIcon} alt="next" />
                    </S.NavBtn>
                </S.NavButtons>

            </S.Inner>
        </S.Wrapper>
    );
};

/* ──────────────────────────────────────────
   Styled Components
────────────────────────────────────────── */
const S = {};

S.Wrapper = styled.section`
    width: 100%;
    background-color: #f1f0f6;
    padding: 60px 0 80px;
`;

S.Inner = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;

    .solutions-title {
        font-size: ${theme.FONT_SIZE.h3};
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.black};
        margin: 0;
    }
`;

S.TitleWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 48px;
`;

S.TrumpetIcon = styled.img`
    width: 52px;
    height: 52px;
    flex-shrink: 0;
`;

S.Viewport = styled.div`
    overflow: hidden;
`;

S.Track = styled.div`
    display: flex;
    gap: 20px;
    transition: transform 0.4s ease;
    align-items: flex-start;
`;

S.Card = styled.div`
    min-width: 280px;
    max-width: 280px;
    border-radius: 20px;
    background: ${theme.PALETTE.white};
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
`;

S.Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

S.ProfileCircle = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

S.ProfileImg = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
`;

S.Nickname = styled.span`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
`;

S.FailTextBox = styled.div`
    background: #f1f0f6;
    border-radius: 15px;
    min-height: 88px;
    padding: 14px 16px;
    width: 100%;
`;

S.FailText = styled.p`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: #7c6faa;
    line-height: 1.6;
    margin: 0;
`;

S.SolLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`;

S.SolLabelText = styled.span`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
`;

S.SolIconWrap = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.SolIcon = styled.img`
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
`;

S.SolSummaryBox = styled.div`
    background: #eeeaff;
    border-radius: 15px;
    padding: 14px 16px;
    width: 100%;
`;

S.SolSummary = styled.p`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: #4419ff;
    line-height: 1.6;
    margin: 0;
`;

S.NavButtons = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 36px;
`;

S.NavBtn = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[4]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
        background: #ede9f8;
    }
`;

S.NavIcon = styled.img`
    width: 24px;
    color: ${theme.PALETTE.black};
`;

S.NavIconLeft = styled.img`
    width: 24px;
    color: ${theme.PALETTE.black};
    transform: rotate(180deg);
`;

export default LogPopularSolution;
