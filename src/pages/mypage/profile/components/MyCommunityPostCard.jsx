import React from 'react';
import S from '../styles/MyProfileStyle'; // 경로 확인 필수

const MyCommunityPostCard = ({ post, isSelected, onSelect }) => {
  const { tag, title, summary, author, date, likes, comments, imageUrl } = post;

  return (
    <S.CardWrapper isSelected={isSelected}>
      {/* 1. 이미지 및 체크박스 영역 */}
      <S.ImageSection>
        <S.Thumbnail src={imageUrl || '/default-thumbnail.png'} alt={title} />
        <S.CheckboxOverlay>
          <input 
            type="checkbox" 
            checked={isSelected} 
            onChange={onSelect} 
          />
        </S.CheckboxOverlay>
        <S.TagLabel>{tag}</S.TagLabel>
      </S.ImageSection>

      {/* 2. 텍스트 정보 영역 */}
      <S.PostContentSection onClick={onSelect}>
        <S.PostTime>{date}</S.PostTime>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostSummary>{summary}</S.PostSummary>
        
        {/* 3. 푸터 (작성자 및 통계) */}
        <S.CardFooter>
          <S.AuthorInfo>
            <S.AuthorIcon />
            <S.AuthorName>{author}</S.AuthorName>
          </S.AuthorInfo>
          <S.PostStats>
            <S.StatItem>❤️ {likes}</S.StatItem>
            <S.StatItem>💬 {comments}</S.StatItem>
          </S.PostStats>
        </S.CardFooter>
      </S.PostContentSection>
    </S.CardWrapper>
  );
};

export default MyCommunityPostCard;