import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroContainer.css';
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

/* ──────────────────────────────────────────
   섹션 2 — 오른쪽 카드 3개
────────────────────────────────────────── */
const StatCard = ({ icon, iconColorClass, stat, statColorClass, label }) => (
    <div className="intro-section2-card">
        <div className={`intro-section2-card-icon ${iconColorClass}`}>
            <img src={icon} alt={label} />
        </div>
        <p className={`intro-section2-card-stat ${statColorClass}`}>{stat}</p>
        <p className="intro-section2-card-label">{label}</p>
    </div>
);

const STAT_CARDS = [
    {
        icon: repeatIcon,
        iconColorClass: 'intro-section2-card-icon-red',
        stat: '73%',
        statColorClass: 'intro-section2-card-stat-red',
        label: '같은 유형의 실패를 2회 이상 경험',
    },
    {
        icon: washTimeIcon,
        iconColorClass: 'intro-section2-card-icon-blue',
        stat: '2주',
        statColorClass: 'intro-section2-card-stat-blue',
        label: '실패의 맥락을 기억하는 평균 시간',
    },
    {
        icon: arrowIcon,
        iconColorClass: 'intro-section2-card-icon-green',
        stat: '6배',
        statColorClass: 'intro-section2-card-stat-green',
        label: '기록된 실패를 분석할 때 개선율',
    },
];

/* ──────────────────────────────────────────
   섹션 3 — 3가지 방법 카드
────────────────────────────────────────── */
const MethodCard = ({ icon, iconColorClass, title, desc }) => (
    <div className="intro-section3-card">
        <div className={`intro-section3-card-icon ${iconColorClass}`}>
            <img src={icon} alt={title} />
        </div>
        <p className="intro-section3-card-title">{title}</p>
        <p className="intro-section3-card-desc">{desc}</p>
    </div>
);

const METHOD_CARDS = [
    {
        icon: fileIcon,
        iconColorClass: 'intro-section3-card-icon-left',
        title: '구조화된 실패 기록',
        desc: '감정이 아닌 선택 근거, 무시한 신호 등 당시 제약을 체계적으로 기록합니다.',
    },
    {
        icon: barChartIcon,
        iconColorClass: 'intro-section3-card-icon-center',
        title: '패턴 분석 대시보드',
        desc: '개인의 실패 패턴을 시각화하고, 반복되는 선택의 오류를 객관적으로 파악합니다.',
    },
    {
        icon: teamworkIcon,
        iconColorClass: 'intro-section3-card-icon-right',
        title: '타인의 실패로부터 학습',
        desc: '다양한 분야의 실패 사례를 읽고, 공감, 지식, 경험을 공유하세요.',
    },
];

/* ──────────────────────────────────────────
   섹션 4 — 타임라인 Step 카드
────────────────────────────────────────── */
const StepCard = ({ step, icon, name, desc, tags, side }) => {
    const isLeft = side === 'left';
    const rowClass = isLeft ? 'intro-section4-row-left' : 'intro-section4-row-right';
    const dotClass = `intro-section4-dot-${step}`;
    const stepClass = `intro-section4-step-${step}`;
    const iconClass = `intro-section4-card-icon-${step}`;
    const tagClass = `intro-section4-tag-${step}`;

    const cardTop = isLeft ? (
        <div className="intro-section4-card-top">
            <span className={`intro-section4-step ${stepClass}`}>Step {step}</span>
            <div className={`intro-section4-card-icon ${iconClass}`}>
                <img src={icon} alt={`step${step}`} />
            </div>
        </div>
    ) : (
        <div className="intro-section4-card-top">
            <div className={`intro-section4-card-icon ${iconClass}`}>
                <img src={icon} alt={`step${step}`} />
            </div>
            <span className={`intro-section4-step ${stepClass}`}>Step {step}</span>
        </div>
    );

    const card = (
        <div className="intro-section4-card">
            {cardTop}
            <p className="intro-section4-card-name">{name}</p>
            <p className="intro-section4-card-desc">{desc}</p>
            <div className="intro-section4-tags">
                {tags.map((tag) => (
                    <span key={tag} className={`intro-section4-tag ${tagClass}`}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );

    const dot = <div className={`intro-section4-dot ${dotClass}`}>{step}</div>;

    return (
        <div className={`intro-section4-row ${rowClass}`}>
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
        </div>
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
const LogCard = ({ categoryClass, category, title, desc, nickname, views, likes }) => (
    <div className="intro-section5-card">
        <span className={`intro-section5-category ${categoryClass}`}>{category}</span>
        <p className="intro-section5-card-title">{title}</p>
        <p className="intro-section5-card-desc">{desc}</p>
        <div className="intro-section5-card-bottom">
            <div className="intro-section5-profile">
                <div className="intro-section5-avatar" />
                <span className="intro-section5-nickname">{nickname}</span>
            </div>
            <div className="intro-section5-stats">
                <span className="intro-section5-stat">
                    <img src={viewIcon} alt="views" width="16" height="16" />
                    {views}
                </span>
                <span className="intro-section5-stat">
                    <img src={heartIcon} alt="likes" width="16" height="16" />
                    {likes}
                </span>
            </div>
        </div>
    </div>
);

const LOG_CARDS = [
    {
        categoryClass: 'intro-section5-category-blue',
        category: '공부/취업',
        title: '면접에서 반복된 질문에 답변을 못한 이유',
        desc: '면접에서 반복된 질문에 답변을 못한 이유',
        nickname: '취준탈출넘버원',
        views: 45,
        likes: 35,
    },
    {
        categoryClass: 'intro-section5-category-orange',
        category: '사업/창업',
        title: '첫 사업 아이템을 3번 바꾼 이유',
        desc: '시장 조사 없이 시작했다가 피벗을 반복한 이야기',
        nickname: '창업도전왕',
        views: 45,
        likes: 35,
    },
    {
        categoryClass: 'intro-section5-category-pink',
        category: '인간관계',
        title: '말을 언제나 생각하고 조심히 말하기',
        desc: '한 순간의 실수로 멀어져버린 우리 사이',
        nickname: '말조심연습',
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
        <div className="intro-wrap">
            {/* 1번째 섹터 */}
            <section className="intro-section1-wrapper">
                <div className="intro-section1">
                    {/* Hero text */}
                    <div className="intro-section1-text">
                        <h1 className="intro-section1-heading">
                            지나간 실패들이 모여
                        </h1>
                        <h1 className="intro-section1-heading">
                            <span className="color-gradient">성공의 한 패</span>
                            가 됩니다.
                        </h1>
                        <p className="intro-section1-sub">실패를 외면하지 않고 기록할 때,</p>
                        <p className="intro-section1-sub">당신의 강력한 성장 데이터가 됩니다.</p>
                        <button className="intro-section1-start-button" onClick={() => navigate('/join')}>
                            시작하기
                        </button>
                    </div>

                    {/* 아래로 스크롤 아이콘 */}
                    <div className="intro-section1-scroll">
                        <div className="intro-section1-scroll-mouse">
                            <div className="intro-section1-scroll-dot" />
                        </div>
                        <div className="intro-section1-scroll-arrows">
                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                                <path
                                    d="M2 2L10 10L18 2"
                                    stroke="#cccccc"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                                <path
                                    d="M2 2L10 10L18 2"
                                    stroke="#cccccc"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeOpacity="0.45"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2번째 섹터 */}
            <section className="intro-section2-wrapper">
                <div className="intro-section2">
                    {/* 왼쪽 카드 */}
                    <div className="intro-section2-left">
                        <div className="intro-section2-badge-wrap">
                            <span className="intro-section2-badge">실패 기록</span>
                        </div>
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
                    </div>

                    {/* 오른쪽 카드 3개 */}
                    <div className="intro-section2-right">
                        {STAT_CARDS.map((card) => (
                            <StatCard key={card.stat} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3번째 섹터 */}
            <section className="intro-section3-wrapper">
                <div className="intro-section3">
                    <div className="intro-section3-header">
                        <h2 className="intro-section3-title">
                            실패를 데이터로,
                            <br />
                            성장으로 연결하는 <span className="color-gradient">3가지 방법</span>
                        </h2>
                    </div>

                    <div className="intro-section3-cards">
                        {METHOD_CARDS.map((card) => (
                            <MethodCard key={card.title} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4번째 섹터 */}
            <section className="intro-section4-wrapper">
                <div className="intro-section4">
                    <div className="intro-section4-header">
                        <div className="intro-section4-badge-wrap">
                            <span className="intro-section4-badge">사용 방법</span>
                        </div>
                        <h2 className="intro-section4-title">
                            4단계로 완성하는 <span className="color-gradient">실패분석</span>
                        </h2>
                    </div>

                    <div className="intro-section4-stepByStep">
                        <div className="intro-section4-line" />
                        {STEP_CARDS.map((card) => (
                            <StepCard key={card.step} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5번째 섹터 */}
            <section className="intro-section5-wrapper">
                <div className="intro-section5">
                    <div className="intro-section5-header">
                        <h2 className="intro-section5-title">
                            혼자가 아닌,
                            <br />
                            <span className="color-gradient">함께 만드는 성장</span>
                        </h2>
                        <p className="intro-section5-sub">다양한 분야의 실패 사례를 경험하세요.</p>
                    </div>

                    <div className="intro-section5-badges">
                        <div className="intro-section5-badge">
                            <span>다양한 로그</span>
                        </div>
                        <div className="intro-section5-badge">
                            <span>커뮤니티</span>
                        </div>
                    </div>

                    <div className="intro-section5-cards">
                        {LOG_CARDS.map((card) => (
                            <LogCard key={card.category} {...card} />
                        ))}
                    </div>

                    <button className="intro-section1-start-button" onClick={() => navigate('/join')}>
                        시작하기
                    </button>
                </div>
            </section>

            {/* 챗봇 버튼 */}
            <button className="intro-chatbot-fab" aria-label="챗봇 열기">
                <img src={chatbotIcon} alt="chatbot" className="intro-chatbot-fab-icon" />
            </button>
        </div>
    );
};

export default IntroContainer;
