import styled from "styled-components";

const S = {};

// 1. Base Layout
S.MyPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
  background-color: #ffffff;
`;

// 2. Hero Section (Top)
S.HeroSectionContainer = styled.section`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
`;

S.HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 648px 424px; 
  gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0 20px;
  }
`;

S.HeroBanner = styled.div`
  width: 648px;
  height: 730px;
  background-color: #E8EBFD;
  border-radius: 30px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  .TextGroup {
    h3 { font-size: 18px; color: #5D5FEF; margin-bottom: 8px; font-weight: 600; }
    h2 { font-size: 40px; font-weight: 800; color: #2D3494; margin-bottom: 12px; }
    p { font-size: 18px; color: #4B5563; font-weight: 500; }
  }

  @media (max-width: 1100px) {
    width: 100%;
    height: auto;
    aspect-ratio: 648 / 730;
  }
`;

S.GraphicPlaceholder = styled.div`
  margin-top: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  .Box { aspect-ratio: 1; background: rgba(255, 255, 255, 0.5); border-radius: 15px; }
`;

S.QuickMenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

S.QuickCard = styled.div`
  width: 424px;
  height: 236px;
  background-color: ${(props) => props.bgColor || "#F1F5F9"};
  border-radius: 24px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;

  .CardText {
    h3 { font-size: 14px; color: #4B5563; margin-bottom: 4px; }
    h2 { font-size: 22px; font-weight: 800; color: #1E293B; margin-bottom: 8px; }
    span { font-size: 14px; color: #64748B; line-height: 1.4; }
  }

  .IconCircle {
    position: absolute;
    right: 25px;
    width: 65px;
    height: 65px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }

  @media (max-width: 1100px) {
    width: 100%;
    height: auto;
    aspect-ratio: 424 / 236;
  }
`;

// 3. Info Management Section (Middle)
S.InfoManagementSection = styled.section` 
  padding: 40px 20px; 
`;

S.InfoGridContainer = styled.div` 
  display: grid; 
  grid-template-columns: 1fr 2fr; 
  gap: 30px; 

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

// 3-1. Account Data Card (이미지 image_823101.jpg 기반 정밀 수정)
S.AccountDataCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 50px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
`;

S.AccountList = styled.div`
  display: flex;
  flex-direction: column;
`;

S.AccountItem = styled.div`
  display: grid;
  /* 버튼이 가장 오른쪽 끝에 붙도록 1fr 할당 */
  grid-template-columns: 120px 1fr 100px; 
  align-items: flex-start;
  padding: 30px 0;
  border-bottom: 1px solid #f1f1f1;

  &:last-child { border-bottom: none; }

  .ItemLabel {
    font-size: 15px;
    color: #333; 
    font-weight: 700;
    margin-top: 2px;
  }

  .ItemContent {
    display: flex;
    flex-direction: column;
    padding-left: 20px;

    .EmailText, .UserInfoText {
      font-size: 16px;
      font-weight: 800;
      color: #333;
    }

    .VerifiedStatus {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .StatusBadge {
      background: #7E3AF2;
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }

    .SubNotice {
      font-size: 13px;
      color: #94A3B8;
      margin-top: 10px;
      line-height: 1.6;
      letter-spacing: -0.3px;
    }
  }

  .ItemBtn {
    background: none;
    border: none;
    color: #94A3B8;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-align: right;
    margin-top: 2px;
    white-space: nowrap;

    &:hover {
      color: #5D5FEF;
      text-decoration: underline;
    }
    
    &.UnregisterBtn:hover {
      color: #ef4444;
    }
  }
`;

// 3-2. Profile Card & Nickname Edit
S.ProfileCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  height: fit-content;

  .profileImageContainer {
    position: relative;
    margin-bottom: 25px;

    .profileImageCircle {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #F0F3FF;
      img { width: 100%; height: 100%; object-fit: cover; }
    }

    .image-edit-btn {
      position: absolute;
      bottom: 0;
      right: 0;
      background: #ffffff;
      border: 1px solid #ddd;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      cursor: pointer;
    }
  }

  .nickname-area {
    width: 100%;
    margin-bottom: 15px;

    .display-mode {
      display: flex;
      gap: 10px;
      
      .nickname-input {
        flex: 1;
        border: none;
        background: #F8FAFC;
        padding: 10px 15px;
        border-radius: 10px;
        font-weight: 700;
        color: #333;
        outline: none;
      }

      .nickname-change-btn {
        background: none;
        border: 1px solid #E2E8F0;
        padding: 0 15px;
        border-radius: 10px;
        font-size: 13px;
        color: #64748B;
        cursor: pointer;
        &:hover { background: #F1F5F9; }
      }
    }
  }

  .profile-card-footer-text {
    font-size: 12px;
    color: #aaa;
    text-align: center;
  }
`;

S.NicknameInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  .edit-input {
    width: 100%;
    border: 2px solid #5D5FEF;
    padding: 10px 15px;
    border-radius: 10px;
    font-weight: 700;
    outline: none;
  }

  .EditActions {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    
    button {
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
    }
    .SaveBtn { background: #5D5FEF; color: white; border: none; }
    .CancelBtn { background: #f1f1f1; color: #666; border: none; }
  }
`;

// 4. Community Section (Bottom)
S.CommunitySection = styled.div` 
  padding: 0 20px 50px; 
  border-top: 1px solid #f5f5f5; 
  margin-top: 40px; 
`;

// 5. My Community Post Card (Grid & Card Item)
S.PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

S.CardWrapper = styled.div`
  border: 1px solid ${props => props.isSelected ? '#8b5cf6' : '#eee'};
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  box-shadow: ${props => props.isSelected ? '0 4px 12px rgba(139, 92, 246, 0.15)' : 'none'};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  }
`;

S.ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  background: #f5f5f5;
`;

S.Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

S.CheckboxOverlay = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  
  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #8b5cf6; /* 체크박스 포인트 컬러 */
  }
`;

S.TagLabel = styled.span`
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(93, 95, 239, 0.9); /* 서비스 테마색으로 변경 */
  color: #fff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
`;

S.PostContentSection = styled.div`
  padding: 18px;
`;

S.PostTime = styled.span`
  font-size: 12px;
  color: #94a3b8;
  display: block;
  margin-bottom: 8px;
  text-align: right;
`;

S.PostTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 10px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

S.PostSummary = styled.p`
  font-size: 13px;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 18px;
  height: 39px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

S.CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f1f5f9;
`;

S.AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

S.AuthorIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #e2e8f0;
  border-radius: 50%;
  border: 1px solid #f1f5f9;
`;

S.AuthorName = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #475569;
`;

S.PostStats = styled.div`
  display: flex;
  gap: 12px;
`;

S.StatItem = styled.span`
  font-size: 12px;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 4px;
`;

// --- 기존 스타일들 하단에 이어서 추가 ---

// 6. Community Management Section
S.CommunityContainer = styled.div`
  width: 100%;
  margin-top: 60px;
`;

S.HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 50px;
  h3 { font-size: 26px; font-weight: 800; color: #1e293b; margin-bottom: 12px; }
  p { font-size: 15px; color: #64748b; }
`;

S.ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid #f1f5f9;
  margin-bottom: 25px;
`;

S.ControlLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .all-check-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    input { width: 18px; height: 18px; accent-color: #5d5fef; }
    label { font-size: 14px; font-weight: 600; color: #475569; }
  }
`;

S.DeleteBtn = styled.button`
  background: #fff1f2;
  color: #f43f5e;
  border: 1px solid #ffe4e6;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  &:hover { background: #ffe4e6; }
`;

S.ControlRight = styled.div` display: flex; gap: 12px; `;

S.SearchInput = styled.input`
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  font-size: 14px;
  width: 220px;
  &:focus { border-color: #5d5fef; outline: none; }
`;

// 7. Empty State (중요: S 객체 내부로 수정됨)
S.EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
`;

S.EmptyTitle = styled.h4`
  font-size: 22px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 20px;
  strong { color: #5d5fef; } /* FailLog 포인트 컬러로 통일 */
`;

S.EmptySubText = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.6;
  margin-bottom: 40px;
`;

S.StartButton = styled.button`
  background: #5d5fef;
  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover { transform: scale(1.05); }
`;

export default S;