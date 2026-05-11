import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import GlobeIcon from './otherLog_icon/internet_2282299.svg';
import ArrowIcon from './otherLog_icon/bitcoin-icons--arrow-up-filled.svg';

const LogOtherHero = () => {
    return (
        <S.Wrapper>
            <S.Inner>
                <S.TitleWrap>
                    <S.GlobeIcon src={GlobeIcon} alt="globe" />
                    <h1 className="hero-title">다른 사람의 경험을 만나보세요.</h1>
                </S.TitleWrap>
                <S.StartBtn>
                    <span className="btn-text">시작하기</span>
                    <S.ArrowIcon src={ArrowIcon} alt="arrow" />
                </S.StartBtn>
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
    background-color: #f8f9fa;
    padding: 100px 0 0 0;
`;

S.Inner = styled.div`
    max-width: 1320px;  /* 1200px → 1320px */
    margin: 0 auto;
    padding: 0 20px;    /* 0 60px → 0 20px */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .hero-title {
        font-size: ${theme.FONT_SIZE.h2};
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: #1a1a1a;
        margin: 0;
        line-height: 1.2;
        letter-spacing: -1px;
    }

    .btn-text {
        font-size: ${theme.FONT_SIZE.h5};
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.white};
        line-height: 1;
    }
`;

S.TitleWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

S.GlobeIcon = styled.img`
    flex-shrink: 0;
    width: 52px;
    height: 52px;
`;

S.StartBtn = styled.button`
    width: 180px;
    height: 60px;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    background-size: 200% 100%;
    background-position: 0% 50%;
    transition: background-position 0.4s ease, transform 0.2s ease;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.1);
    color: ${theme.PALETTE.white};
    border: none;

    &:hover {
        background-position: 100% 50%;
        transform: translateY(-5px);
    }
`;

S.ArrowIcon = styled.img`
    width: 28px;
    height: 28px;
    transform: rotate(90deg);
    filter: brightness(0) invert(1);
`;

export default LogOtherHero;