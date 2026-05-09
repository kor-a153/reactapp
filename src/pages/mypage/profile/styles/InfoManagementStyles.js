import styled from "styled-components";

const S = {};

S.InfoManagementSection = styled.section` padding: 40px 20px; `;
S.InfoGridContainer = styled.div` 
  display: grid; 
  grid-template-columns: 1fr 2fr; 
  gap: 30px; 
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

S.AccountDataCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 50px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
`;

S.AccountItem = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 100px; 
  align-items: flex-start;
  padding: 30px 0;
  border-bottom: 1px solid #f1f1f1;
  .ItemLabel { font-size: 15px; font-weight: 700; color: #333; }
  .ItemContent { 
    padding-left: 20px;
    .EmailText, .UserInfoText { font-size: 16px; font-weight: 800; color: #333; }
    .StatusBadge { background: #7E3AF2; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; }
  }
  .ItemBtn { background: none; border: none; color: #94A3B8; cursor: pointer; text-align: right; }
`;

S.ProfileCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  .profileImageCircle { width: 120px; height: 120px; border-radius: 50%; overflow: hidden; }
`;

export default S;