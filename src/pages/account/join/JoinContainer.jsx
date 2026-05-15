import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../styles/JoinContainerStyle';
import TermsModal from './TermsModal';

const TIMER_SECONDS = 300;

const JoinContainer = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [modalType, setModalType] = useState(null);

  const [agreements, setAgreements] = useState({
    all: false, terms: false, marketing: false, notification: false,
  });

  const [email, setEmail] = useState('');
  const [emailCode, setEmailCode] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [emailTimer, setEmailTimer] = useState(TIMER_SECONDS);
  const emailTimerRef = useRef(null);

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

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

      <S.Title>회원가입</S.Title>
      <S.Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</S.Subtitle>

      <S.AgreementBox>
        <S.AgreementAll>
          <S.Checkbox
            type="checkbox"
            checked={agreements.all}
            onChange={(e) => handleAgreementAll(e.target.checked)}
          />
          <span>전체 동의하기</span>
        </S.AgreementAll>
        <S.Separator />
        <S.AgreementRow>
          <S.Checkbox
            type="checkbox"
            checked={agreements.terms}
            onChange={(e) => handleAgreement('terms', e.target.checked)}
          />
          <S.AgreementLabel>이용약관 및 개인정보 처리방침 동의 <S.Required>(필수)</S.Required></S.AgreementLabel>
          <S.Arrow onClick={() => setModalType('terms')}>›</S.Arrow>
        </S.AgreementRow>
        <S.AgreementRow>
          <S.Checkbox
            type="checkbox"
            checked={agreements.marketing}
            onChange={(e) => handleAgreement('marketing', e.target.checked)}
          />
          <S.AgreementLabel>개인정보 마케팅 활용 동의 <S.Optional>(선택)</S.Optional></S.AgreementLabel>
          <S.Arrow onClick={() => setModalType('marketing')}>›</S.Arrow>
        </S.AgreementRow>
        <S.AgreementRow $column>
          <S.AgreementRowInner>
            <S.Checkbox
              type="checkbox"
              checked={agreements.notification}
              onChange={(e) => handleAgreement('notification', e.target.checked)}
            />
            <S.AgreementLabel>마케팅 정보 수신 동의 <S.Optional>(선택)</S.Optional></S.AgreementLabel>
            <S.Arrow onClick={() => setModalType('notification')}>›</S.Arrow>
          </S.AgreementRowInner>
          <S.AgreementDesc>맞춤 추천, 뉴스레터 등 유용한 혜택을 제공받을 수 있습니다.</S.AgreementDesc>
        </S.AgreementRow>
      </S.AgreementBox>

      <S.OrDivider><S.OrLine /><S.OrText>또는</S.OrText><S.OrLine /></S.OrDivider>

      <S.SocialButton>
        <S.SocialIcon $bg="#fff" $color="#4285F4" $border="1.5px solid #ddd">G</S.SocialIcon>
        구글로 회원가입
      </S.SocialButton>
      <S.SocialButton>
        <S.SocialIcon $bg="#03C75A" $color="#fff">N</S.SocialIcon>
        네이버로 회원가입
      </S.SocialButton>
      <S.SocialButton>
        <S.SocialIcon $bg="#FEE500" $color="#000">K</S.SocialIcon>
        카카오톡으로 회원가입
      </S.SocialButton>

      <S.PrimaryButton
        onClick={() => { if (agreements.terms) setStep(2); }}
        $disabled={!agreements.terms}
      >
        Fail Log 계정 만들기
      </S.PrimaryButton>

      <S.BottomLink>이미 계정이 있으신가요? <S.PurpleLink to="/login">로그인</S.PurpleLink></S.BottomLink>
      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );

  // ─── Step 2: 이메일 인증 ───
  if (step === 2) return (
    <>
      <S.Title>회원가입</S.Title>
      <S.Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</S.Subtitle>

      <S.FieldLabel>이메일</S.FieldLabel>
      <S.InputRow>
        <S.Input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={emailVerified}
        />
        <S.SmallButton onClick={handleSendEmail} disabled={emailVerified}>
          이메일 인증
        </S.SmallButton>
      </S.InputRow>

      {emailSent && (
        <>
          <S.FieldLabel>인증번호</S.FieldLabel>
          <S.InputRow>
            <S.InputWithTimer>
              <S.Input
                placeholder="인증번호를 입력하세요"
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
                disabled={emailVerified}
              />
              {!emailVerified && <S.Timer>{formatTimer(emailTimer)}</S.Timer>}
            </S.InputWithTimer>
            <S.SmallButton onClick={handleVerifyEmail} disabled={emailVerified} $verified={emailVerified}>
              {emailVerified ? '인증 완료' : '인증 확인'}
            </S.SmallButton>
          </S.InputRow>
        </>
      )}

      <S.PrimaryButton onClick={() => { if (emailVerified) setStep(3); }} $disabled={!emailVerified}>
        다음 단계로
      </S.PrimaryButton>
      <S.BottomLink>이미 계정이 있으신가요? <S.PurpleLink to="/login">로그인</S.PurpleLink></S.BottomLink>
      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );

  // ─── Step 3: 이름 / 닉네임 ───
  if (step === 3) return (
    <>
      <S.Title>회원가입</S.Title>
      <S.Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</S.Subtitle>

      <S.FieldLabel>이름</S.FieldLabel>
      <S.Input placeholder="이름을 입력하세요" value={name} onChange={(e) => setName(e.target.value)} />
      {name.length > 0 && name.length < 2 && <S.ValidationMsg>이름을 입력해주세요.</S.ValidationMsg>}

      <S.FieldLabel style={{ marginTop: 16 }}>닉네임</S.FieldLabel>
      <S.Input placeholder="닉네임을 입력하세요" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      {nickname.length > 0 && nickname.length < 2 && <S.ValidationMsg>닉네임을 입력해주세요.</S.ValidationMsg>}

      <S.PrimaryButton
        onClick={() => { if (name.length >= 2 && nickname.length >= 2) setStep(4); }}
        $disabled={name.length < 2 || nickname.length < 2}
        style={{ marginTop: 24 }}
      >
        다음 단계로
      </S.PrimaryButton>
      <S.BottomLink>이미 계정이 있으신가요? <S.PurpleLink to="/login">로그인</S.PurpleLink></S.BottomLink>
      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );

  // ─── Step 4: 비밀번호 ───
  if (step === 4) return (
    <>
      <S.Title>회원가입</S.Title>
      <S.Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</S.Subtitle>

      <S.FieldLabel>비밀번호</S.FieldLabel>
      <S.Input
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.HintMsg>반드시 특수 문자 이상 입력하는 것을 권장합니다.</S.HintMsg>

      <S.FieldLabel style={{ marginTop: 16 }}>비밀번호 확인</S.FieldLabel>
      <S.Input
        type="password"
        placeholder="비밀번호를 다시 입력하세요"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      {passwordConfirm && password !== passwordConfirm && (
        <S.ValidationMsg>비밀번호가 일치하지 않습니다.</S.ValidationMsg>
      )}

      <S.PrimaryButton
        onClick={() => { if (password && password === passwordConfirm) setStep(5); }}
        $disabled={!password || password !== passwordConfirm}
        style={{ marginTop: 24 }}
      >
        다음 단계로
      </S.PrimaryButton>
      <S.BottomLink>이미 계정이 있으신가요? <S.PurpleLink to="/login">로그인</S.PurpleLink></S.BottomLink>
      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );

  // ─── Step 5: 전화번호 인증 ───
  if (step === 5) return (
    <>
      <S.Title>회원가입</S.Title>
      <S.Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</S.Subtitle>

      <S.FieldLabel>전화번호</S.FieldLabel>
      <S.InputRow>
        <S.Input
          type="tel"
          placeholder="전화번호를 입력하세요"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={phoneVerified}
        />
        <S.SmallButton onClick={handleSendPhone} disabled={phoneVerified}>
          전화번호 인증
        </S.SmallButton>
      </S.InputRow>

      {phoneSent && (
        <>
          <S.FieldLabel>인증번호</S.FieldLabel>
          <S.InputRow>
            <S.InputWithTimer>
              <S.Input
                placeholder="인증번호를 입력하세요"
                value={phoneCode}
                onChange={(e) => setPhoneCode(e.target.value)}
                disabled={phoneVerified}
              />
              {!phoneVerified && <S.Timer>{formatTimer(phoneTimer)}</S.Timer>}
            </S.InputWithTimer>
            <S.SmallButton onClick={handleVerifyPhone} disabled={phoneVerified} $verified={phoneVerified}>
              {phoneVerified ? '인증 완료' : '인증 확인'}
            </S.SmallButton>
          </S.InputRow>
        </>
      )}

      <S.PrimaryButton onClick={handleJoin} $disabled={!phoneVerified} style={{ marginTop: 8 }}>
        회원가입
      </S.PrimaryButton>
      <S.BottomLink>이미 계정이 있으신가요? <S.PurpleLink to="/login">로그인</S.PurpleLink></S.BottomLink>
      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );

  // ─── Step 6: 가입 완료 ───
  return (
    <S.SuccessBox>
      <S.SuccessText>
        회원가입에 성공했습니다!<br />
        당신만의 이야기를 작성해보세요!
      </S.SuccessText>
      <S.PrimaryButton onClick={() => navigate('/login')}>로그인 페이지로</S.PrimaryButton>
    </S.SuccessBox>
  );
};

export default JoinContainer;
