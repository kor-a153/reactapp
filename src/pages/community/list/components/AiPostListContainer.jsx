import React from 'react';
import styled from 'styled-components';
import S, { boxShadow, colorCSS } from '../../style';
import AiPost from './AiPost';
import aiImage from '../../resources/ai_image.svg';

const posts = [
  {
    id: 1,
    date: "2026년 03월 03일",
    category: 0,
    title: "처음부터 서비스 방향을 너무 넓게 잡아서 실패했던 기록기록의 기록이다ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
    profile: 'https://i.pravatar.cc/150?img=5',
    author: "필기마스터",
    views: 1240,
    likes: 35,
    comments: 6,
  },
  {
    id: 2,
    date: "2026년 03월 03일",
    category: 1,
    title: "시험 직전 불안이 심해질 때 내가 했던 복기 루틴 3가지",
    profile: 'https://i.pravatar.cc/150?img=5',
    author: "필기마스터",
    views: 45,
    likes: 35,
    comments: 6,
  },
  {
    id: 3,
    date: "2026년 03월 03일",
    category: 2,
    title: "시험 직전 불안이 심해질 때 내가 했던 복기 루틴 3가지",
    profile: 'https://i.pravatar.cc/150?img=5',
    author: "필기마스터",
    views: 45,
    likes: 35,
    comments: 6,
  },
];

const AiPostListContainer = () => {
  return (
    <Wrapper>
      <Header>
        <TitleRow>
          <S.Span size="h7Bold" color="faillog-black">맞춤 게시글</S.Span>
          <img src={aiImage} alt="ai" height={24} />
        </TitleRow>
        <S.Span size="h10Regular" color="faillog_gray9">
          최근 작성 글을 바탕으로, 당신과 유사한 글을 선별했습니다.
        </S.Span>
      </Header>
      <PostList>
        {posts.map(post => (
          <AiPost
            key={post.id}
            date={post.date}
            category={post.category}
            title={post.title}
            profile={post.profile}
            author={post.author}
            views={post.views}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </PostList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 312px;
  height: 536px;
  background-color: ${colorCSS["faillog_white"]};
  border-radius: 15px;
  padding: 6px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${boxShadow["boxBasic"]}
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 7px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const PostList = styled.div`
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default AiPostListContainer;
