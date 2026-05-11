import React, { useEffect, useState } from "react";
import MyCommunityPostCard from "./MyCommunityPostCard";
import { useNavigate } from "react-router-dom";
import S from "../styles/MyProfileStyle";

const MyCommunityContainer = () => {
  const [posts, setPosts] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // API 데이터 로드 로직 (테스트를 위해 빈 배열 유지)
    setPosts([]);
  }, []);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(posts.map((post) => post.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleDelete = () => {
    if (selectedIds.length === 0) return alert("삭제할 게시글을 선택해주세요.");
    if (window.confirm(`${selectedIds.length}개의 게시글을 삭제하시겠습니까?`)) {
      setPosts(posts.filter((post) => !selectedIds.includes(post.id)));
      setSelectedIds([]);
    }
  };

  return (
    <S.CommunityContainer>
      <S.HeaderSection>
        <h3>내 커뮤니티 게시글 관리</h3>
        <p>내가 작성한 커뮤니티 게시글을 관리할 수 있습니다.</p>
      </S.HeaderSection>

      {posts.length > 0 ? (
        <>
          <S.ControlBar>
            <S.ControlLeft>
              <div className="all-check-wrapper">
                <input
                  type="checkbox"
                  id="all-check"
                  onChange={handleSelectAll}
                  checked={selectedIds.length === posts.length && posts.length > 0}
                />
                <label htmlFor="all-check">전체 선택</label>
              </div>
              <S.DeleteBtn onClick={handleDelete}>선택 삭제</S.DeleteBtn>
            </S.ControlLeft>
            <S.ControlRight>
              <S.SearchInput placeholder="검색어를 입력하세요." />
            </S.ControlRight>
          </S.ControlBar>

          <S.PostGrid>
            {posts.map((post) => (
              <MyCommunityPostCard
                key={post.id}
                post={post}
                isSelected={selectedIds.includes(post.id)}
                onSelect={() => handleSelectOne(post.id)}
              />
            ))}
          </S.PostGrid>
          {/* 페이지네이션 컴포넌트 추가 위치 */}
        </>
      ) : (
        /* 게시글이 없는 경우 (Empty State) */
        <S.EmptyStateWrapper>
          <S.EmptyTitle>
            아직 작성한 게시글이 없네요.<br />
            <strong>페일로그</strong>의 커뮤니티를 이용해볼까요?
          </S.EmptyTitle>
          <S.EmptySubText>
            실패를 외면하지 않고 기록할 때,<br />
            당신의 강력한 성장 데이터가 됩니다.
          </S.EmptySubText>
          <S.StartButton onClick={() => navigate("/community")}>
            시작하기
          </S.StartButton>
        </S.EmptyStateWrapper>
      )}
    </S.CommunityContainer>
  );
};

export default MyCommunityContainer;