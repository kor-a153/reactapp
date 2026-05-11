import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainMenuCardList from './MainMenuCardList';

const MainMenuContainer = () => {
    const navigate = useNavigate();

    const cards = [
        { id: 1, title: '성장 연대기', description: '자신의 발자취를 확인합니다.', path: '/growth' },
        { id: 2, title: '커뮤니티', description: '다른 사람들과 경험을 공유합니다.', path: '/community' },
        { id: 3, title: '로그 목록', description: '모든 기록을 한눈에 확인합니다.', path: '/log/list' },
        { id: 4, title: '로그 작성', description: '새로운 실패 경험을 기록합니다.', path: '/log/write' },
        { id: 5, title: '마이페이지', description: '내 정보를 관리합니다.', path: '/mypage' }
    ];

    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <MainMenuCardList cards={cards} onCardClick={handleCardClick} />
    );
};

export default MainMenuContainer;