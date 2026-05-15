import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../styles/ResetPassWordContainerStyle';

const ResetPassWordContainer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);

  const handleFind = () => {
    // TODO: 비밀번호 찾기 API — 마스킹된 힌트 반환
    setResult('Se**put**790');
  };

  if (result) {
    return (
      <>
        <S.Title>비밀번호 확인</S.Title>
        <S.Subtitle>비밀번호를 확인하세요.</S.Subtitle>

        <S.HintBox>
          고객님의 비밀번호는 : <S.HintValue>{result}</S.HintValue>입니다.
        </S.HintBox>

        <S.PrimaryButton onClick={() => navigate('/login')} style={{ marginTop: 24 }}>
          로그인 페이지로
        </S.PrimaryButton>
      </>
    );
  }

  return (
    <>
      <S.Title>비밀번호 찾기</S.Title>
      <S.Subtitle>가입한 이메일 주소를 입력해 비밀번호를 확인하세요.</S.Subtitle>

      <S.FieldLabel>이메일</S.FieldLabel>
      <S.Input
        type="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <S.PrimaryButton
        onClick={handleFind}
        $disabled={!email}
        style={{ marginTop: 24 }}
      >
        비밀번호 찾기
      </S.PrimaryButton>

      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );
};

export default ResetPassWordContainer;
