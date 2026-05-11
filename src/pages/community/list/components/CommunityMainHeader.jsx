import React from 'react';
//import S from '../../style';
import CommunityMainHeaderStyle from '../../styles/CommunityMainHeaderStyle';
import S from '../../style';

import internet from '../../resources/internet.svg'

const CommunityMainHeader = () => {
  
  const myStyle = CommunityMainHeaderStyle; //커뮤니티 메인 헤더 전용 스타일

  return (
    <div>
      <myStyle.MainHeaderWrap>
          <myStyle.MainHeader>
              <myStyle.MainHeaderLeftDiv>
                
                  <myStyle.MainHeaderLeftTextTopDiv>
                    <myStyle.headerImg src={internet}/>
                    <S.Span size={"h2Bold"} color={"faillog-black"}>Community</S.Span>
                  </myStyle.MainHeaderLeftTextTopDiv>

                  <myStyle.MainHeaderLeftTextBottomDiv>
                      <S.Span size={"h8Bold"} color={"faillog_gray9"} display={"block"}>실패를 숨기지 마세요. 우리는 서로의 오답노트에서 가장 크게 배웁니다.</S.Span>
                  </myStyle.MainHeaderLeftTextBottomDiv>
              </myStyle.MainHeaderLeftDiv>

              <myStyle.MainHeaderRightButtonDiv>
                  <myStyle.WriteButton>
                      <S.Span size={"h7Bold"} color={"faillog_white"}>새 글 작성하기</S.Span>
                  </myStyle.WriteButton>
              </myStyle.MainHeaderRightButtonDiv>
          </myStyle.MainHeader>
      </myStyle.MainHeaderWrap>
    </div>
  );
};

export default CommunityMainHeader;