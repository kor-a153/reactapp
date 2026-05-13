import React from 'react';
//import CommunitySearch from './CommunityPostListContainer';
import { Link, Outlet } from 'react-router-dom';
import CommunityMainHeader from './list/components/CommunityMainHeader';
import CommunityBestPost from './list/components/CommunityBestPost';
import CommunityPopularPostContainer from './list/components/CommunityPopularPostContainer';
import CommunityPostSearchContainer from './list/components/CommunityPostSearchContainer';
import myStyle from './styles/CommunityContainerStyle'
import CommunityListContainer from './list/CommunityListContainer'

import S from './style'
import AiPostListContainer from './list/components/AiPostListContainer';

import study from './resources/study.jpg'
import icon04 from './resources/icon04.png'

const popularPosts = [
  {
    id: 1,
    category: 0,
    date: '2026년 3월 1일',
    title: '처음부터 서비스 방향을 너무 넓게 잡아서 실패했던 기록',
    content: '모든 사람을 만족시키려다 핵심 고객을 잃었습니다. 이후 문제 정의를 다시 하고, 한 가지 니즈에 집중하면서 서비스 구조를 재편했습니다.',
    thumbnail: study,
    profile: icon04,
    author: '탈기마스터',
    views: 99,
    likes: 35,
    comments: 6
  },
  {
    id: 2,
    category: 1,
    date: '2026년 3월 1일',
    title: '취업 면접 5번 탈락 후 알게 된 것',
    content: '대기업 공채에 5번 연속으로 최종 면접에서 떨어졌습니다. 매번 잘 됐다 싶었는데 결과는 항상 불합격이었어요.',
    thumbnail: study,
    profile: icon04,
    author: '탈기마스터',
    views: 99,
    likes: 35,
    comments: 6
  },
  {
    id: 3,
    category: 2,
    date: '2026년 3월 1일',
    title: '독학으로 개발 공부 6개월, 포기했던 이유',
    content: '비전공자로 혼자 웹 개발을 공부했습니다. 6개월을 버티니 프로젝트를 스스로 만드는 단계에서 막혀버렸습니다.',
    thumbnail: study,
    profile: icon04,
    author: '탈기마스터',
    views: 99,
    likes: 35,
    comments: 6
  },
  {
    id: 4,
    category: 3,
    date: '2026년 3월 1일',
    title: '스타트업 3번 실패하고 배운 것들',
    content: '창업에 도전한 지 3년이 됐습니다. 그동안 세 번의 창업을 시도했고, 세 번 모두 실패로 끝났습니다.',
    thumbnail: study,
    profile: icon04,
    author: '탈기마스터',
    views: 99,
    likes: 35,
    comments: 6
  },
  {
    id: 5,
    category: 4,
    date: '2026년 3월 1일',
    title: '기출만 보다 실전에서 무너졌던 이유와 공부 루틴 재설계',
    content: '익숙한 환경에만 매달린 공부 방식이 문제였습니다. 장소, 시간, 복습 방법을 바꾸면서 실전 감각을 회복했던 과정을 정리했습니다.',
    thumbnail: study,
    profile: icon04,
    author: '탈기마스터',
    views: 99,
    likes: 35,
    comments: 6
  },  
  {
    id: 6,
    category: 3,
    date: '2026년 3월 1일',
    title: '스타트업 3번 실패하고 배운 것들',
    content: '창업에 도전한 지 3년이 됐습니다. 그동안 세 번의 창업을 시도했고, 세 번 모두 실패로 끝났습니다.',
    thumbnail: study,
    profile: icon04,
    author: '탈기마스터',
    views: 99,
    likes: 35,
    comments: 6
  },
];

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

            {/* 저번달 베스트 인기글 */}
            <CommunityBestPost title={bestPost.title} content={bestPost.content} date={bestPost.date}
            thumbnail={bestPost.thumbnail} profile={bestPost.profile} author={bestPost.author} views={bestPost.views}
            likes={bestPost.likes} comments={bestPost.comments} isLike={bestPost.isLike} id={bestPost.id}/>

            {/* 실시간 인기글 */}
            <CommunityPopularPostContainer posts={popularPosts} />

            
            <myStyle.ListBgWrap>
                <CommunityPostSearchContainer />

                {/* 래퍼 */}
                {/* 좌측 : 커뮤니티 게시글 */}
                {/* 우측 맞춤 게시글 */}
                <S.Wrapper margintop={"55px"}>
                    <myStyle.PostListAndAiRecommandPostWrapper>
                        <CommunityListContainer></CommunityListContainer>
                        <AiPostListContainer></AiPostListContainer>
                    </myStyle.PostListAndAiRecommandPostWrapper>
                </S.Wrapper>
            </myStyle.ListBgWrap>
        </div>
    );
};

export default CommunityContainer;