import React from 'react';
//import CommunitySearch from './CommunityPostListContainer';
import { Link, Outlet } from 'react-router-dom';
import CommunityMainHeader from './list/components/CommunityMainHeader';
import CommunityBestPost from './list/components/CommunityBestPost';
import CommunityPopularPostContainer from './list/components/CommunityPopularPostContainer';
import CommunityPostSearchContainer from './list/components/CommunityPostSearchContainer';
import myStyle from './styles/CommunityContainerStyle'

import S from './style'

const CommunityContainer = () => {
    return (
        <div>
            
            <CommunityMainHeader />
            <CommunityBestPost />
            <CommunityPopularPostContainer></CommunityPopularPostContainer>

            
            <myStyle.ListBgWrap>
                <CommunityPostSearchContainer />

                {/* 래퍼 */}
                {/* 좌측 : 커뮤니티 게시글 */}
                {/* 우측 맞춤 게시글 */}
                <S.Wrapper margintop={"55px"}>
                    <myStyle.PostListAndAiRecommandPostWrapper>테스트</myStyle.PostListAndAiRecommandPostWrapper>
                </S.Wrapper>
            </myStyle.ListBgWrap>
        </div>
    );
};

export default CommunityContainer;