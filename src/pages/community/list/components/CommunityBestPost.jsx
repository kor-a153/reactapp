import React from 'react';
//import S from '../../style';
import CommunityBestPostStyle from '../../styles/CommunityBestPostStyle';
import S from '../../style';

import icon04 from '../../resources/icon04.png'
import study from '../../resources/study.jpg'

const CommunityBestPost = () => {

  const myStyle = CommunityBestPostStyle;

  return (
    <div>
        <myStyle.BestPostWrap>
            <myStyle.BestPost>
                <myStyle.BestPostLeftLine></myStyle.BestPostLeftLine>
                <myStyle.BestPostMainWrapDiv>
                    <myStyle.BestPostMainDiv>
                        <myStyle.BestPostMainHeader>
                          <myStyle.BestPostMainHeaderTitle>
                              <S.Span size={"h8-bold"} color={"faillog_purple"}>이번달 좋아요 최다 게시글</S.Span>
                          </myStyle.BestPostMainHeaderTitle>
                          <S.Span size={"h9-regular"} color={"faillog_gray9"}>2026년 3월 1일</S.Span>
                        </myStyle.BestPostMainHeader>
                        <myStyle.BestPostMainTitle>
                          <S.Span2 size={"h4-bold"} color={"faillog-black"} lineclamp={2}>기출만 파다가 실전에서 백지 된 썰.<br/>
                      공부 환경부터 바꾸고 나서니 변화가생긴 썰</S.Span2>
                        </myStyle.BestPostMainTitle>
                        <myStyle.BestPostMainContent>
                          <S.Span2 size={"h7-bold"} color={"faillog_gray9"} lineclamp={2}>익숙한 환경에만 매달린 공부 방식이 문제였습니다. 장소, 시간, 복습 <br/>
                      방법을 바꾸면서 점점 실전 감각을 회복헀던 과정을 정리했습니다.</S.Span2>
                        </myStyle.BestPostMainContent>
                        <myStyle.BestPostMainHr></myStyle.BestPostMainHr>
                        <myStyle.BestPostMainInfo>
                          <myStyle.UserInfo>
                            <myStyle.UserImg src={icon04}></myStyle.UserImg>
                            <S.Span size={"h9-regular"} color={"faillog_black"}>필기마스터</S.Span>
                            <myStyle.PostInfo>
                              <S.Span size={"h9-regular"} color={"faillog_black"}>★</S.Span>
                              <S.Span size={"h9-regular"} color={"faillog_black"}>99</S.Span>
                              <S.Span size={"h9-regular"} color={"faillog_black"}>★</S.Span>
                              <S.Span size={"h9-regular"} color={"faillog_black"}>6</S.Span>
                              <S.Span size={"h9-regular"} color={"faillog_black"}>★</S.Span>
                              <S.Span size={"h9-regular"} color={"faillog_black"}>999+</S.Span>
                            </myStyle.PostInfo>
                          </myStyle.UserInfo>
                        </myStyle.BestPostMainInfo>
                        <myStyle.BestPostMainButton>
                          <myStyle.GoPostInfoButton>
                              <S.Span size={"h8-exBold8"} color={"faillog_purple"}>게시글 상세보기</S.Span>
                              <S.Span size={"h8-exBold8"} color={"faillog_purple"}>→</S.Span>
                          </myStyle.GoPostInfoButton>
                        </myStyle.BestPostMainButton>
                    </myStyle.BestPostMainDiv>
                </myStyle.BestPostMainWrapDiv>

                {/* 이미지 영역 */}
                <myStyle.BestPostImgWrapDiv>
                  <S.Img width={"100%"} height={"100%"} src={study}></S.Img>
                </myStyle.BestPostImgWrapDiv>
            </myStyle.BestPost>
        </myStyle.BestPostWrap>
    </div>
  );
};

export default CommunityBestPost;