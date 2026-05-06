import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TermsModal from './TermsModal';

const TIMER_SECONDS = 300;

const JoinContainer = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [modalType, setModalType] = useState(null); // 'terms' | 'marketing' | 'notification'

  // 약관
  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    marketing: false,
    notification: false,
  });

  // 이메일 인증
  const [email, setEmail] = useState('');
  const [emailCode, setEmailCode] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [emailTimer, setEmailTimer] = useState(TIMER_SECONDS);
  const emailTimerRef = useRef(null);

  // 이름/닉네임
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // 비밀번호
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // 전화번호 인증
  const [phone, setPhone] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [phoneSent, setPhoneSent] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [phoneTimer, setPhoneTimer] = useState(TIMER_SECONDS);
  const phoneTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(emailTimerRef.current);
      clearInterval(phoneTimerRef.current);
    };
  }, []);

  const formatTimer = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const startEmailTimer = () => {
    clearInterval(emailTimerRef.current);
    setEmailTimer(TIMER_SECONDS);
    emailTimerRef.current = setInterval(() => {
      setEmailTimer((prev) => {
        if (prev <= 1) { clearInterval(emailTimerRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const startPhoneTimer = () => {
    clearInterval(phoneTimerRef.current);
    setPhoneTimer(TIMER_SECONDS);
    phoneTimerRef.current = setInterval(() => {
      setPhoneTimer((prev) => {
        if (prev <= 1) { clearInterval(phoneTimerRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const handleAgreementAll = (checked) => {
    setAgreements({ all: checked, terms: checked, marketing: checked, notification: checked });
  };

  const handleAgreement = (key, checked) => {
    const next = { ...agreements, [key]: checked };
    next.all = next.terms && next.marketing && next.notification;
    setAgreements(next);
  };

  const handleSendEmail = () => {
    if (!email) return;
    setEmailSent(true);
    startEmailTimer();
    // TODO: 이메일 인증 API
  };

  const handleVerifyEmail = () => {
    if (!emailCode) return;
    setEmailVerified(true);
    clearInterval(emailTimerRef.current);
    // TODO: 인증번호 확인 API
  };

  const handleSendPhone = () => {
    if (!phone) return;
    setPhoneSent(true);
    startPhoneTimer();
    // TODO: 전화번호 인증 API
  };

  const handleVerifyPhone = () => {
    if (!phoneCode) return;
    setPhoneVerified(true);
    clearInterval(phoneTimerRef.current);
    // TODO: 인증번호 확인 API
  };

  const handleJoin = () => {
    // TODO: 회원가입 API
    setStep(6);
  };

  // ─── Step 1: 약관 동의 ───
  if (step === 1) return (
    <>
      {modalType && <TermsModal type={modalType} onClose={() => setModalType(null)} />}

      <Title>회원가입</Title>
      <Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</Subtitle>

      <AgreementBox>
        <AgreementAll>
          <Checkbox
            type="checkbox"
            checked={agreements.all}
            onChange={(e) => handleAgreementAll(e.target.checked)}
          />
          <span>전체 동의하기</span>
        </AgreementAll>
        <Separator />
        <AgreementRow>
          <Checkbox
            type="checkbox"
            checked={agreements.terms}
            onChange={(e) => handleAgreement('terms', e.target.checked)}
          />
          <AgreementLabel>이용약관 및 개인정보 처리방침 동의 <Required>(필수)</Required></AgreementLabel>
          <Arrow onClick={() => setModalType('terms')}>›</Arrow>
        </AgreementRow>
        <AgreementRow>
          <Checkbox
            type="checkbox"
            checked={agreements.marketing}
            onChange={(e) => handleAgreement('marketing', e.target.checked)}
          />
          <AgreementLabel>개인정보 마케팅 활용 동의 <Optional>(선택)</Optional></AgreementLabel>
          <Arrow onClick={() => setModalType('marketing')}>›</Arrow>
        </AgreementRow>
        <AgreementRow $column>
          <AgreementRowInner>
            <Checkbox
              type="checkbox"
              checked={agreements.notification}
              onChange={(e) => handleAgreement('notification', e.target.checked)}
            />
            <AgreementLabel>마케팅 정보 수신 동의 <Optional>(선택)</Optional></AgreementLabel>
            <Arrow onClick={() => setModalType('notification')}>›</Arrow>
          </AgreementRowInner>
          <AgreementDesc>맞춤 추천, 뉴스레터 등 유용한 혜택을 제공받을 수 있습니다.</AgreementDesc>
        </AgreementRow>
      </AgreementBox>

      <OrDivider><OrLine /><OrText>또는</OrText><OrLine /></OrDivider>

      <SocialButton>
        <SocialIcon $bg="#fff" $color="#4285F4" $border="1.5px solid #ddd">G</SocialIcon>
        구글로 회원가입
      </SocialButton>
      <SocialButton>
        <SocialIcon $bg="#03C75A" $color="#fff">N</SocialIcon>
        네이버로 회원가입
      </SocialButton>
      <SocialButton>
        <SocialIcon $bg="#FEE500" $color="#000">K</SocialIcon>
        카카오톡으로 회원가입
      </SocialButton>

      <PrimaryButton
        onClick={() => { if (agreements.terms) setStep(2); }}
        $disabled={!agreements.terms}
      >
        Fail Log 계정 만들기
      </PrimaryButton>

      <BottomLink>이미 계정이 있으신가요? <PurpleLink to="/login">로그인</PurpleLink></BottomLink>
      <Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</Copyright>
    </>
  );

  // ─── Step 2: 이메일 인증 ───
  if (step === 2) return (
    <>
      <Title>회원가입</Title>
      <Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</Subtitle>

      <FieldLabel>이메일</FieldLabel>
      <InputRow>
        <Input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={emailVerified}
        />
        <SmallButton onClick={handleSendEmail} disabled={emailVerified}>
          이메일 인증
        </SmallButton>
      </InputRow>

      {emailSent && (
        <>
          <FieldLabel>인증번호</FieldLabel>
          <InputRow>
            <InputWithTimer>
              <Input
                placeholder="인증번호를 입력하세요"
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
                disabled={emailVerified}
              />
              {!emailVerified && <Timer>{formatTimer(emailTimer)}</Timer>}
            </InputWithTimer>
            <SmallButton onClick={handleVerifyEmail} disabled={emailVerified} $verified={emailVerified}>
              {emailVerified ? '인증 완료' : '인증 확인'}
            </SmallButton>
          </InputRow>
        </>
      )}

      <PrimaryButton onClick={() => { if (emailVerified) setStep(3); }} $disabled={!emailVerified}>
        다음 단계로
      </PrimaryButton>
      <BottomLink>이미 계정이 있으신가요? <PurpleLink to="/login">로그인</PurpleLink></BottomLink>
      <Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</Copyright>
    </>
  );

  // ─── Step 3: 이름 / 닉네임 ───
  if (step === 3) return (
    <>
      <Title>회원가입</Title>
      <Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</Subtitle>

      <FieldLabel>이름</FieldLabel>
      <Input placeholder="이름을 입력하세요" value={name} onChange={(e) => setName(e.target.value)} />
      {name.length > 0 && name.length < 2 && <ValidationMsg>이름을 입력해주세요.</ValidationMsg>}

      <FieldLabel style={{ marginTop: 16 }}>닉네임</FieldLabel>
      <Input placeholder="닉네임을 입력하세요" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      {nickname.length > 0 && nickname.length < 2 && <ValidationMsg>닉네임을 입력해주세요.</ValidationMsg>}

      <PrimaryButton
        onClick={() => { if (name.length >= 2 && nickname.length >= 2) setStep(4); }}
        $disabled={name.length < 2 || nickname.length < 2}
        style={{ marginTop: 24 }}
      >
        다음 단계로
      </PrimaryButton>
      <BottomLink>이미 계정이 있으신가요? <PurpleLink to="/login">로그인</PurpleLink></BottomLink>
      <Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</Copyright>
    </>
  );

  // ─── Step 4: 비밀번호 ───
  if (step === 4) return (
    <>
      <Title>회원가입</Title>
      <Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</Subtitle>

      <FieldLabel>비밀번호</FieldLabel>
      <Input
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <HintMsg>반드시 특수 문자 이상 입력하는 것을 권장합니다.</HintMsg>

      <FieldLabel style={{ marginTop: 16 }}>비밀번호 확인</FieldLabel>
      <Input
        type="password"
        placeholder="비밀번호를 다시 입력하세요"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      {passwordConfirm && password !== passwordConfirm && (
        <ValidationMsg>비밀번호가 일치하지 않습니다.</ValidationMsg>
      )}

      <PrimaryButton
        onClick={() => { if (password && password === passwordConfirm) setStep(5); }}
        $disabled={!password || password !== passwordConfirm}
        style={{ marginTop: 24 }}
      >
        다음 단계로
      </PrimaryButton>
      <BottomLink>이미 계정이 있으신가요? <PurpleLink to="/login">로그인</PurpleLink></BottomLink>
      <Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</Copyright>
    </>
  );

  // ─── Step 5: 전화번호 인증 ───
  if (step === 5) return (
    <>
      <Title>회원가입</Title>
      <Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</Subtitle>

      <FieldLabel>전화번호</FieldLabel>
      <InputRow>
        <Input
          type="tel"
          placeholder="전화번호를 입력하세요"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={phoneVerified}
        />
        <SmallButton onClick={handleSendPhone} disabled={phoneVerified}>
          전화번호 인증
        </SmallButton>
      </InputRow>

      {phoneSent && (
        <>
          <FieldLabel>인증번호</FieldLabel>
          <InputRow>
            <InputWithTimer>
              <Input
                placeholder="인증번호를 입력하세요"
                value={phoneCode}
                onChange={(e) => setPhoneCode(e.target.value)}
                disabled={phoneVerified}
              />
              {!phoneVerified && <Timer>{formatTimer(phoneTimer)}</Timer>}
            </InputWithTimer>
            <SmallButton onClick={handleVerifyPhone} disabled={phoneVerified} $verified={phoneVerified}>
              {phoneVerified ? '인증 완료' : '인증 확인'}
            </SmallButton>
          </InputRow>
        </>
      )}

      <PrimaryButton onClick={handleJoin} $disabled={!phoneVerified} style={{ marginTop: 8 }}>
        회원가입
      </PrimaryButton>
      <BottomLink>이미 계정이 있으신가요? <PurpleLink to="/login">로그인</PurpleLink></BottomLink>
      <Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</Copyright>
    </>
  );

  // ─── Step 6: 가입 완료 ───
  return (
    <SuccessBox>
      <SuccessText>
        회원가입에 성공했습니다!<br />
        당신만의 이야기를 작성해보세요!
      </SuccessText>
      <PrimaryButton onClick={() => navigate('/login')}>로그인 페이지로</PrimaryButton>
    </SuccessBox>
  );
};

export default JoinContainer;

// ─── Styled Components ───

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

const AgreementBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

const AgreementAll = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 700;
  color: #333;
  cursor: pointer;
`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid #eee;
`;

const AgreementRow = styled.div`
  display: flex;
  align-items: ${({ $column }) => ($column ? 'flex-start' : 'center')};
  flex-direction: ${({ $column }) => ($column ? 'column' : 'row')};
  gap: 4px;
`;

const AgreementRowInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const AgreementLabel = styled.span`
  flex: 1;
  font-size: 13px;
  color: #444;
`;

const Required = styled.span`
  color: #ab47ff;
  font-size: 12px;
`;

const Optional = styled.span`
  color: #aaa;
  font-size: 12px;
`;

const Arrow = styled.span`
  color: #bbb;
  font-size: 18px;
  cursor: pointer;
  padding: 2px 4px;

  &:hover {
    color: #ab47ff;
  }
`;

const AgreementDesc = styled.p`
  font-size: 11px;
  color: #aaa;
  padding-left: 28px;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  accent-color: #ab47ff;
  cursor: pointer;
  flex-shrink: 0;
`;

const OrDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
`;

const OrLine = styled.div`
  flex: 1;
  height: 1px;
  background: #eee;
`;

const OrText = styled.span`
  font-size: 12px;
  color: #aaa;
`;

const SocialButton = styled.button`
  width: 100%;
  padding: 13px 16px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;

  &:hover {
    background: #f8f8f8;
  }
`;

const SocialIcon = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  border: ${({ $border }) => $border || 'none'};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-top: 16px;
  margin-bottom: 16px;

  &:hover {
    background: ${({ $disabled }) => ($disabled ? '#d8a8ff' : '#9333ea')};
  }
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

  &:disabled {
    background: #f5f5f5;
    color: #aaa;
  }
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const InputWithTimer = styled.div`
  flex: 1;
  position: relative;
`;

const Timer = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 13px;
  color: #ab47ff;
  font-weight: 600;
`;

const SmallButton = styled.button`
  padding: 13px 14px;
  background: ${({ $verified }) => ($verified ? '#e8e8e8' : '#ab47ff')};
  color: ${({ $verified }) => ($verified ? '#999' : '#fff')};
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  white-space: nowrap;
`;

const ValidationMsg = styled.p`
  font-size: 12px;
  color: #f53102;
  margin-top: 4px;
`;

const HintMsg = styled.p`
  font-size: 12px;
  color: #aaa;
  margin-top: 4px;
`;

const BottomLink = styled.p`
  text-align: center;
  font-size: 13px;
  color: #888;
  margin-bottom: 12px;
`;

const PurpleLink = styled(Link)`
  color: #ab47ff;
  font-weight: 600;
  text-decoration: none;
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 11px;
  color: #bbb;
`;

const SuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 20px 0;
`;

const SuccessText = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  text-align: center;
  line-height: 1.7;
`;
