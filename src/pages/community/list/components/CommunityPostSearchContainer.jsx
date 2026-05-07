import React from 'react';
import myStyle from '../../styles/CommunitySearchContainerStyle'
import S from '../../style';
import dogImage from '../../resources/community_header.png'
import CommunitySearchComponent from './CommunitySearchComponent';
import CommunityCategoryContainer from './CommunityCategoryContainer';
import CommunitySearchOrder2Container from './CommunitySearchOrder2Container';

//커뮤니티 게시글보기 (상단영역)
const CommunityPostSearchContainer = () => {
  return (
    <div>
      <myStyle.wrap>
        <myStyle.headerWrap>
          <myStyle.header>
            <myStyle.headerTitle>
              <S.Span size={"h7-exBold1"} color={"faillog-black"}>FIND</S.Span>
              <img src={dogImage} width={"216px"} height={"144px"}></img>
              <S.Span size={"h7-exBold1"} color={"faillog-black"}>POST YOU WANT</S.Span>
            </myStyle.headerTitle>
            <myStyle.headerSub>
              <S.Span size={"h7-regular"} color={"faillog_gray9"}>다른 사람들의 실패와 경험 속에서 원하는 게시글을 쉽고 빠르게 찾아보세요.</S.Span>
            </myStyle.headerSub>
          </myStyle.header>
        </myStyle.headerWrap>

          {/* 커뮤니티 검색 */}
        <myStyle.searchWrap>
          <CommunitySearchComponent></CommunitySearchComponent>
        </myStyle.searchWrap>

          {/* 커뮤니티 카테고리 선택 및 정렬 */}
        <myStyle.categoryAndPostOrderWrap>
          <myStyle.categoryAndPostOrder>
            <CommunityCategoryContainer></CommunityCategoryContainer>
            <CommunitySearchOrder2Container></CommunitySearchOrder2Container>
          </myStyle.categoryAndPostOrder>
        </myStyle.categoryAndPostOrderWrap>
        
      </myStyle.wrap>
    </div>
  );
};

export default CommunityPostSearchContainer;