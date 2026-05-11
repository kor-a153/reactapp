import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [likes, setLikes] = useState(false);
    const [comments, setComments] = useState([
        { id: 1, author: '사용자 A', date: '2024-01-15', content: '이 글 정말 도움이 되었어요!' },
        { id: 2, author: '사용자 B', date: '2024-01-14', content: '좋은 정보 감사합니다!' }
    ]);
    const [newComment, setNewComment] = useState('');

    // 예시 게시글 데이터
    const postData = {
        1: {
            title: '기초를 피하기 실전에서 해야 할 3가지 개발자 필수지식',
            category: 'TIPS',
            author: '개발자 A',
            date: '2024-01-15',
            views: 5432,
            likesCount: 234,
            commentsCount: 45,
            content: `개발자로서 성장하기 위해서는 기초를 제대로 이해하는 것이 매우 중요합니다. 
                
이 글에서는 실전에서 반드시 알아야 할 3가지 필수 지식에 대해 설명하겠습니다.

1. 자료구조와 알고리즘
자료구조와 알고리즘은 모든 프로그래밍의 기초입니다. 
배열, 링크드 리스트, 트리, 그래프 등의 자료구조를 이해하고,
정렬, 탐색 등의 기본 알고리즘을 숙지하는 것은 필수입니다.

2. 객체 지향 프로그래밍
OOP의 4가지 특징인 캡슐화, 상속, 다형성, 추상화를 이해해야 합니다.
SOLID 원칙을 따르는 것이 좋은 코드를 작성하는 데 도움이 됩니다.

3. 데이터베이스
SQL의 기본 문법과 관계형 데이터베이스의 개념을 이해하는 것이 중요합니다.
인덱스, 정규화, 트랜잭션 등의 개념도 알아두면 좋습니다.

이 3가지를 제대로 이해하면 어떤 언어나 프레임워크를 사용하더라도 
빠르게 적응하고 좋은 코드를 작성할 수 있을 것입니다.`
        },
        2: {
            title: '팀 프로젝트 도 협업하려면 꼭 지켜야 할 코딩 규칙',
            category: 'TIPS',
            author: '개발자 B',
            date: '2024-01-14',
            views: 4521,
            likesCount: 189,
            commentsCount: 32,
            content: `팀 프로젝트에서 여러 개발자가 함께 코드를 작성할 때,
지켜야 할 중요한 코딩 규칙들에 대해 설명합니다.

1. 일관된 코드 스타일 유지
- 들여쓰기는 공백 2칸 또는 4칸으로 통일
- 변수명은 camelCase, 클래스명은 PascalCase 사용
- 함수명은 동작을 나타내는 동사로 시작

2. 주석과 문서화
- 복잡한 로직은 주석으로 설명
- 함수는 파라미터와 반환값을 문서화
- README 파일로 프로젝트 전체 구조 설명

3. 버전 관리 규칙
- commit 메시지는 명확하게 작성
- feature 브랜치에서 작업 후 PR 요청
- 코드 리뷰 후 merge

4. 테스트 작성
- 단위 테스트 작성 필수
- 통합 테스트로 전체 동작 검증
- 테스트 커버리지 80% 이상 유지

이러한 규칙들을 지키면 팀 프로젝트가 훨씬 더 효율적이고 
유지보수하기 쉬워질 것입니다.`
        },
        3: {
            title: '정규직상황 서 온보딩이 나서야 할 구조',
            category: 'TIPS',
            author: '개발자 C',
            date: '2024-01-13',
            views: 3200,
            likesCount: 156,
            commentsCount: 28,
            content: `새로운 팀원이 입사했을 때 효과적인 온보딩 프로세스를 구축하는 방법에 대해
설명하겠습니다.

1. 첫 주
- 개발 환경 셋업 (IDE, 빌드 도구 등)
- 소스 코드 레포지토리 접근 권한 설정
- 팀 문화와 커뮤니케이션 방식 소개

2. 두 번째 주
- 프로젝트 아키텍처 설명
- 주요 컴포넌트 코드 리뷰
- 첫 번째 태스크 할당

3. 첫 달
- 정기적인 1:1 미팅
- 코드 리뷰 피드백 수련
- 팀 프로젝트에 기여

4. 피드백과 평가
- 2주차, 1개월, 3개월 평가
- 개선할 점 및 잘한 점 공유
- 장기 목표 수립`
        }
    };

    const post = postData[id];

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, {
                id: comments.length + 1,
                author: '현재 사용자',
                date: new Date().toISOString().split('T')[0],
                content: newComment
            }]);
            setNewComment('');
        }
    };

    if (!post) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>게시글을 찾을 수 없습니다</h2>
                <button onClick={() => navigate('/community')} style={{ padding: '10px 20px', backgroundColor: '#7c3aed', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    목록으로 돌아가기
                </button>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
            {/* 뒤로가기 버튼 */}
            <button onClick={() => navigate('/community')} style={{ marginBottom: '20px', padding: '8px 16px', backgroundColor: '#f0f0f0', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>
                ← 목록으로 돌아가기
            </button>

            {/* 게시글 헤더 */}
            <div style={{ borderBottom: '2px solid #ddd', paddingBottom: '20px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span style={{ backgroundColor: '#7c3aed', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
                        {post.category}
                    </span>
                </div>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px' }}>
                    {post.title}
                </h1>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '14px' }}>
                    <div>
                        <strong>{post.author}</strong> | {post.date}
                    </div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <span>👁️ {post.views}</span>
                        <span>❤️ {post.likesCount}</span>
                        <span>💬 {comments.length}</span>
                    </div>
                </div>
            </div>

            {/* 게시글 본문 */}
            <div style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '30px', whiteSpace: 'pre-wrap', color: '#333' }}>
                {post.content}
            </div>

            {/* 좋아요 & 공유 버튼 */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #ddd' }}>
                <button 
                    onClick={() => setLikes(!likes)}
                    style={{ 
                        padding: '10px 20px', 
                        backgroundColor: likes ? '#7c3aed' : '#f0f0f0',
                        color: likes ? 'white' : 'black',
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    ❤️ {likes ? '좋아요 취소' : '좋아요'}
                </button>
                <button style={{ padding: '10px 20px', backgroundColor: '#f0f0f0', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>
                    📤 공유하기
                </button>
            </div>

            {/* 댓글 섹션 */}
            <div>
                <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>댓글 ({comments.length})</h2>

                {/* 댓글 작성 */}
                <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="댓글을 입력해주세요"
                        rows="3"
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', boxSizing: 'border-box', marginBottom: '10px', fontFamily: 'inherit' }}
                    />
                    <button 
                        onClick={handleAddComment}
                        style={{ padding: '10px 20px', backgroundColor: '#7c3aed', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        댓글 등록
                    </button>
                </div>

                {/* 댓글 목록 */}
                <div>
                    {comments.map(comment => (
                        <div key={comment.id} style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <strong>{comment.author}</strong>
                                <span style={{ color: '#666', fontSize: '12px' }}>{comment.date}</span>
                            </div>
                            <p style={{ margin: 0, color: '#333' }}>{comment.content}</p>
                            <div style={{ marginTop: '8px', display: 'flex', gap: '10px', fontSize: '12px' }}>
                                <button style={{ background: 'none', border: 'none', color: '#7c3aed', cursor: 'pointer', padding: 0 }}>👍 좋아요</button>
                                <button style={{ background: 'none', border: 'none', color: '#7c3aed', cursor: 'pointer', padding: 0 }}>💬 답댓글</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostDetail;