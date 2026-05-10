import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './styles/HeroSectionStyles'; 

const HeroRotationComponent = ({ mainContent }) => {
  const navigate = useNavigate();

  if (!mainContent) return null;

  return (
    <S.HeroSectionContainer>
      <S.HeroGrid>
        {/* 왼쪽 메인 배너 */}
        <S.HeroBanner 
          onClick={() => navigate(mainContent.path)}
          style={{ backgroundColor: mainContent.bgColor }}
        >
          <div className="TextGroup">
            <h3>{mainContent.subTitle}</h3>
            <h2>{mainContent.title}</h2>
            <p>{mainContent.description}</p>
          </div>
          <S.MainGraphic>
             <img src={mainContent.img} alt="메인 배너 이미지" />
          </S.MainGraphic>
        </S.HeroBanner>

        {/* 오른쪽 퀵 메뉴: 독립 컴포넌트로 배치 */}
        <S.QuickMenuGroup>
          {/* 1. 마이 페일로그 */}
          <S.MyLogCard onClick={() => navigate('/my-page/fail-logs')}>
            <div className="CardText">
              <h3>내가 작성한 로그를 보고 싶다면</h3>
              <h2>마이 페일로그</h2>
              <span>내가 작성한 로그를 볼 수 있어요.</span>
            </div>
            <S.CardIcon>
              <img src={require('./resources/my-fail-log.png')} alt="마이 페일로그" />
            </S.CardIcon>
          </S.MyLogCard>

          {/* 2. 좋아요 한 페일로그 */}
          <S.LikesCard onClick={() => navigate('/my-page/likes')}>
            <div className="CardText">
              <h3>참고하고 싶은 게시글을 모아둔</h3>
              <h2>좋아요 한 페일로그</h2>
              <span>좋아요 한 게시글을 모아 볼 수 있어요.</span>
            </div>
            <S.CardIcon>
              <img src={require('./resources/likes.png')} alt="좋아요 한 페일로그" />
            </S.CardIcon>
          </S.LikesCard>

          {/* 3. 방명록 */}
          <S.GuestBookCard onClick={() => navigate('/my-page/guestbook')}>
            <div className="CardText">
              <h3>다른 사람들과 소통하는</h3>
              <h2>페일로그 방명록</h2>
              <span>내게 남긴 말을 확인해보세요.</span>
            </div>
            <S.CardIcon>
              <img src={require('./resources/guestbook.png')} alt="방명록" />
            </S.CardIcon>
          </S.GuestBookCard>
        </S.QuickMenuGroup>
      </S.HeroGrid>
    </S.HeroSectionContainer>
  );
};

export default HeroRotationComponent;