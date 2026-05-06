import { Outlet, Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

const RootLayout = () => {
  // const { isAuthenticated, setIsAuthenticated, setUser } = useAuthStore();

  const isAuthenticated = false;

  return (
    <div>
      <header>
        <nav>
          <div>
          <Link to="/">
            <img src="/logo.png" alt="FailLog" />
          </Link>
            
            <Link to="/fail-logs">페일로그</Link>
            <Link to="/projects">프로젝트</Link>
            <Link to="/chronology">성장연대기</Link>
            <Link to="/community">커뮤니티</Link>
            <Link to="/my-page/profile">마이페이지</Link>
              {isAuthenticated ? (
                <button>로그아웃</button>
              ) : (
                <Link to="/login">로그인</Link>
              )}
       
          
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div>
          <p>FailLog</p>
          <div>
            <Link to="/terms">이용약관</Link>
            <Link to="/privacy">개인정보처리방침</Link>
            <Link to="/support">고객센터</Link>
          </div>
          <p>법인명 : FailLog | 대표자 : 000 | 사업자 등록번호 : 000-00-00000 | 사업 소재지 : 서울 강남구 테헤란로 146</p>
          <p>이메일 : FailLog@FailLog.co.kr | 팩스 : 02-538-0021</p>
          <p>© 2026 FailLog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
