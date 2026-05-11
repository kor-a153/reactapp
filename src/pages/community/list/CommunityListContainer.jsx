import React, { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import S, { colorCSS } from '../style';
import styled from 'styled-components';
import Posts from './components/Posts';
import Page from './components/Page';
import { flexCenterRow } from '../../../styles/common';
import useSearchStore from './useSearchStore';

const myStyle = {}

myStyle.wrapper = styled.div`
    width: 984px;
    /* height: 1434px;
    background-color: ${colorCSS["faillog_white"]};
    border-radius: 15px; */
`

myStyle.pageWrapper = styled.div`
    width: 100%;
    height: 136px;
    ${flexCenterRow}
`

const CommunityListContainer = () => {

    const {order1, order2, category, page, content, setPage} = useSearchStore();

    const isMounted = useRef(false);

    const a = () => {
        console.log("a");// 마운트 시 1회 실행
        //여기다 SearchStore의 초깃값으로 벡앤드에 전달. 
    };

    const b = () => {
         console.log("b");// searchStore 값 변경 시 실행
         //여기다 SearchStore의 값으로 백앤드에 요청값 전달. 
    };

    useEffect(() => {
        a();
    }, []);

    useEffect(() => {
        if (!isMounted.current) { isMounted.current = true; return; }
        b();
    }, [order1, order2, category, page, content]);

    const postData = [
  {
    id: 1,
    category: 0,
    title: '리액트 프로젝트 처음 시작하는 분들께 드리는 팁',
    content: '리액트를 처음 배우는 분들이 자주 겪는 어려움과 그 해결 방법을 공유합니다. 컴포넌트 구조 설계부터 상태 관리까지 단계별로 설명해 드릴게요.',
    date: '2026.05.08',
    thumbnail: 'https://i.pravatar.cc/150?img=1',
    profile: 'https://i.pravatar.cc/150?img=5',
    author: '홍길동',
    views: 1240,
    likes: 87,
    comments: 34,
  },
  {
    id: 2,
    category: 1,
    title: 'styled-components에서 theme을 사용하는 방법이 궁금합니다',
    content: 'ThemeProvider를 이용해서 전역 테마를 설정하고 싶은데 어떻게 해야 하는지 잘 모르겠어요. 예시 코드와 함께 설명해 주시면 감사하겠습니다.',
    date: '2026.05.07',
    thumbnail: 'https://i.pravatar.cc/150?img=2',
    profile: 'https://i.pravatar.cc/150?img=5',
    author: '김철수',
    views: 538,
    likes: 22,
    comments: 11,
  },
  {
    id: 3,
    category: 2,
    title: '2026년 프론트엔드 개발자 취업 트렌드 정리',
    content: '올해 채용 공고를 분석한 결과, React와 TypeScript 역량이 핵심 요구사항으로 자리잡았습니다. 포트폴리오 구성 전략도 함께 소개합니다.',
    date: '2026.05.06',
    thumbnail: 'https://i.pravatar.cc/150?img=3',
    profile: 'https://i.pravatar.cc/150?img=5',
    author: '이영희',
    views: 3021,
    likes: 215,
    comments: 98,
  },
  {
    id: 4,
    category: 3,
    title: '팀 프로젝트 멤버 모집합니다 — 커뮤니티 플랫폼 개발',
    content: 'React, Node.js 기반의 커뮤니티 서비스를 함께 만들어 갈 팀원을 모집합니다. 프론트 2명, 백엔드 1명을 찾고 있으며 주 2회 온라인 미팅을 진행합니다.',
    date: '2026.05.05',
    thumbnail: 'https://i.pravatar.cc/150?img=4',
    profile: 'https://i.pravatar.cc/150?img=5',
    author: '박민준',
    views: 892,
    likes: 56,
    comments: 27,
  },
  {
    id: 5,
    category: 4,
    title: '부트캠프 6개월 수료 후기 — 솔직하게 적어봤습니다',
    content: '비전공자로 시작해서 6개월간 부트캠프를 마치고 느낀 점을 솔직하게 공유합니다. 힘들었던 순간과 보람찼던 순간 모두 담았습니다.',
    date: '2026.05.04',
    thumbnail: 'https://i.pravatar.cc/150?img=5',
    profile: 'https://i.pravatar.cc/150?img=5',
    author: '최수연',
    views: 4780,
    likes: 341,
    comments: 152,
  },
  {
    id: 6,
    category: 0,
    title: '개발하면서 들으면 좋은 플레이리스트 추천',
    content: '집중력을 높여주는 Lo-Fi, 재즈, 클래식 등 다양한 장르의 코딩 BGM 플레이리스트를 공유합니다. 각자 즐겨 듣는 음악도 댓글로 추천해 주세요!',
    date: '2026.05.03',
    thumbnail: 'https://i.pravatar.cc/150?img=6',
    profile: 'https://i.pravatar.cc/150?img=5',
    author: '정다은',
    views: 2103,
    likes: 178,
    comments: 63,
  },
];

    const handleChange = (page) => {
        console.log(page);
        setPage(page)
    }

    return (
        <myStyle.wrapper>
            <Posts postData={postData} />
            <myStyle.pageWrapper>
                <Page minPage={1} maxPage={12} onPageChange={handleChange} page={page}/>
            </myStyle.pageWrapper>
        </myStyle.wrapper>
    );

};

export default CommunityListContainer;