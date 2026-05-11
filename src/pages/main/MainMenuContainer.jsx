import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';

import iconFaillog from './main_icon/file_1324039.svg';
import iconProject from './main_icon/routine_4088138.svg';
import iconChronology from './main_icon/graph_1357731.svg';
import iconCommunity from './main_icon/crm_304575.svg';
import iconMypage from './main_icon/feedback_2512312.svg';

const CARDS = [
    {
        label: '페일로그',
        desc: '모두의 기록들을\n한눈에 모아보기',
        path: '/fail-logs',
        icon: iconFaillog,
        iconBg: 'linear-gradient(135deg, #F53102, #FF34C5)',
    },
    {
        label: '프로젝트',
        desc: '새로운 실패 경험을\n구조화하여 기록하세요',
        path: '/projects',
        icon: iconProject,
        iconBg: 'linear-gradient(135deg, #FF34C5, #F5EE03)',
    },
    {
        label: '성장 연대기',
        desc: '자신의 발전 과정을\n확인하기',
        path: '/chronology',
        icon: iconChronology,
        iconBg: 'linear-gradient(135deg, #F5EE03, #00B53F)',
    },
    {
        label: '커뮤니티',
        desc: '다른 사람들과\n소통하기',
        path: '/community',
        icon: iconCommunity,
        iconBg: 'linear-gradient(135deg, #00B53F, #027DF0)',
    },
    {
        label: '마이페이지',
        desc: '내 정보\n관리하기',
        path: '/mypage',
        icon: iconMypage,
        iconBg: 'linear-gradient(135deg, #027DF0, #9333EA)',
    },
];

const MainMenuContainer = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.TitleSection>
                <h1 className="main-menu-title">실패가 성장의 자산이 되는 공간, <S.GradientText>FailLog</S.GradientText></h1>
                <p className="main-menu-subtitle">
                    실패를 기록하고, 나만의 성공 데이터를 만들어 보세요.
                    <br />
                    무엇을 도전했나요?
                </p>
            </S.TitleSection>

            <S.CardWrapper>
                {CARDS.map((card) => (
                    <S.Card
                        key={card.label}
                        onClick={() => navigate(card.path)}
                    >
                        <S.CardIconBox $iconBg={card.iconBg}>
                            <img src={card.icon} alt={card.label} />
                        </S.CardIconBox>
                        <S.CardLabel>{card.label}</S.CardLabel>
                        <S.CardDesc>
                            {card.desc.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i < card.desc.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </S.CardDesc>
                    </S.Card>
                ))}
            </S.CardWrapper>
        </S.Container>
    );
};

/* ──────────────────────────────────────────
   Styled Components
────────────────────────────────────────── */
const S = {};

S.Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 40px;
    min-height: calc(100vh - 64px);
    background: linear-gradient(160deg, #eaf3ff 0%, #ffffff 40%, #f5eeff 100%);
`;

S.TitleSection = styled.div`
    text-align: center;
    margin-bottom: 60px;

    .main-menu-title {
        font-size: ${theme.FONT_SIZE.h1};
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.black};
        margin: 0 0 40px 0;
        line-height: 1.2;
    }

    .main-menu-subtitle {
        font-size: ${theme.FONT_SIZE.h3_2};
        font-weight: ${theme.FONT_WEIGHT.regular};
        color: ${theme.PALETTE.black};
        margin: 0;
        line-height: 1.6;
    }
`;

S.GradientText = styled.span`
    background: linear-gradient(90deg, #027df0, #ab47ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

S.CardWrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;

S.Card = styled.div`
    width: 200px;
    height: 240px;
    background: ${theme.PALETTE.white};
    border: 1.5px solid ${theme.GRAYSCALE[4]};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    cursor: pointer;
    padding: 24px 16px;
    box-sizing: border-box;
    transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);

    &:hover {
        border-color: ${theme.PALETTE.third.main};
        transform: translateY(-10px);
        box-shadow: 0 8px 24px rgba(124, 58, 237, 0.15);
    }
`;

S.CardIconBox = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: ${({ $iconBg }) => $iconBg};

    img {
        width: 50px;
        height: 50px;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }
`;

S.CardLabel = styled.p`
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
    margin: 0;
    text-align: center;
`;

S.CardDesc = styled.p`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
    margin: 0;
    text-align: center;
    line-height: 1.5;
`;

export default MainMenuContainer;
