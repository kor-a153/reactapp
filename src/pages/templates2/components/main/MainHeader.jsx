import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <header>
            <section>
            <Link to="/">서비스소개</Link>
            <Link to="/community">커뮤니티</Link>
            <Link to="/log/list">로그</Link>
            <Link to="/growth">성장연대기</Link>
            <Link to="/mypage">마이페이지</Link>
            <Link to="/signup">회원가입</Link>
            <Link to="/login">로그인</Link>
        </section>
        </header>
    );
};

export default MainHeader;