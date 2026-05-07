import { Outlet, Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import './RootLayout.css';

const RootLayout = () => {
  // const { isAuthenticated, setIsAuthenticated, setUser } = useAuthStore();

  const isAuthenticated = false;

  return (
    <div>
      <header className="root-header">

        {/* 로고 */}
        <div className="root-header-logo">
          <Link to="/">
            <img src="/logo.png" alt="FailLog" />
          </Link>
        </div>

        {/* 네비게이션 */}
        <nav className="root-header-nav">
            <Link to="/fail-logs">페일로그</Link>
            <Link to="/projects">프로젝트</Link>
            <Link to="/chronology">성장연대기</Link>
            <Link to="/community">커뮤니티</Link>
            <Link to="/my-page/profile">마이페이지</Link>
        </nav>

        {/* 버튼 */}
        <div className="root-header-actions">
          {isAuthenticated ? (
            <button className="root-header-btn">로그아웃</button>
          ) : (
            <Link to="/login" className="root-header-btn">로그인</Link>
          )}
        </div>

      </header>


      <main>
        <Outlet />
      </main>

        <footer className="root-footer">
            <div className="root-footer-inner">
                <p className="root-footer-logo">
                <span className="root-footer-logo-fail">Fail</span>
                <span className="root-footer-logo-log">Log</span>
                </p>
            <div className="root-footer-nav">
                <Link to="/terms">이용약관</Link>
                <Link to="/privacy">개인정보처리방침</Link>
                <Link to="/support">고객센터</Link>
            </div>
            <div className="root-footer-info">
                <p>법인명 : FailLog | 대표자 : 000 | 사업자 등록번호 : 000-00-00000 | 사업 소재지 : 서울 강남구 테헤란로 146</p>
                <p>이메일 : FailLog@FailLog.co.kr | 팩스 : 02-538-0021</p>
            </div>
                <p className="root-footer-copy">© 2026 FailLog. All rights reserved.</p>
            </div>
        </footer>
    </div>
  );
};

export default RootLayout;
