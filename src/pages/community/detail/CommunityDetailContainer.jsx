import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { boxShadow, colorCSS } from '../style';
import PostHeader from './components/PostHeader';
import icon04 from '../resources/icon04.png';
import Content from './components/Content';
import ImagesContainer from './components/ImagesContainer';
import AuthorInfo from './components/AuthorInfo';
import Middle from './components/Middle';

const postData = {
    category: 0,
    title: '기출만 파다가 실전에서 백지 된 썰. 공부 환경부터 바꾸고 나서니 변화가 생긴 썰',
    profile: icon04,
    author: '취준마스터',
    views: 4579,
    date: '2026-03-05',
    timeAgo: '10분 전',
};

const CommunityDetailContainer = () => {
    const {id} = useParams()
    return (
    <Container>
        <Wrapper>
            {/* 제목 헤더 */}
            <PostHeader
                category={postData.category}
                title={postData.title}
                profile={postData.profile}
                author={postData.author}
                views={postData.views}
                date={postData.date}
                timeAgo={postData.timeAgo}
            />
            <Divider />

            {/* 내용 */}
            <Content />

            {/* 첨부이미지 목록 */}
            <ImagesContainer />
            <Divider />

            {/* 작성자 정보 */}
            <AuthorInfo
                profile={postData.profile}
                author="취준마스터"
                postCount={24}
                faillogCount={18}
                commentCount={136}
            />
            <Divider />

            {/* 중앙(목록으로,좋아요,메뉴버튼컨테이너) */}
            <Middle />

        </Wrapper>
    </Container>
    );
};

const Container = styled.div`
    width: 100%;
    background-color: ${colorCSS["faillog-sector-gray"]};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Divider = styled.hr`
    width: 1268px;
    border: none;
    border-top: 1px solid ${colorCSS["faillog_gray4"]};
    margin: 0;
`

const Wrapper = styled.div`
    width: 1320px;
    margin-top: 63px;
    margin-bottom: 101px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colorCSS["faillog_white"]};
    border-radius: 15px;
    ${boxShadow["boxBasic"]}
`

export default CommunityDetailContainer;