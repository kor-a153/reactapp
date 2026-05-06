import React, { useState, useEffect, useRef, useCallback } from 'react';
import myStyle from '../../styles/CommunityPopularPostContainerStyle';
import S from '../../style';

import study from '../../resources/study.jpg';
import icon04 from '../../resources/icon04.png'

const CARD_W = 420;
const FOCUS_W = 480;
const CARD_H = 568;
const FOCUS_H = 648;
const GAP = 20;
// 슬라이드 중 포커스↔일반 크기 전환이 동시에 일어나므로
// 진입 카드의 실제 도착 위치 = CARD_W + GAP
const STEP = CARD_W + GAP; // 440px
const TOTAL = 5;
const SIZE_DUR = 300; // 카드 크기 전환 시간 (ms)
const SLIDE_DUR = 500; // 트랙 이동 시간 (ms)

const IMG_COLORS = [
  'linear-gradient(135deg, #EDE8FF 0%, #D4C5FF 100%)',
  'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
  'linear-gradient(135deg, #FFF8E1 0%, #FFE082 100%)',
  'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
  'linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)',
];

const TITLES = [
  '처음부터 서비스 방향을 너무 넓게 잡아서 실패했던 기록',
  '취업 면접 5번 탈락 후 알게 된 것',
  '독학으로 개발 공부 6개월, 포기했던 이유',
  '스타트업 3번 실패하고 배운 것들',
  '기출만 보다 실전에서 무너졌던 이유와 공부 루틴 재설계',
];

const CONTENTS = [
  '모든 사람을 만족시키려다 핵심 고객을 잃었습니다. 이후 문제 정의를 다시 하고, 한 가지 니즈에 집중하면서 서비스 구조를 재편했습니다.',
  '대기업 공채에 5번 연속으로 최종 면접에서 떨어졌습니다. 매번 잘 됐다 싶었는데 결과는 항상 불합격이었어요.',
  '비전공자로 혼자 웹 개발을 공부했습니다. 6개월을 버티니 프로젝트를 스스로 만드는 단계에서 막혀버렸습니다.',
  '창업에 도전한 지 3년이 됐습니다. 그동안 세 번의 창업을 시도했고, 세 번 모두 실패로 끝났습니다.',
  '익숙한 환경에만 매달린 공부 방식이 문제였습니다. 장소, 시간, 복습 방법을 바꾸면서 실전 감각을 회복했던 과정을 정리했습니다.',
];

const POSTS = Array.from({ length: TOTAL }, (_, i) => ({
  id: i + 1,
  category: '공부/취업',
  date: '2026년 3월 1일',
  title: TITLES[i % 5],
  content: CONTENTS[i % 5],
  author: '탈기마스터',
  views: 999,
  likes: 35,
  comments: 6,
  bgColor: IMG_COLORS[i % 5],
}));

const SIZE_TRANSITION = `flex-basis ${SIZE_DUR}ms ease, height ${SIZE_DUR}ms ease`;

const CommunityPopularPostContainer = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const animatingRef = useRef(false);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const timerRef = useRef(null);

  const getPost = (offset) =>
    POSTS[((activeIdx + offset) % TOTAL + TOTAL) % TOTAL];

  // 마운트 시 포커스 카드(인덱스 4) 크기 초기 적용 (트랜지션 없이)
  useEffect(() => {
    const el = cardRefs.current[4];
    if (!el) return;
    el.style.transition = 'none';
    el.style.flexBasis = `${FOCUS_W}px`;
    el.style.height = `${FOCUS_H}px`;
  }, []);

  const slide = useCallback((dir) => {
    if (animatingRef.current || !trackRef.current) return;
    animatingRef.current = true;

    const track = trackRef.current;
    const incomingIdx = dir === 'next' ? 5 : 3;

    // ── 1. 크기 트랜지션 활성화 ─────────────────────────────
    cardRefs.current.forEach((el) => {
      if (el) el.style.transition = SIZE_TRANSITION;
    });

    // ── 2. 포커스 해제(4번 → 일반 크기) / 포커스 진입(incoming → 포커스 크기) ──
    const outEl = cardRefs.current[4];
    if (outEl) {
      outEl.style.flexBasis = `${CARD_W}px`;
      outEl.style.height = `${CARD_H}px`;
    }
    const inEl = cardRefs.current[incomingIdx];
    if (inEl) {
      inEl.style.flexBasis = `${FOCUS_W}px`;
      inEl.style.height = `${FOCUS_H}px`;
    }

    // ── 3. 트랙 슬라이드 ────────────────────────────────────
    track.style.transition = `transform ${SLIDE_DUR}ms ease`;
    track.style.transform = `translateX(${dir === 'next' ? -STEP : STEP}px)`;

    setTimeout(() => {
      // ── 4. 스냅: transition:none 먼저 커밋 후 크기 초기화 ──
      cardRefs.current.forEach((el) => { if (el) el.style.transition = 'none'; });
      track.style.transition = 'none';

      // transition:none이 확실히 적용되도록 강제 리플로우
      void track.getBoundingClientRect();

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.flexBasis = i === 4 ? `${FOCUS_W}px` : `${CARD_W}px`;
        el.style.height = i === 4 ? `${FOCUS_H}px` : `${CARD_H}px`;
      });
      track.style.transform = 'translateX(0px)';

      // ── 5. 콘텐츠 업데이트 ─────────────────────────────────
      setActiveIdx((prev) =>
        dir === 'next' ? (prev + 1) % TOTAL : (prev - 1 + TOTAL) % TOTAL
      );

      animatingRef.current = false;

    }, SLIDE_DUR);
  }, []);


  const handleNav = (dir) => {
    clearInterval(timerRef.current);
    slide(dir);
    timerRef.current = setInterval(() => slide('next'), 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => slide('next'), 5000);
    return () => clearInterval(timerRef.current);
  }, [slide]);

  return (
    <myStyle.containerWrap>
      <myStyle.headerWrap>
        <myStyle.header>
          <S.Span size="h2-bold" color="faillog-black">실시간 인기글</S.Span>
          <myStyle.headerTextTwoDiv>
            <S.Span size="h8-bold" color="faillog_gray9">
              많이 공감받은 복기 글을 한눈에 확인해보세요.
            </S.Span>
          </myStyle.headerTextTwoDiv>
        </myStyle.header>
      </myStyle.headerWrap>

      <myStyle.CarouselWrapper>
        <myStyle.Track ref={trackRef}>
          {Array.from({ length: 9 }, (_, i) => {
            const post = getPost(i - 4);
            return (
              <myStyle.CardOuter
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
              >
                <myStyle.Card>
                  <myStyle.CardImageWrap bgColor={post.bgColor}>
                    <myStyle.CardImage src={study} width={"100%"} height={"100%"}></myStyle.CardImage>
                  </myStyle.CardImageWrap>
                  <myStyle.CardBody>
                    <myStyle.CardMeta>
                      {/* <myStyle.CategoryBadge>{post.category}</myStyle.CategoryBadge> */}
                      <myStyle.CategoryWrap bgColor={"faillog_light_purple"}>
                        <S.Span color={"faillog_purple"} size={"h11-bold"}>{post.category}</S.Span>
                      </myStyle.CategoryWrap>
                      <S.Span size="h10-regular" color="faillog_gray9">{post.date}</S.Span>
                    </myStyle.CardMeta>
                    <myStyle.CardTitle>
                      <S.Span2 size="h6-bold" color="faillog-black" lineclamp={2}>
                        {post.title}
                      </S.Span2>
                    </myStyle.CardTitle>
                    <myStyle.CardContent>
                      <S.Span2 size="h9-bold" color="faillog_gray9" lineclamp={3}>
                        {post.content}
                      </S.Span2>
                    </myStyle.CardContent>
                    <myStyle.CardDivider />
                    <myStyle.CardFooter>
                      <myStyle.AuthorInfo>
                        <myStyle.AuthorAvatar src={icon04} />
                        <S.Span size="h10-regular" color="faillog_gray9">{post.author}</S.Span>
                      </myStyle.AuthorInfo>
                      <myStyle.Stats>
                        <S.Span size="h10-regular" color="faillog-black">👁 {post.views}</S.Span>
                        <S.Span size="h10-regular" color="faillog-black">♡ {post.likes}</S.Span>
                        <S.Span size="h10-regular" color="faillog-black">💬 {post.comments}</S.Span>
                      </myStyle.Stats>
                    </myStyle.CardFooter>
                  </myStyle.CardBody>
                </myStyle.Card>
              </myStyle.CardOuter>
            );
          })}
        </myStyle.Track>
      </myStyle.CarouselWrapper>

      <myStyle.PaginationWrap>
        <myStyle.PageLine style={{ '--rate': `${((activeIdx + 1) / TOTAL) * 100}%` }} />
        <myStyle.PageNav>
          <myStyle.NavBtn onClick={() => handleNav('prev')}>‹</myStyle.NavBtn>
          <S.Span size="h9-regular" color="faillog_gray9">
            {activeIdx + 1} / {TOTAL}
          </S.Span>
          <myStyle.NavBtn onClick={() => handleNav('next')}>›</myStyle.NavBtn>
        </myStyle.PageNav>
      </myStyle.PaginationWrap>
    </myStyle.containerWrap>
  );
};

export default CommunityPopularPostContainer;
