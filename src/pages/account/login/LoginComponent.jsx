import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../styles/LoginComponentStyle';
import useAuthStore from '../../../store/authStore';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

const LoginComponent = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useAuthStore();

  const [memberEmail, setMemberEmail] = useState('');
  const [memberPassword, setMemberPassword] = useState('');
  const [keepLogin, setKeepLogin] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!memberEmail) errs.memberEmail = '이메일을 입력하세요.';
    else if (!emailRegex.test(memberEmail)) errs.memberEmail = '이메일 양식에 맞게 입력해주세요.';
    if (!memberPassword) errs.memberPassword = '비밀번호를 입력해주세요.';
    else if (!passwordRegex.test(memberPassword)) errs.memberPassword = '소문자, 숫자, 특수문자(!@#)를 각 하나씩 포함한 8자리 이상이어야 합니다.';
    return errs;
  };

  const handleLogin = async () => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('http://localhost:10000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ memberEmail, memberPassword }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error?.message);
      }

      const meRes = await fetch('http://localhost:10000/api/members/me', {
        credentials: 'include',
      });

      if (!meRes.ok) throw new Error('Access Token Expired');

      const { success, data } = await meRes.json();
      if (success) {
        setUser(data);
        setIsAuthenticated(true);
        navigate('/');
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigateKakaoAuth = () => {
    window.location.href = 'http://localhost:10000/oauth2/authorization/kakao';
  };
  const navigateGoogleAuth = () => {
    window.location.href = 'http://localhost:10000/oauth2/authorization/google';
  };
  const navigateNaverAuth = () => {
    window.location.href = 'http://localhost:10000/oauth2/authorization/naver';
  };

  return (
    <>
      <S.Title>로그인</S.Title>
      <S.Subtitle>아이디와 비밀번호를 입력해 서비스를 이용하세요.</S.Subtitle>

      <S.InputGroup>
        <S.Input
          type="email"
          placeholder="이메일을 입력하세요"
          value={memberEmail}
          onChange={(e) => setMemberEmail(e.target.value)}
          $error={!!errors.memberEmail}
        />
        {errors.memberEmail && <S.ErrorText>{errors.memberEmail}</S.ErrorText>}
        <S.Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={memberPassword}
          onChange={(e) => setMemberPassword(e.target.value)}
          $error={!!errors.memberPassword}
        />
        {errors.memberPassword && <S.ErrorText>{errors.memberPassword}</S.ErrorText>}
      </S.InputGroup>

      <S.CheckRow>
        <input
          type="checkbox"
          id="keepLogin"
          checked={keepLogin}
          onChange={(e) => setKeepLogin(e.target.checked)}
        />
        <S.CheckLabel htmlFor="keepLogin">로그인 상태 유지</S.CheckLabel>
      </S.CheckRow>

      <S.PrimaryButton onClick={handleLogin} disabled={isSubmitting}>
        로그인
      </S.PrimaryButton>

      <S.LinksRow>
        <S.LinkText to="/find-id">아이디 찾기</S.LinkText>
        <S.Divider>|</S.Divider>
        <S.LinkText to="/reset-password">비밀번호 찾기</S.LinkText>
        <S.Divider>|</S.Divider>
        <S.SocialIcons>
          <S.SocialIcon $bg="#FEE500" $color="#000" onClick={navigateKakaoAuth}>K</S.SocialIcon>
          <S.SocialIcon $bg="#fff" $color="#4285F4" $border="1px solid #ddd" onClick={navigateGoogleAuth}>G</S.SocialIcon>
          <S.SocialIcon $bg="#03C75A" $color="#fff" onClick={navigateNaverAuth}>N</S.SocialIcon>
        </S.SocialIcons>
      </S.LinksRow>

      <S.JoinPrompt>아직 계정이 없으신가요?</S.JoinPrompt>
      <S.OutlineButton onClick={() => navigate('/join')}>회원가입</S.OutlineButton>

      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );
};

export default LoginComponent;
