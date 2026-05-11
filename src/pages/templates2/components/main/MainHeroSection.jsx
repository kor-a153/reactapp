import React from 'react';
import { Link } from 'react-router-dom';

const MainHeroSection = ({ onChatbotClick }) => {
    return (
        <section>
            <Link to="/chatbot">챗봇</Link>
        </section>
    );
};

export default MainHeroSection;