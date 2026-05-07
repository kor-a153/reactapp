import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLogin, setKeepLogin] = useState(false);

  const handleLogin = () => {
    // TODO: 로그인 API 연동
    navigate('/');
  };

  return (
    <>
      <Title>로그인</Title>
      <Subtitle>아이디와 비밀번호를 입력해 서비스를 이용하세요.</Subtitle>

      <InputGroup>
        <Input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputGroup>

      <CheckRow>
        <input
          type="checkbox"
          id="keepLogin"
          checked={keepLogin}
          onChange={(e) => setKeepLogin(e.target.checked)}
        />
        <CheckLabel htmlFor="keepLogin">로그인 상태 유지</CheckLabel>
      </CheckRow>

      <PrimaryButton onClick={handleLogin}>로그인</PrimaryButton>

      <LinksRow>
        <LinkText to="/find-id">아이디 찾기</LinkText>
        <Divider>|</Divider>
        <LinkText to="/reset-password">비밀번호 찾기</LinkText>
        <Divider>|</Divider>
        <SocialIcons>
          <SocialIcon $bg="#FEE500" $color="#000">K</SocialIcon>
          <SocialIcon $bg="#fff" $color="#4285F4" $border="1px solid #ddd">G</SocialIcon>
          <SocialIcon $bg="#03C75A" $color="#fff">N</SocialIcon>
        </SocialIcons>
      </LinksRow>

      <JoinPrompt>아직 계정이 없으신가요?</JoinPrompt>
      <OutlineButton onClick={() => navigate('/join')}>회원가입</OutlineButton>

      <Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</Copyright>
    </>
  );
};

export default LoginContainer;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #222;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: #888;
  margin-bottom: 28px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
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

const CheckRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const CheckLabel = styled.label`
  font-size: 13px;
  color: #555;
  cursor: pointer;
`;

const PrimaryButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #ab47ff;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background: #9333ea;
  }
`;

const LinksRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
`;

const LinkText = styled(Link)`
  font-size: 13px;
  color: #555;
  text-decoration: none;

  &:hover {
    color: #ab47ff;
  }
`;

const Divider = styled.span`
  color: #ccc;
  font-size: 13px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 6px;
`;

const SocialIcon = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  border: ${({ $border }) => $border || 'none'};
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JoinPrompt = styled.p`
  text-align: center;
  font-size: 13px;
  color: #888;
  margin-bottom: 12px;
`;

const OutlineButton = styled.button`
  width: 100%;
  padding: 14px;
  background: transparent;
  color: #ab47ff;
  font-size: 15px;
  font-weight: 700;
  border: 1.5px solid #d9a8ff;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 24px;

  &:hover {
    background: #f9f0ff;
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 11px;
  color: #bbb;
`;
