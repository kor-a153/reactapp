import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ onGrowthClick, onCommunityClick, onLogListClick, onLogWriteClick, onMyPageClick, onChatbotClick }) => {
    return (
        <header>
            <div>
                <Link to="/growth">성장 연대기</Link>
                <Link to="/community">커뮤니티</Link>
                <Link to="/log/list">로그 목록</Link>
                <Link to="/log/write">로그 작성</Link>
                <Link to="/user">마이페이지</Link>
                <Link to="/chat">챗봇</Link>
            </div>
        </header>
    );
};

export default HeroSection;