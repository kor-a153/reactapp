import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
        <Title>비밀번호 확인</Title>
        <Subtitle>비밀번호를 확인하세요.</Subtitle>

        <HintBox>
          고객님의 비밀번호는 : <HintValue>{result}</HintValue>입니다.
        </HintBox>

        <PrimaryButton onClick={() => navigate('/login')} style={{ marginTop: 24 }}>
          로그인 페이지로
        </PrimaryButton>
      </>
    );
  }

  return (
    <>
      <Title>비밀번호 찾기</Title>
      <Subtitle>가입한 이메일 주소를 입력해 비밀번호를 확인하세요.</Subtitle>

      <FieldLabel>이메일</FieldLabel>
      <Input
        type="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <PrimaryButton
        onClick={handleFind}
        $disabled={!email}
        style={{ marginTop: 24 }}
      >
        비밀번호 찾기
      </PrimaryButton>

      <Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</Copyright>
    </>
  );
};

export default ResetPassWordContainer;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #222;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: #888;
  margin-bottom: 24px;
`;

const FieldLabel = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: #444;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 13px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    border-color: #ab47ff;
  }
`;

const HintBox = styled.div`
  padding: 16px;
  background: #f9f0ff;
  border-radius: 8px;
  font-size: 14px;
  color: #555;
  text-align: center;
`;

const HintValue = styled.span`
  font-weight: 700;
  color: #ab47ff;
`;

const PrimaryButton = styled.button`
  width: 100%;
  padding: 15px;
  background: ${({ $disabled }) => ($disabled ? '#d8a8ff' : '#ab47ff')};
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  margin-bottom: 16px;

  &:hover {
    background: ${({ $disabled }) => ($disabled ? '#d8a8ff' : '#9333ea')};
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 11px;
  color: #bbb;
  margin-top: 8px;
`;
