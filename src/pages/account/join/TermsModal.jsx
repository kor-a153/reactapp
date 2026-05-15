import React from 'react';
import S from '../styles/TermsModalStyle';

const TERMS_CONTENT = {
  terms: {
    title: '[필수] 이용약관 및 개인정보 처리방침 동의',
    subtitle: 'Fail Log 서비스를 이용하기 위해서는 다음 약관에 동의하셔야 합니다.',
    content: (
      <S.Section>
        <S.SectionTitle>1. 이용약관</S.SectionTitle>
        <S.Article>
          <S.ArticleTitle>제1조 (목적)</S.ArticleTitle>
          <p>본 약관은 FailLog(이하 "서비스")가 제공하는 모든 서비스의 이용 조건 및 절차, 이용자와 서비스 운영자의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.</p>
        </S.Article>
        <S.Article>
          <S.ArticleTitle>제2조 (용어의 정의)</S.ArticleTitle>
          <ol>
            <li>"이용자"란 서비스에 접속하여 본 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</li>
            <li>"실패 로그(Fail Log)"란 이용자가 서비스 내에 작성한 실패 사례, 원인 분석, 피드백 등의 게시물을 의미합니다.</li>
          </ol>
        </S.Article>
        <S.Article>
          <S.ArticleTitle>제3조 (서비스의 제공 및 변경)</S.ArticleTitle>
          <ol>
            <li>본 서비스는 이용자의 의사결정 분석 및 실패 자산화를 돕는 툴을 제공합니다.</li>
            <li>서비스는 운영상, 기술상의 필요에 따라 제공하는 서비스의 일부 또는 전부를 변경할 수 있습니다.</li>
          </ol>
        </S.Article>
        <S.Article>
          <S.ArticleTitle>제4조 (게시물의 권리와 책임)</S.ArticleTitle>
          <ol>
            <li>이용자가 작성한 '실패 로그' 및 게시물에 대한 저작권은 작성자 본인에게 있습니다.</li>
            <li>FailLog는 이용자가 작성한 내용을 서비스의 개선 및 통계적 분석을 위해 익명화하여 활용할 수 있습니다.</li>
          </ol>
        </S.Article>
        <S.Article>
          <S.ArticleTitle>제5조 (면책 조항)</S.ArticleTitle>
          <p>서비스는 천재지변, 불가항력적 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.</p>
        </S.Article>
      </S.Section>
    ),
  },
  marketing: {
    title: '[선택] 개인정보 마케팅 활용 동의',
    subtitle: 'Fail Log 서비스의 발전을 위해 다음 약관에 동의 바랍니다.',
    content: (
      <S.Section>
        <S.Article>
          <S.ArticleTitle>1. 수집 및 이용 목적</S.ArticleTitle>
          <ul>
            <li>개인 맞춤형 서비스 제공: 사용자의 실패 기록 패턴을 분석하여 맞춤형 인사이트 및 분석 리포트 발송</li>
            <li>혜택 및 이벤트 정보 안내: FailLog의 신규 기능 업데이트, 유료 플랜 프로모션, 이벤트 정보 안내 (이메일, 앱 푸시 등)</li>
            <li>서비스 개선 및 통계: 신규 서비스 개발 및 인구통계학적 특성에 따른 서비스 최적화</li>
          </ul>
        </S.Article>
        <S.Article>
          <S.ArticleTitle>2. 수집 항목</S.ArticleTitle>
          <ul>
            <li>이메일 주소, 서비스 이용 기록, 접속 빈도, 닉네임</li>
          </ul>
        </S.Article>
        <S.Article>
          <S.ArticleTitle>3. 보유 및 이용 기간</S.ArticleTitle>
          <ul>
            <li>회원 탈퇴 시 또는 동의 철회 시까지 (단, 관련 법령에 따라 보존이 필요한 경우 해당 법령이 정한 기간까지 보관)</li>
          </ul>
        </S.Article>
        <S.Article>
          <S.ArticleTitle>4. 동의 거부 권리 및 불이익</S.ArticleTitle>
          <ul>
            <li>귀하는 본 개인정보 마케팅 활용 동의를 거부할 권리가 있습니다.</li>
            <li>거부 시에도 FailLog의 기본 서비스 이용은 동일하게 가능하나, 맞춤형 분석 리포트나 프로모션 혜택 안내 등이 제한될 수 있습니다.</li>
          </ul>
        </S.Article>
      </S.Section>
    ),
  },
  notification: {
    title: '[선택] 마케팅 정보 수신 동의',
    subtitle: 'Fail Log 서비스의 발전을 위해 다음 약관에 동의 바랍니다.',
    content: (
      <S.Section>
        <S.Article>
          <S.ArticleTitle>1. 수신 동의의 목적</S.ArticleTitle>
          <ul>
            <li>맞춤형 분석 알림: 사용자의 실패 기록을 바탕으로 한 주간/월간 분석 리포트 및 인사이트 제공</li>
            <li>서비스 혜택 안내: 신규 기능 출시, 이벤트, 프로모션(할인 쿠폰 등) 정보 안내</li>
            <li>콘텐츠 제공: 실패를 자신으로 만드는 법 등 서비스 관련 유용한 팁 공유</li>
          </ul>
        </S.Article>
        <S.Article>
          <S.ArticleTitle>2. 수집하는 개인정보 항목</S.ArticleTitle>
          <ul>
            <li>이메일, 서비스 내 알림(Push), 닉네임</li>
          </ul>
        </S.Article>
        <S.Article>
          <S.ArticleTitle>3. 전송 방법</S.ArticleTitle>
          <ul>
            <li>이메일, 앱 푸시(Push), 알림톡 등</li>
          </ul>
        </S.Article>
        <S.Article>
          <S.ArticleTitle>4. 동의 철회 및 불이익</S.ArticleTitle>
          <ul>
            <li>귀하는 마케팅 정보 수신 동의를 언제든지 서비스 내 [설정 &gt; 알림 설정] 메뉴에서 철회할 수 있습니다.</li>
            <li>수신에 동의하지 않으셔도 FailLog의 기본 서비스 이용에는 제한이 없으나, 맞춤형 리포트 및 유용한 혜택 안내를 받으실 수 없습니다.</li>
          </ul>
        </S.Article>
      </S.Section>
    ),
  },
};

const TermsModal = ({ type, onClose }) => {
  const data = TERMS_CONTENT[type];
  if (!data) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalCard onClick={(e) => e.stopPropagation()}>
        <S.ModalTitle>{data.title}</S.ModalTitle>
        <S.ModalSubtitle>{data.subtitle}</S.ModalSubtitle>
        <S.ContentBox>{data.content}</S.ContentBox>
        <S.ConfirmButton onClick={onClose}>확인</S.ConfirmButton>
        <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
      </S.ModalCard>
    </S.Overlay>
  );
};

export default TermsModal;
