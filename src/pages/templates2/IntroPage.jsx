import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import MainHeader from './components/main/MainHeader';
import IntroHeroSection from './components/intro/IntroHeroSection';
import IntroPreviewContainer from './components/intro/IntroPreviewContainer';
import IntroFooter from './components/intro/IntroFooter';

const IntroPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleChatbotClick = () => {
        navigate('/chatbot');
    };

    return (
        <div>
            <MainHeader />
            <IntroHeroSection onLoginClick={handleLoginClick} onChatbotClick={handleChatbotClick} />
            <IntroPreviewContainer />
            <IntroFooter />
            <Outlet />
        </div>
    );
};

export default IntroPage;