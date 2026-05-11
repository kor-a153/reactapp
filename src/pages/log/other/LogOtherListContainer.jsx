import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import LogOtherHero from './LogOtherHero';
import LogOtherSearch from './LogOtherSearch';

import viewIcon from './otherLog_icon/hugeicons--view.svg';
import heartIcon from './otherLog_icon/ph--heart-light.svg';

import ProfileImg1 from './otherLog_profile/image 347.png';
import ProfileImg2 from './otherLog_profile/IMAGE.png';
import ProfileImg3 from './otherLog_profile/image 309.png';
import ProfileImg4 from './otherLog_profile/image 338.png';
import ProfileImg5 from './otherLog_profile/image 346.png';
import ProfileImg6 from './otherLog_profile/image 347.png';
import ProfileImg7 from './otherLog_profile/image 337.png';
import ProfileImg8 from './otherLog_profile/image 349.png';
import ProfileImg9 from './otherLog_profile/image 337.png';

import Thumb1 from './otherLog_thumbNail/image 277.png';
import Thumb2 from './otherLog_thumbNail/image 340.png';
import Thumb3 from './otherLog_thumbNail/image 343.png';
import Thumb4 from './otherLog_thumbNail/image 352.png';
import Thumb5 from './otherLog_thumbNail/image 342.png';
import Thumb6 from './otherLog_thumbNail/image 351.png';
import Thumb7 from './otherLog_thumbNail/image 350.png';
import Thumb8 from './otherLog_thumbNail/image 348.png';
import Thumb9 from './otherLog_thumbNail/Group 2956.png';

const LOGS = [
    {
        id: 1,
        category: '인간관계',
        categoryVariant: 'pink',
        date: '2026.03.03',
        title: '작은 실수로 멀어져버린 우리 사이',
        vision: '말은 언제나 생각하고 조심해서 말하기',
        nickname: '친구가필요한나',
        profileImg: ProfileImg1,
        views: 45,
        likes: 35,
        thumbnail: Thumb1,
    },
    {
        id: 2,
        category: '공부/취업',
        categoryVariant: 'blue',
        date: '2026.03.03',
        title: '정보처리기사 실기, 필기 붙고 나서 방심했다가 또 떨어졌다.',
        vision: '올해 안에 정보처리기사 최종 합격하기',
        nickname: '필기마스터',
        profileImg: ProfileImg2,
        views: 45,
        likes: 35,
        thumbnail: Thumb2,
    },
    {
        id: 3,
        category: '기타',
        categoryVariant: 'gray',
        date: '2026.03.03',
        title: '유럽 배낭여행 혼자 도전기',
        vision: '유럽에서 혼자 1년 살기 성공하기',
        nickname: '유럽탐합가',
        profileImg: ProfileImg3,
        views: 45,
        likes: 35,
        thumbnail: Thumb3,
    },
    {
        id: 4,
        category: '사업/창업',
        categoryVariant: 'purple',
        date: '2026.03.03',
        title: '카페 창업 준비하다가 돈이 먼저 바닥났다.',
        vision: '단골손님이 생기는 내 개인카페 하나 차리기',
        nickname: '하워드슐츠',
        profileImg: ProfileImg4,
        views: 45,
        likes: 35,
        thumbnail: Thumb4,
    },
    {
        id: 5,
        category: '공부/취업',
        categoryVariant: 'blue',
        date: '2026.03.03',
        title: '파이썬 독학하다가 크롤링에서 막혔다.',
        vision: '비전공자지만 직접 뭔가 만들어보기',
        nickname: '비전공의희망',
        profileImg: ProfileImg5,
        views: 45,
        likes: 35,
        thumbnail: Thumb5,
    },
    {
        id: 6,
        category: '인간관계',
        categoryVariant: 'pink',
        date: '2026.03.03',
        title: '모임 나가면 구석에만 있다가 오는 나',
        vision: '사람들과 대화를 편하게 할 수 있는 내가 되기',
        nickname: '대화가필요해',
        profileImg: ProfileImg6,
        views: 45,
        likes: 35,
        thumbnail: Thumb6,
    },
    {
        id: 7,
        category: '건강/루틴',
        categoryVariant: 'green',
        date: '2026.03.03',
        title: '헬스장 3개월 끊었는데 열 번 밖에 안갔다.',
        vision: '꾸준히 운동해서 미래에도 건강한 몸 유지하기',
        nickname: '바디짱짱맨',
        profileImg: ProfileImg7,
        views: 45,
        likes: 35,
        thumbnail: Thumb7,
    },
    {
        id: 8,
        category: '공부/취업',
        categoryVariant: 'blue',
        date: '2026.03.03',
        title: '네이버 백엔드 개발자 취업 도전',
        vision: '국내 대형 IT 기업 개발자로 입사하기',
        nickname: '백엔드로취업하기',
        profileImg: ProfileImg8,
        views: 45,
        likes: 35,
        thumbnail: Thumb8,
    },
    {
        id: 9,
        category: '건강/루틴',
        categoryVariant: 'green',
        date: '2026.03.03',
        title: '금연 30일, 금단현상 극복하기',
        vision: '금연 성공해서 폐 건강 회복하기',
        nickname: '담배에서살아남기',
        profileImg: ProfileImg9,
        views: 45,
        likes: 35,
        thumbnail: Thumb9,
    },
];

const CATEGORY_STYLE = {
    pink:   { bg: theme.PALETTE.fourth.light, color: theme.PALETTE.fourth.main },
    blue:   { bg: theme.PALETTE.primary.light, color: theme.PALETTE.primary.main },
    green:  { bg: theme.PALETTE.secondary.light, color: theme.PALETTE.secondary.main },
    purple: { bg: theme.PALETTE.third.light, color: theme.PALETTE.third.main },
    gray:   { bg: theme.GRAYSCALE[2], color: theme.GRAYSCALE[10] },
};

const LogOtherListContainer = () => {
    return (
        <div>
            <LogOtherHero />
            <LogOtherSearch />
            <S.ListWrapper>
                <S.CardGrid>
                    {LOGS.map((log) => (
                        <Link to={`/logs/result/${log.id}/detail`} key={log.id} style={{ textDecoration: 'none' }}>
                            <S.Card>
                                <S.CardBody>
                                    <S.CardTop>
                                        <S.Category $variant={log.categoryVariant}>
                                            {log.category}
                                        </S.Category>
                                        <S.Date>{log.date}</S.Date>
                                    </S.CardTop>

                                    <S.Title>{log.title}</S.Title>
                                    <S.Vision>{log.vision}</S.Vision>

                                    <S.CardBottom>
                                        <S.Profile>
                                            <S.AvatarWrap>
                                                <S.Avatar src={log.profileImg} alt={log.nickname} />
                                            </S.AvatarWrap>
                                            <S.Nickname>{log.nickname}</S.Nickname>
                                        </S.Profile>
                                        <S.Stats>
                                            <S.Stat>
                                                <img src={viewIcon} alt="views" width="16" height="16" />
                                                {log.views}
                                            </S.Stat>
                                            <S.Stat>
                                                <img src={heartIcon} alt="likes" width="16" height="16" />
                                                {log.likes}
                                            </S.Stat>
                                        </S.Stats>
                                    </S.CardBottom>
                                </S.CardBody>

                                <S.Thumbnail src={log.thumbnail} alt={log.title} />
                            </S.Card>
                        </Link>
                    ))}
                </S.CardGrid>
            </S.ListWrapper>
        </div>
    );
};

/* ──────────────────────────────────────────
   Styled Components
────────────────────────────────────────── */
const S = {};

S.ListWrapper = styled.div`
    width: 100%;
    background-color: #f8f9fa;
    padding: 0 0 100px;
`;

S.CardGrid = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`;

S.Card = styled.div`
    width: 100%;
    min-width: unset;
    max-width: unset;
    height: 406px;
    border-radius: 20px;
    background: ${theme.PALETTE.white};
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s, border 0.2s;
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        transform: translateY(-8px);
        border: 2px solid ${theme.PALETTE.third.main};
        box-shadow: 0 16px 40px rgba(171, 71, 255, 0.15);
    }
`;

S.CardBody = styled.div`
    flex: 1;
    padding: 24px 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 0;
`;

S.CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`;

S.Category = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 68px;
    height: 28px;
    border-radius: 8px;
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.bold};
    background-color: ${({ $variant }) => CATEGORY_STYLE[$variant]?.bg || theme.GRAYSCALE[2]};
    color: ${({ $variant }) => CATEGORY_STYLE[$variant]?.color || theme.GRAYSCALE[10]};
`;

S.Date = styled.span`
    font-size: ${theme.FONT_SIZE.h10};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[9]};
`;

S.Title = styled.p`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
    margin: 0 0 20px 0;
    line-height: 1.4;
    word-break: keep-all;
    overflow-wrap: break-word;
`;

S.Vision = styled.p`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
    margin: 0;
    line-height: 1.5;
    flex: 1;
`;

S.CardBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`;

S.Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

S.AvatarWrap = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, ${theme.PALETTE.primary.main}, ${theme.PALETTE.third.main});
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

S.Avatar = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
`;

S.Nickname = styled.span`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
`;

S.Stats = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

S.Stat = styled.span`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
`;

S.Thumbnail = styled.img`
    width: 100%;
    height: 162px;
    object-fit: cover;
    flex-shrink: 0;
`;

export default LogOtherListContainer;