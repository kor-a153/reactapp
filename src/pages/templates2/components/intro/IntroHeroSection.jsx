import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../../../store/authStore';

const IntroHeroSection = ({ onLoginClick, onChatbotClick }) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuthStore();

    const handleStartClick = () => {
        if (isAuthenticated) {
            navigate('/log/write/step1');
        } else {
            navigate('/login');
        }
    };

    return (
        <section>
            <button onClick={handleStartClick}>시작하기</button>
            <Link to="/chatbot">챗봇</Link>
        </section>
    );
};

export default IntroHeroSection;