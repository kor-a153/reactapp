import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FindIdContainer = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState(null);

  const handleFindId = () => {
    // TODO: 아이디 찾기 API
    setResult('user****@example.com');
  };

  return (
    <>
      <Title>아이디 찾기</Title>
      <Subtitle>이름과 전화번호를 입력해 아이디를 찾으세요.</Subtitle>

      <FieldLabel>이름</FieldLabel>
      <Input
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FieldLabel style={{ marginTop: 16 }}>전화번호</FieldLabel>
      <Input
        type="tel"
        placeholder="전화번호를 입력하세요"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {result && (
        <ResultBox>
          <ResultLabel>고객님의 아이디는</ResultLabel>
          <ResultValue>{result}</ResultValue>
          <ResultLabel>입니다.</ResultLabel>
        </ResultBox>
      )}

      {!result ? (
        <PrimaryButton
          onClick={handleFindId}
          $disabled={!name || !phone}
          style={{ marginTop: 24 }}
        >
          아이디 찾기
        </PrimaryButton>
      ) : (
        <PrimaryButton onClick={() => navigate('/login')} style={{ marginTop: 24 }}>
          로그인 페이지로
        </PrimaryButton>
      )}

      <Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</Copyright>
    </>
  );
};

export default FindIdContainer;

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

const ResultBox = styled.div`
  margin-top: 24px;
  padding: 16px;
  background: #f9f0ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
`;

const ResultLabel = styled.span`
  font-size: 14px;
  color: #555;
`;

const ResultValue = styled.span`
  font-size: 15px;
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
