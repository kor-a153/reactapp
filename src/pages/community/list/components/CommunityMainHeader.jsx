import React from 'react';
//import S from '../../style';
import CommunityMainHeaderStyle from '../../styles/CommunityMainHeaderStyle';
import S from '../../style';

const CommunityMainHeader = () => {
  
  const myStyle = CommunityMainHeaderStyle; //커뮤니티 메인 헤더 전용 스타일

  return (
    <div>
      <myStyle.MainHeaderWrap>
          <myStyle.MainHeader>
              <myStyle.MainHeaderLeftDiv>
                  <S.Span size={"h2-bold"} color={"faillog-black"}>Community</S.Span>
                  <myStyle.MainHeaderLeftTextOneDiv>
                      <S.Span size={"h8-bold"} color={"faillog_gray9"} display={"block"}>실패를 숨기지 마세요. 우리는 서로의 오답노트에서 가장 크게 배웁니다.</S.Span>
                  </myStyle.MainHeaderLeftTextOneDiv>
              </myStyle.MainHeaderLeftDiv>

              <myStyle.MainHeaderRightButtonDiv>
                  <myStyle.WriteButton>
                      <S.Span size={"h7-bold"} color={"faillog_white"}>새 글 작성하기</S.Span>
                  </myStyle.WriteButton>
              </myStyle.MainHeaderRightButtonDiv>
          </myStyle.MainHeader>
      </myStyle.MainHeaderWrap>
    </div>
  );
};

export default CommunityMainHeader;