import React, { useState } from 'react';
import './LogPopularSolution.css';
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
    <section className="popular-solutions-wrapper">
      <div className="popular-solutions">

        <div className="solutions-title-wrap">
          <img src={TrumpetIcon} alt="trumpet" className="solutions-trumpet-icon" />
          <h2 className="solutions-title">인기있는 솔루션</h2>
        </div>

        <div className="cards-viewport">
          <div
            className="cards-track"
            style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
          >
            {cards.map((card, i) => (
              <div className="solution-card" key={i}>

                {/* 프로필 */}
                <div className="card-profile">
                    <div className="profile-circle">
                        <img
                        src={card.profileImg}
                        alt={card.nickname}
                        className="profile-img"
                        />
                    </div>
                    <span className="card-nickname">{card.nickname}</span>
                </div>

                {/* 실패 텍스트 박스 */}
                <div className="fail-text-box">
                  <p className="fail-text">{card.failText}</p>
                </div>

                {/* 페로 라벨 */}
                <div className="card-sol-label">
                  <span className="sol-label-text">페로</span>
                  <div className="sol-icon-wrap">
                    <img src={FeroIcon} alt="fero" className="sol-icon" />
                  </div>
                </div>

                {/* 솔루션 요약 박스 */}
                <div className="sol-summary-box">
                  <p className="sol-summary">{card.solution}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="nav-buttons">
            <button className="nav-btn" onClick={handlePrev}>
                <img src={ArrowIcon} alt="prev" className="nav-icon nav-icon-left" />
            </button>
            <button className="nav-btn" onClick={handleNext}>
                <img src={ArrowIcon} alt="next" className="nav-icon" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default LogPopularSolution;