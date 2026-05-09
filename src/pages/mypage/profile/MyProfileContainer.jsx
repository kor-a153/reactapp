import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import PageS from './styles/MyPageWrapper'; 
import HeroS from './styles/HeroSectionStyles'; 
import InfoS from './styles/InfoManagementStyles'; 
import CommS from './styles/CommunityStyles'; 

import ProfileCardComponent from './components/ProfileCardComponent';
import AccountDataComponent from './components/AccountDataComponent';
import MyCommunityContainer from './components/MyCommunityContainer';

const MyProfileContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. 회원 정보 상태
  const [memberInfo, setMemberInfo] = useState({
    memberNickname: 'test',
    memberProfileImageUrl: '', 
    memberEmail: 'test@example.com',
    memberName: 'test',
    memberPhone: '010-1234-5678',
    memberPhoneVerified: 1 
  });

  // 2. 히어로 섹션 데이터
  const heroData = [
    {
      id: "fail-logs",
      path: "/fail-logs",
      subTitle: "페일로그를 작성해보고 싶다면",
      title: "페일로그 바로가기",
      description: "실패를 기록하고 성장의 발판으로 삼으세요.",
      bgColor: "#E8EBFD"
    },
    {
      id: "mylog",
      path: "/my-page/my-fail-logs",
      subTitle: "내가 작성한 로그를 보고 싶다면",
      title: "마이 페일로그",
      description: "내가 작성한 로그를 볼 수 있어요.",
      bgColor: "#F0F3FF"
    },
    {
      id: "likes",
      path: "/my-page/likes",
      subTitle: "참고하고 싶은 게시글을 모아둔",
      title: "좋아요 한 페일로그",
      description: "좋아요 한 게시글을 모아 볼 수 있어요.",
      bgColor: "#EBF8FF"
    },
    {
      id: "guestbook",
      path: "/my-page/guestbook",
      subTitle: "다른 사람들과 소통하는",
      title: "페일로그 방명록",
      description: "내게 남긴 말을 확인해보세요.",
      bgColor: "#EEF2FF"
    }
  ];

  // 3. 현재 경로에 따른 배너 필터링
  const mainContent = heroData.find(item => item.path === location.pathname) || heroData[0];
  const quickMenus = heroData.filter(item => item.id !== mainContent.id);

  const handleNicknameChange = () => console.log("닉네임 변경");
  const handleImageChange = () => console.log("이미지 업로드");
  const handlePasswordChange = () => console.log("비밀번호 변경 페이지 이동");

  return (
    <PageS.MainWrapper>
      {/* 상단 히어로 섹션 */}
      <HeroS.HeroSectionContainer>
        <HeroS.HeroGrid>
          {/* 왼쪽 메인 배너 영역 */}
          <HeroS.HeroBanner 
            onClick={() => navigate(mainContent.path)}
            style={{ backgroundColor: mainContent.bgColor }}
          >
            <div className="TextGroup">
              <h3>{mainContent.subTitle}</h3>
              <h2>{mainContent.title}</h2>
              <p>{mainContent.description}</p>
            </div>
            <HeroS.GraphicPlaceholder>
              <div className="Box" /><div className="Box" /><div className="Box" />
            </HeroS.GraphicPlaceholder>
          </HeroS.HeroBanner>

          {/* 오른쪽 퀵 메뉴 그룹 */}
          <HeroS.QuickMenuGroup>
            {quickMenus.map((menu) => (
              <HeroS.QuickCard 
                key={menu.id} 
                bgColor={menu.bgColor}
                onClick={() => navigate(menu.path)}
              >
                <div className="CardText">
                  <h3>{menu.subTitle}</h3>
                  <h2>{menu.title}</h2>
                  <span>{menu.description}</span>
                </div>
                <div className="IconCircle" />
              </HeroS.QuickCard>
            ))}
          </HeroS.QuickMenuGroup>
        </HeroS.HeroGrid>
      </HeroS.HeroSectionContainer>

      {/* 개인 정보 관리 섹션 */}
      <InfoS.InfoManagementSection>
        <InfoS.InfoGridContainer>
          <ProfileCardComponent 
            memberNickname={memberInfo.memberNickname}
            memberProfileImageUrl={memberInfo.memberProfileImageUrl}
            onNicknameChange={handleNicknameChange}
            onImageChange={handleImageChange}
          />
          <AccountDataComponent 
            memberEmail={memberInfo.memberEmail}
            memberName={memberInfo.memberName}
            memberPhone={memberInfo.memberPhone}
            memberPhoneVerified={memberInfo.memberPhoneVerified}
            onPasswordChange={handlePasswordChange}
          />
        </InfoS.InfoGridContainer>
      </InfoS.InfoManagementSection>

      {/* 내 커뮤니티 게시글 관리 */}
      <CommS.CommunitySection>
        <MyCommunityContainer />
      </CommS.CommunitySection>
    </PageS.MainWrapper>
  );
};

export default MyProfileContainer;