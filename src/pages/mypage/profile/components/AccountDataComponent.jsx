import React from 'react';
import S from '../styles/MyProfileStyle'; // 경로가 맞는지 꼭 확인하세요!

const AccountDataComponent = ({
  memberEmail,
  memberName,
  memberPhone,
  memberPhoneVerified,
  onEmailChange,
  onPhoneVerify,
  onPasswordChange,
  onUnregister
}) => {
  return (
    <S.AccountDataCard>
      <S.AccountList>
        {/* 아이디 섹션 */}
        <S.AccountItem>
          <div className="ItemLabel">아이디</div>
          <div className="ItemContent">
            <span className="EmailText">{memberEmail || 'test@example.com'}</span>
            <p className="SubNotice">
              • 소셜 계정으로 가입된 유저의 경우, 이메일은 별도로 변경 안됨을 알려드립니다.<br/>
              • 본인의 연동된 계정 소셜 계정에서 변경해 주세요.
            </p>
          </div>
          <button className="ItemBtn" onClick={onEmailChange}>연락처 변경</button>
        </S.AccountItem>

        {/* 본인인증 섹션 */}
        <S.AccountItem>
          <div className="ItemLabel">본인인증</div>
          <div className="ItemContent">
            {memberPhoneVerified === 1 ? (
              <div className="VerifiedStatus">
                <span className="StatusBadge">인증됨</span>
                <span className="UserInfoText">{memberName} / {memberPhone}</span>
              </div>
            ) : (
              <span className="UnverifiedText">인증이 필요합니다.</span>
            )}
            <p className="SubNotice">• 본인 명의 휴대폰 번호를 변경하려면, 다시 본인인증을 진행하셔야 합니다.</p>
          </div>
          <button className="ItemBtn" onClick={onPhoneVerify}>
            {memberPhoneVerified === 1 ? '실명수정' : '인증하기'}
          </button>
        </S.AccountItem>

        {/* 비밀번호 변경 섹션 */}
        <S.AccountItem>
          <div className="ItemLabel">비밀번호 변경</div>
          <div className="ItemContent"></div>
          <button className="ItemBtn" onClick={onPasswordChange}>변경</button>
        </S.AccountItem>

        {/* 회원탈퇴 섹션 */}
        <S.AccountItem>
          <div className="ItemLabel">회원탈퇴</div>
          <div className="ItemContent"></div>
          <button className="ItemBtn UnregisterBtn" onClick={onUnregister}>탈퇴하기</button>
        </S.AccountItem>
      </S.AccountList>
    </S.AccountDataCard>
  );
};

export default AccountDataComponent;