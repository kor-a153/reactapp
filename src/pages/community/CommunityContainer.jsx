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

    //저번달 게시글 정보
    const bestPost = {}
    bestPost.title = "기출만 파다가 실전에서 백지 된 썰."
    bestPost.content = <>익숙한 환경에만 매달린 공부 방식이 문제였습니다. 장소, 시간, 복습 <br/> 방법을 바꾸면서 점점 실전 감각을 회복헀던 과정을 정리했습니다.</>
    bestPost.date = "2026년 3월 1일"
    bestPost.thumbnail = study
    bestPost.profile = icon04
    bestPost.author = "필기마스터"
    bestPost.views = 99
    bestPost.likes = 777
    bestPost.comments = 999
    bestPost.isLike = false
    bestPost.id = 3;
    
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