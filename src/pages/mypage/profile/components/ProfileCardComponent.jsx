import React, { useState } from 'react';
import S from '../styles/MyProfileStyle'; // 스타일 경로 확인 필수

const ProfileCardComponent = ({
  memberNickname,
  memberProfileImageUrl,
  onNicknameChange,
  onImageChange
}) => {
  // 수정 모드 여부 상태 관리
  const [isEditing, setIsEditing] = useState(false);
  // 입력 중인 임시 닉네임 관리
  const [tempNickname, setTempNickname] = useState(memberNickname || '');

  const profileSrc = memberProfileImageUrl || '/default.jpg';

  // 저장 버튼 클릭 시
  const handleSave = () => {
    if (onNicknameChange) {
      onNicknameChange(tempNickname);
    }
    setIsEditing(false);
  };

  // 취소 버튼 클릭 시
  const handleCancel = () => {
    setTempNickname(memberNickname);
    setIsEditing(false);
  };

  return (
    <S.ProfileCard>
      {/* 1. 프로필 이미지 영역 */}
      <div className="profileImageContainer">
        <div className="profileImageCircle">
          <img src={profileSrc} alt="프로필" />
        </div>
        <button 
          className="image-edit-btn" 
          onClick={onImageChange}
          type="button"
        >
          📸
        </button>
      </div>

      {/* 2. 닉네임 변경 영역 (이미지 시안 반영) */}
      <div className="nickname-area">
        {!isEditing ? (
          <div className="display-mode">
            <input 
              type="text"
              className="nickname-input"
              value={memberNickname ? `${memberNickname}님` : '닉네임을 설정해주세요.'}
              readOnly
            />
            <button 
              className="nickname-change-btn"
              onClick={() => setIsEditing(true)}
              type="button"
            >
              변경
            </button>
          </div>
        ) : (
          <S.NicknameInputGroup>
            <input 
              type="text" 
              className="edit-input"
              value={tempNickname} 
              onChange={(e) => setTempNickname(e.target.value)}
              autoFocus
            />
            <div className="EditActions">
              <button className="SaveBtn" onClick={handleSave}>저장</button>
              <button className="CancelBtn" onClick={handleCancel}>취소</button>
            </div>
          </S.NicknameInputGroup>
        )}
      </div>

      {/* 3. 하단 안내 텍스트 */}
      <p className="profile-card-footer-text">
        * FailLog에서 사용할 내 프로필 이미지를 설정해주세요.
      </p>
    </S.ProfileCard>
  );
};

export default ProfileCardComponent;