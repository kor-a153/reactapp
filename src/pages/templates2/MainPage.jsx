import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import MainHeader from './components/main/MainHeader';
import MainHeroSection from './components/main/MainHeroSection';
import MainMenuContainer from './components/main/MainMenuContainer';
import MainFooter from './components/main/MainFooter';

const MainPage = () => {
    const navigate = useNavigate();

    const handleChatbotClick = () => {
        navigate('/chatbot');
    };

    return (
        <div>
            <MainHeader />
            <MainHeroSection onChatbotClick={handleChatbotClick} />
            <MainMenuContainer />
            <MainFooter />
            <Outlet />
        </div>
    );
};

export default MainPage;