import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';
import chatbotIcon from './intro_icon/chatbot_10541415.svg';
import repeatIcon from './intro_icon/repeat_238888.svg';
import washTimeIcon from './intro_icon/wash-time_103937.svg';
import arrowIcon from './intro_icon/arrow_90418.svg';
import fileIcon from './intro_icon/file_1324039.svg';
import barChartIcon from './intro_icon/bar-chart_347779.svg';
import teamworkIcon from './intro_icon/teamwork_484616.svg';
import crossOutIcon from './intro_icon/cross-out_2586312.svg';
import pieChartIcon from './intro_icon/pie-chart_744334.svg';
import shareIcon from './intro_icon/share_683175.svg';
import registrationIcon from './intro_icon/registration-mark_1203943.svg';
import heartIcon from './intro_icon/ph--heart-light.svg';
import viewIcon from './intro_icon/hugeicons--view.svg';
import avatar1 from './intro_profile/image 337.png';
import avatar2 from './intro_profile/image 309.png';
import avatar3 from './intro_profile/IMAGE.png';

/* ──────────────────────────────────────────
   섹션 2 — 오른쪽 카드 3개
────────────────────────────────────────── */
const StatCard = ({ icon, $variant, stat, label }) => (
    <S.StatCard>
        <S.StatCardIcon $variant={$variant}>
            <img src={icon} alt={label} />
        </S.StatCardIcon>
        <S.StatCardStat $variant={$variant}>{stat}</S.StatCardStat>
        <S.StatCardLabel>{label}</S.StatCardLabel>
    </S.StatCard>
);

const STAT_CARDS = [
    {
        icon: repeatIcon,
        $variant: 'red',
        stat: '73%',
        label: '같은 유형의 실패를 2회 이상 경험',
    },
    {
        icon: washTimeIcon,
        $variant: 'blue',
        stat: '2주',
        label: '실패의 맥락을 기억하는 평균 시간',
    },
    {
        icon: arrowIcon,
        $variant: 'green',
        stat: '6배',
        label: '기록된 실패를 분석할 때 개선율',
    },
];

/* ──────────────────────────────────────────
   섹션 3 — 3가지 방법 카드
────────────────────────────────────────── */
const MethodCard = ({ icon, $variant, title, desc }) => (
    <S.MethodCard>
        <S.MethodCardIcon $variant={$variant}>
            <img src={icon} alt={title} />
        </S.MethodCardIcon>
        <S.MethodCardTitle>{title}</S.MethodCardTitle>
        <S.MethodCardDesc>{desc}</S.MethodCardDesc>
    </S.MethodCard>
);

const METHOD_CARDS = [
    {
        icon: fileIcon,
        $variant: 'left',
        title: '구조화된 실패 기록',
        desc: '감정이 아닌 선택 근거, 무시한 신호 등 당시 제약을 체계적으로 기록합니다.',
    },
    {
        icon: barChartIcon,
        $variant: 'center',
        title: '패턴 분석 대시보드',
        desc: '개인의 실패 패턴을 시각화하고, 반복되는 선택의 오류를 객관적으로 파악합니다.',
    },
    {
        icon: teamworkIcon,
        $variant: 'right',
        title: '타인의 실패로부터 학습',
        desc: '다양한 분야의 실패 사례를 읽고, 공감, 지식, 경험을 공유하세요.',
    },
];

/* ──────────────────────────────────────────
   섹션 4 — 타임라인 Step 카드
────────────────────────────────────────── */
const StepCard = ({ step, icon, name, desc, tags, side }) => {
    const isLeft = side === 'left';

    const cardTop = isLeft ? (
        <S.StepCardTop $side="left">
            <S.StepLabel $step={step}>Step {step}</S.StepLabel>
            <S.StepCardIcon $step={step}>
                <img src={icon} alt={`step${step}`} />
            </S.StepCardIcon>
        </S.StepCardTop>
    ) : (
        <S.StepCardTop $side="right">
            <S.StepCardIcon $step={step}>
                <img src={icon} alt={`step${step}`} />
            </S.StepCardIcon>
            <S.StepLabel $step={step}>Step {step}</S.StepLabel>
        </S.StepCardTop>
    );

    const card = (
        <S.StepCard>
            {cardTop}
            <S.StepCardName $side={side}>{name}</S.StepCardName>
            <S.StepCardDesc $side={side}>{desc}</S.StepCardDesc>
            <S.StepTags $side={side}>
                {tags.map((tag) => (
                    <S.StepTag key={tag} $step={step}>
                        {tag}
                    </S.StepTag>
                ))}
            </S.StepTags>
        </S.StepCard>
    );

    const dot = <S.StepDot $step={step}>{step}</S.StepDot>;

    return (
        <S.StepRow $side={side}>
            {isLeft ? (
                <>
                    {card}
                    {dot}
                </>
            ) : (
                <>
                    {dot}
                    {card}
                </>
            )}
        </S.StepRow>
    );
};

const STEP_CARDS = [
    {
        step: 1,
        icon: crossOutIcon,
        name: '기록',
        desc: '실패를 구조화된 템플릿으로 기록하세요.',
        tags: ['상황', '선택', '결과'],
        side: 'left',
    },
    {
        step: 2,
        icon: pieChartIcon,
        name: '분석',
        desc: '분석 리포트를 확인하세요.',
        tags: ['패턴', '키워드'],
        side: 'right',
    },
    {
        step: 3,
        icon: shareIcon,
        name: '공유',
        desc: '로그와 경험을 공유해보세요.',
        tags: ['커뮤니티', '다양한 로그'],
        side: 'left',
    },
    {
        step: 4,
        icon: registrationIcon,
        name: '개선',
        desc: '다음 도전에 인사이트를 적용하세요.',
        tags: ['액션플랜', '리마인드'],
        side: 'right',
    },
];

/* ──────────────────────────────────────────
   섹션 5 — 로그 카드
────────────────────────────────────────── */
const LogCard = ({ $variant, category, title, desc, nickname, avatar, views, likes }) => (
    <S.LogCard>
        <S.LogCategory $variant={$variant}>{category}</S.LogCategory>
        <S.LogCardTitle>{title}</S.LogCardTitle>
        <S.LogCardDesc>{desc}</S.LogCardDesc>
        <S.LogCardBottom>
            <S.LogProfile>
                <S.LogAvatarWrap>
                    <S.LogAvatar src={avatar} alt={nickname} />
                </S.LogAvatarWrap>
                <S.LogNickname>{nickname}</S.LogNickname>
            </S.LogProfile>
            <S.LogStats>
                <S.LogStat>
                    <img src={viewIcon} alt="views" width="16" height="16" />
                    {views}
                </S.LogStat>
                <S.LogStat>
                    <img src={heartIcon} alt="likes" width="16" height="16" />
                    {likes}
                </S.LogStat>
            </S.LogStats>
        </S.LogCardBottom>
    </S.LogCard>
);

const LOG_CARDS = [
    {
        $variant: 'blue',
        category: '공부/취업',
        title: '면접에서 반복된 질문에 답변을 못한 이유',
        desc: '면접에서 반복된 질문에 답변을 못한 이유',
        nickname: '취준탈출넘버원',
        avatar: avatar1,
        views: 45,
        likes: 35,
    },
    {
        $variant: 'orange',
        category: '사업/창업',
        title: '첫 사업 아이템을 3번 바꾼 이유',
        desc: '시장 조사 없이 시작했다가 피벗을 반복한 이야기',
        nickname: '창업도전왕',
        avatar: avatar2,
        views: 45,
        likes: 35,
    },
    {
        $variant: 'pink',
        category: '인간관계',
        title: '말을 언제나 생각하고 조심히 말하기',
        desc: '한 순간의 실수로 멀어져버린 우리 사이',
        nickname: '말조심연습',
        avatar: avatar3,
        views: 45,
        likes: 35,
    },
];

/* ──────────────────────────────────────────
   메인 컨테이너
────────────────────────────────────────── */
const IntroContainer = () => {
    const navigate = useNavigate();

    return (
        <S.Wrap>
            {/* 1번째 섹터 */}
            <S.Section1Wrapper>
                <div className="intro-section1">
                    <div className="intro-section1-text">
                        <h1 className="intro-section1-heading">
                            지나간 실패들이 모여
                        </h1>
                        <h1 className="intro-section1-heading">
                            <S.ColorGradient>성공의 한 패</S.ColorGradient>
                            가 됩니다.
                        </h1>
                        <p className="intro-section1-sub">실패를 외면하지 않고 기록할 때,</p>
                        <p className="intro-section1-sub">당신의 강력한 성장 데이터가 됩니다.</p>
                        <S.StartButton onClick={() => navigate('/join')}>
                            시작하기
                        </S.StartButton>
                    </div>

                    <S.Section1Scroll>
                        <S.ScrollMouse>
                            <S.ScrollDot />
                        </S.ScrollMouse>
                        <div className="intro-section1-scroll-arrows">
                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                                <path d="M2 2L10 10L18 2" stroke="#cccccc" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                                <path d="M2 2L10 10L18 2" stroke="#cccccc" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.45" />
                            </svg>
                        </div>
                    </S.Section1Scroll>
                </div>
            </S.Section1Wrapper>

            {/* 2번째 섹터 */}
            <S.Section2Wrapper>
                <div className="intro-section2">
                    <S.Section2Left>
                        <S.Section2BadgeWrap>
                            <S.Section2Badge>실패 기록</S.Section2Badge>
                        </S.Section2BadgeWrap>
                        <h2 className="intro-section2-title">
                            같은 실수를 반복하는 당신,
                            <br />
                            맥락을 잊고 있지 않나요?
                        </h2>
                        <p className="intro-section2-sub">
                            사람들은 실패 후 후회하고 반성하지만, 시간이 지나면
                            <br />
                            판단 근거, 제약 사항, 무시했던 신호를 잊습니다.
                            <br />
                            결국 같은 패턴의 실수를 반복하게 됩니다.
                        </p>
                        <p className="intro-section2-sub intro-section2-sub-mt">
                            FailLog는 실패의 맥락을 구조화하여
                            <br />
                            기록하고, 패턴을 시각화하여 객관적인
                            <br />
                            자기 인식과 개선을 도와줍니다.
                        </p>
                    </S.Section2Left>

                    <S.Section2Right>
                        {STAT_CARDS.map((card) => (
                            <StatCard key={card.stat} {...card} />
                        ))}
                    </S.Section2Right>
                </div>
            </S.Section2Wrapper>

            {/* 3번째 섹터 */}
            <S.Section3Wrapper>
                <div className="intro-section3">
                    <div className="intro-section3-header">
                        <h2 className="intro-section3-title">
                            실패를 데이터로,
                            <br />
                            성장으로 연결하는 <S.ColorGradient>3가지 방법</S.ColorGradient>
                        </h2>
                    </div>

                    <S.Section3Cards>
                        {METHOD_CARDS.map((card) => (
                            <MethodCard key={card.title} {...card} />
                        ))}
                    </S.Section3Cards>
                </div>
            </S.Section3Wrapper>

            {/* 4번째 섹터 */}
            <S.Section4Wrapper>
                <div className="intro-section4">
                    <div className="intro-section4-header">
                        <S.Section4BadgeWrap>
                            <S.Section4Badge>사용 방법</S.Section4Badge>
                        </S.Section4BadgeWrap>
                        <h2 className="intro-section4-title">
                            4단계로 완성하는 <S.ColorGradient>실패분석</S.ColorGradient>
                        </h2>
                    </div>

                    <S.StepByStep>
                        <S.TimelineLine />
                        {STEP_CARDS.map((card) => (
                            <StepCard key={card.step} {...card} />
                        ))}
                    </S.StepByStep>
                </div>
            </S.Section4Wrapper>

            {/* 5번째 섹터 */}
            <S.Section5Wrapper>
                <div className="intro-section5">
                    <div className="intro-section5-header">
                        <h2 className="intro-section5-title">
                            혼자가 아닌,
                            <br />
                            <S.ColorGradient>함께 만드는 성장</S.ColorGradient>
                        </h2>
                        <p className="intro-section5-sub">다양한 분야의 실패 사례를 경험하세요.</p>
                    </div>

                    <S.Section5Badges>
                        <S.Section5Badge>
                            <span>다양한 로그</span>
                        </S.Section5Badge>
                        <S.Section5Badge>
                            <span>커뮤니티</span>
                        </S.Section5Badge>
                    </S.Section5Badges>

                    <S.Section5Cards>
                        {LOG_CARDS.map((card) => (
                            <LogCard key={card.category} {...card} />
                        ))}
                    </S.Section5Cards>

                    <S.StartButton onClick={() => navigate('/join')}>
                        시작하기
                    </S.StartButton>
                </div>
            </S.Section5Wrapper>

            {/* 챗봇 버튼 */}
            <S.ChatbotFab aria-label="챗봇 열기">
                <S.ChatbotFabIcon src={chatbotIcon} alt="chatbot" />
            </S.ChatbotFab>
        </S.Wrap>
    );
};

/* ──────────────────────────────────────────
   Styled Components
────────────────────────────────────────── */
const S = {};

const scrollDotAnim = keyframes`
    0%   { opacity: 1; transform: translateY(0); }
    50%  { opacity: 0.4; transform: translateY(6px); }
    100% { opacity: 1; transform: translateY(0); }
`;

const gradientText = `
    background: linear-gradient(90deg, #027df0, #ab47ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const STEP_COLOR = { 1: '#027df0', 2: '#ab47ff', 3: '#ff34c5', 4: '#f53102' };
const STEP_BG    = { 1: '#dbeafe', 2: '#ede9fe', 3: '#fce7f3', 4: '#ffe4e6' };
const CATEGORY_STYLES = {
    blue:   { bg: '#dbeafe', color: '#027df0' },
    orange: { bg: '#ede9fe', color: '#ab47ff' },
    pink:   { bg: '#ffe4e6', color: '#f53102' },
};

// ── 전체 래퍼
S.Wrap = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.PALETTE.white};
`;

S.ColorGradient = styled.span`
    ${gradientText}
`;

// ── SECTION 1
S.Section1Wrapper = styled.section`
    width: 100%;
    height: 900px;
    background: linear-gradient(160deg, #eaf3ff 0%, #ffffff 40%, #f5eeff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 60px;
        width: 100%;
    }

    .intro-section1-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .intro-section1-heading {
        font-size: ${theme.FONT_SIZE.h1};
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.black};
        line-height: 1.35;
        margin: 0;
        letter-spacing: -1.5px;
    }

    .intro-section1-sub {
        font-size: ${theme.FONT_SIZE.h3_2};
        font-weight: ${theme.FONT_WEIGHT.regular};
        color: ${theme.GRAYSCALE[10]};
        line-height: 1.7;
        margin: 0;
    }

    .intro-section1-sub:first-of-type {
        margin-top: 28px;
    }

    .intro-section1-scroll-arrows {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
    }
`;

S.StartButton = styled.button`
    margin-top: 36px;
    width: 200px;
    height: 60px;
    border-radius: 10px;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    background-size: 200% 200%;
    background-position: 0% 50%;
    transition: background-position 0.6s ease;
    color: ${theme.PALETTE.white};
    font-size: ${theme.FONT_SIZE.h5};
    font-weight: ${theme.FONT_WEIGHT.bold};
    border: none;
    cursor: pointer;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);

    &:hover {
        background-position: 100% 50%;
    }
`;

S.Section1Scroll = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

S.ScrollMouse = styled.div`
    width: 22px;
    height: 36px;
    border: 2px solid ${theme.GRAYSCALE[4]};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    padding-top: 6px;
    box-sizing: border-box;
`;

S.ScrollDot = styled.div`
    width: 4px;
    height: 8px;
    background-color: ${theme.GRAYSCALE[4]};
    border-radius: 2px;
    animation: ${scrollDotAnim} 1.6s ease-in-out infinite;
`;

// ── SECTION 2
S.Section2Wrapper = styled.section`
    width: 100%;
    height: 1000px;
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section2 {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    .intro-section2-title {
        font-size: ${theme.FONT_SIZE.h4};
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.black};
        line-height: 1.45;
        margin: 0 0 24px;
        letter-spacing: -0.3px;
    }

    .intro-section2-sub {
        font-size: ${theme.FONT_SIZE.h7};
        font-weight: ${theme.FONT_WEIGHT.regular};
        color: ${theme.GRAYSCALE[10]};
        line-height: 1.7;
        margin: 0;
    }

    .intro-section2-sub-mt {
        margin-top: 20px;
    }
`;

S.Section2Left = styled.div`
    width: 536px;
    height: 442px;
    background-color: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[4]};
    border-radius: 15px;
    padding: 48px 44px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`;

S.Section2BadgeWrap = styled.div`
    width: 112px;
    height: 40px;
    padding: 0 16px;
    background-color: ${theme.PALETTE.primary.light};
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

S.Section2Badge = styled.span`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    ${gradientText}
`;

S.Section2Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

S.StatCard = styled.div`
    width: 536px;
    height: 184px;
    background-color: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[4]};
    border-radius: 20px;
    padding: 20px 36px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`;

S.StatCardIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
    flex-shrink: 0;

    background-color: ${({ $variant }) => {
        if ($variant === 'red')   return theme.PALETTE.fourth.light;
        if ($variant === 'blue')  return theme.PALETTE.primary.light;
        if ($variant === 'green') return theme.PALETTE.secondary.light;
        return 'transparent';
    }};

    img { width: 24px; height: 24px; }
`;

S.StatCardStat = styled.p`
    font-size: ${theme.FONT_SIZE.h4};
    font-weight: ${theme.FONT_WEIGHT.bold};
    margin: 0;
    line-height: 1.2;

    color: ${({ $variant }) => {
        if ($variant === 'red')   return theme.PALETTE.fourth.main;
        if ($variant === 'blue')  return theme.PALETTE.primary.main;
        if ($variant === 'green') return theme.PALETTE.secondary.main;
        return theme.PALETTE.black;
    }};
`;

S.StatCardLabel = styled.p`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.PALETTE.black};
    margin: 0;
`;

// ── SECTION 3
S.Section3Wrapper = styled.section`
    width: 100%;
    height: 800px;
    background-color: ${theme.PALETTE.white};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 60px;
        width: 100%;
    }

    .intro-section3-header {
        text-align: center;
    }

    .intro-section3-title {
        font-size: ${theme.FONT_SIZE.h3};
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.black};
        line-height: 1.4;
        margin: 0;
        letter-spacing: -0.5px;
    }
`;

S.Section3Cards = styled.div`
    display: flex;
    align-items: center;
    gap: 26px;
`;

S.MethodCard = styled.div`
    width: 424px;
    height: 279px;
    background-color: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[4]};
    border-radius: 20px;
    padding: 37px 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 12px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`;

S.MethodCardIcon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    background: ${({ $variant }) => {
        if ($variant === 'left')   return 'linear-gradient(135deg, #027df0, #ab47ff)';
        if ($variant === 'center') return 'linear-gradient(135deg, #ab47ff, #ff34c5)';
        if ($variant === 'right')  return 'linear-gradient(135deg, #ff34c5, #f53102)';
        return 'transparent';
    }};

    img { width: 50px; height: 50px; }
`;

S.MethodCardTitle = styled.div`
    font-size: ${theme.FONT_SIZE.h5};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
    margin: 0;
    letter-spacing: -0.5px;
    line-height: 1.3;
`;

S.MethodCardDesc = styled.div`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
    margin: 0;
    line-height: 1.6;
    word-break: keep-all;
`;

// ── SECTION 4
S.Section4Wrapper = styled.section`
    width: 100%;
    height: 1512px;
    background-color: #f8f9fa;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 100px;

    .intro-section4 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 80px;
    }

    .intro-section4-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .intro-section4-title {
        font-size: ${theme.FONT_SIZE.h3};
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.black};
        text-align: center;
    }
`;

S.Section4BadgeWrap = styled.div`
    width: 136px;
    height: 40px;
    background-color: ${theme.PALETTE.primary.light};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.Section4Badge = styled.span`
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.bold};
    ${gradientText}
`;

S.StepByStep = styled.div`
    position: relative;
    width: 1038px;
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

S.TimelineLine = styled.div`
    position: absolute;
    top: 12px;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background: linear-gradient(to bottom, #027df0 0%, #ab47ff 33%, #ff34c5 66%, #f53102 100%);
    z-index: 0;
`;

S.StepRow = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 1;

    ${({ $side }) =>
        $side === 'left'
            ? 'justify-content: flex-start; padding-right: calc(50% + 48px);'
            : 'justify-content: flex-end;  padding-left:  calc(50% + 48px);'}
`;

S.StepDot = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.white};
    z-index: 2;
    flex-shrink: 0;
    background: ${({ $step }) => STEP_COLOR[$step] || '#333'};
`;

S.StepCard = styled.div`
    background-color: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[4]};
    border-radius: 15px;
    padding: 28px 32px;
    box-sizing: border-box;
    width: 312px;
    height: 210px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`;

S.StepCardTop = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: ${({ $side }) => ($side === 'left' ? 'flex-end' : 'flex-start')};
`;

S.StepLabel = styled.span`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${({ $step }) => STEP_COLOR[$step] || '#333'};
`;

S.StepCardIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: ${({ $step }) => STEP_COLOR[$step] || '#333'};

    img { width: 20px; height: 20px; filter: brightness(0) invert(1); }
`;

S.StepCardName = styled.p`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
    margin: 0;
    text-align: ${({ $side }) => ($side === 'left' ? 'right' : 'left')};
`;

S.StepCardDesc = styled.p`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
    margin: 0;
    text-align: ${({ $side }) => ($side === 'left' ? 'right' : 'left')};
    line-height: 1.5;
`;

S.StepTags = styled.div`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: ${({ $side }) => ($side === 'left' ? 'flex-end' : 'flex-start')};
`;

S.StepTag = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    height: 28px;
    padding: 0 10px;
    border-radius: 14px;
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.bold};
    background-color: ${({ $step }) => STEP_BG[$step] || '#f0f0f0'};
    color: ${({ $step }) => STEP_COLOR[$step] || '#333'};
`;

// ── SECTION 5
S.Section5Wrapper = styled.section`
    width: 100%;
    height: 980px;
    background-color: ${theme.PALETTE.white};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section5 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        width: 100%;
    }

    .intro-section5-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        text-align: center;
    }

    .intro-section5-title {
        font-size: 40px;
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.black};
        margin: 0;
        line-height: 1.4;
        letter-spacing: -0.5px;
    }

    .intro-section5-sub {
        font-size: ${theme.FONT_SIZE.h7};
        font-weight: ${theme.FONT_WEIGHT.regular};
        color: ${theme.GRAYSCALE[10]};
        margin: 0;
    }
`;

S.Section5Badges = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
`;

S.Section5Badge = styled.div`
    width: 136px;
    height: 40px;
    border-radius: 10px;
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.PALETTE.primary.light};

    span {
        background: linear-gradient(90deg, #027df0, #ab47ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;

S.Section5Cards = styled.div`
    display: flex;
    gap: 24px;
`;

S.LogCard = styled.div`
    width: 352px;
    height: 198px;
    background-color: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[4]};
    border-radius: 15px;
    padding: 20px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`;

S.LogCategory = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 24px;
    border-radius: 5px;
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.regular};
    flex-shrink: 0;
    background-color: ${({ $variant }) => CATEGORY_STYLES[$variant]?.bg || '#f0f0f0'};
    color:            ${({ $variant }) => CATEGORY_STYLES[$variant]?.color || '#333'};
`;

S.LogCardTitle = styled.p`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
    margin: 0;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

S.LogCardDesc = styled.p`
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
    margin: 0;
    line-height: 1.5;
    flex: 1;
`;

S.LogCardBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`;

S.LogProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

S.LogAvatarWrap = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 1.5px;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

S.LogAvatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`;

S.LogNickname = styled.span`
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
`;

S.LogStats = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

S.LogStat = styled.span`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
`;

// ── 챗봇 FAB
S.ChatbotFab = styled.button`
    position: fixed;
    bottom: 36px;
    right: 36px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(2, 125, 240, 0.35);
    transition: transform 0.2s, box-shadow 0.2s;
    z-index: 200;

    &:hover {
        transform: scale(1.08);
        box-shadow: 0 8px 28px rgba(2, 125, 240, 0.45);
    }
`;

S.ChatbotFabIcon = styled.img`
    width: 32px;
    height: 32px;
    filter: invert(1);
`;

export default IntroContainer;
