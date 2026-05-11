// MyProfileContainer.jsx 내부
<HeroSection>
  <S.HeroGrid>
    {/* 왼쪽 메인 배너: HeroBannerComponent 재사용 */}
    <HeroBanner 
      title="페일로그 바로가기" 
      description="페일로그를 작성하고 등록할 수 있어요."
    />

    {/* 오른쪽 퀵 메뉴: QuickMenuCardComponent 세로로 3개 배치 */}
    <S.QuickMenuGroup>
      <QuickMenuCard 
        title="마이 페일로그" 
        description="내가 작성한 로그를 볼 수 있어요." 
        bgColor="#F0F3FF"
      />
      <QuickMenuCard 
        title="좋아요 한 페일로그" 
        description="좋아요 한 게시글을 모아 볼 수 있어요." 
        bgColor="#EBF8FF" 
      />
      <QuickMenuCard 
        title="페일로그 방명록" 
        description="내게 남긴 말을 확인해보세요." 
        bgColor="#EEF2FF" 
      />
    </S.QuickMenuGroup>
  </S.HeroGrid>
</HeroSection>