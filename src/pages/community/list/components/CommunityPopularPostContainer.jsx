import React, { useState, useEffect, useRef, useCallback } from 'react';
import myStyle from '../../styles/CommunityPopularPostContainerStyle';
import S from '../../style';

import study from '../../resources/study.jpg';
import icon04 from '../../resources/icon04.png'
import trumpet from '../../resources/trumpet.svg'
import eye from '../../resources/eye.svg'
import heart from '../../resources/like.svg'
import comment from '../../resources/post.svg'
import likeFill from '../../resources/like-fill.svg'
import getCategoryInfo from '../../GetCategoryInfo';

const CARD_W = 420;
const FOCUS_W = 480;
const CARD_H = 568;
const FOCUS_H = 648;
const GAP = 20;
const STEP = CARD_W + GAP;
const SIZE_DUR = 300;
const SLIDE_DUR = 500;

const SIZE_TRANSITION = `flex-basis ${SIZE_DUR}ms ease, height ${SIZE_DUR}ms ease`;

const CommunityPopularPostContainer = ({ posts }) => {
  const total = posts.length;
  const [activeIdx, setActiveIdx] = useState(0);
  const animatingRef = useRef(false);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const timerRef = useRef(null);

  const getPost = (offset) =>
    posts[((activeIdx + offset) % total + total) % total];

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
        dir === 'next' ? (prev + 1) % total : (prev - 1 + total) % total
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
          <myStyle.headerTestOneDiv>
            <img src={trumpet} width={80} height={80}></img>
            <S.Span size="h2-bold" color="faillog-black">실시간 인기글</S.Span>
          </myStyle.headerTestOneDiv>
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
            const {name, textColor ,bgColor} = getCategoryInfo(post.category)
            return (
              <myStyle.CardOuter
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
              >
                <myStyle.Card>
                  <myStyle.CardImageWrap>
                    <myStyle.CardImage src={post.thumbnail} width={"100%"} height={"100%"}></myStyle.CardImage>
                  </myStyle.CardImageWrap>
                  <myStyle.CardBody>
                    <myStyle.CardMeta>
                      {/* <myStyle.CategoryBadge>{post.category}</myStyle.CategoryBadge> */}
                      <myStyle.CategoryWrap bgColor={bgColor}>
                        <S.Span color={textColor} size={"h11Bold"}>{name}</S.Span>
                      </myStyle.CategoryWrap>
                      <S.Span size="h10Regular" color="faillog_gray9">{post.date}</S.Span>
                    </myStyle.CardMeta>
                    <myStyle.CardTitle>
                      <S.Span2 size="h6Bold" color="faillog-black" lineclamp={2}>
                        {post.title}
                      </S.Span2>
                    </myStyle.CardTitle>
                    <myStyle.CardContent>
                      <S.Span2 size="h9Bold" color="faillog_gray9" lineclamp={3}>
                        {post.content}
                      </S.Span2>
                    </myStyle.CardContent>
                    <myStyle.CardDivider />
                    <myStyle.CardFooter>
                      <myStyle.AuthorInfo>
                        <myStyle.AuthorAvatar src={post.profile} />
                        <S.Span size="h10Regular" color="faillog_gray9">{post.author}</S.Span>
                      </myStyle.AuthorInfo>
                      <myStyle.Stats>
                        <myStyle.postInfo>
                          <img src={eye} width={12} height={8}></img>
                          <S.Span size={"h11Regular"} color={"faillog-black"} isvisible={true}>{post.views}</S.Span>
                        </myStyle.postInfo>
                        <myStyle.postInfo>
                          <img src={heart} width={14} height={14}></img>
                          <S.Span size={"h11Regular"} color={"faillog-black"}>{post.likes}</S.Span>
                        </myStyle.postInfo>
                        <myStyle.postInfo>
                          <img src={comment} width={14} height={14}></img>
                          <S.Span size={"h11Regular"} color={"faillog-black"}>{post.comments}</S.Span>
                        </myStyle.postInfo>
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
        <myStyle.PageLine style={{ '--rate': `${((activeIdx + 1) / total) * 100}%` }} />
        <myStyle.PageNav>
          <myStyle.NavBtn onClick={() => handleNav('prev')}>‹</myStyle.NavBtn>
          <S.Span size="h9Regular" color="faillog_gray9">
            {activeIdx + 1} / {total}
          </S.Span>
          <myStyle.NavBtn onClick={() => handleNav('next')}>›</myStyle.NavBtn>
        </myStyle.PageNav>
      </myStyle.PaginationWrap>
    </myStyle.containerWrap>
  );
};

export default CommunityPopularPostContainer;
