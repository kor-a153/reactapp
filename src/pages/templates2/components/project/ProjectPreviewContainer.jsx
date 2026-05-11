import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import PreviewSection from './PreviewSection';

const ProjectPreviewContainer = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("logs");

    const handleGrowthClick = () => {
        navigate("/growth");
    };

    const handleCommunityClick = () => {
        navigate("/community");
    };

    const handleLogListClick = () => {
        navigate("/log/list");
    };

    const handleLogWriteClick = () => {
        navigate("/log/write");
    };

    const handleMyPageClick = () => {
        navigate("/mypage");
    };

    const handleChatbotClick = () => {
        navigate("/chatbot");
    };

    const handleCaseClick = (id) => {
        navigate(`/case/${id}`);
    };

    const cases = activeTab === "logs" ? [
        { id: 1, title: "사례 1" },
        { id: 2, title: "사례 2" },
        { id: 3, title: "사례 3" }
    ] : [
        { id: 1, title: "커뮤니티 사례 1" },
        { id: 2, title: "커뮤니티 사례 2" },
        { id: 3, title: "커뮤니티 사례 3" }
    ];

    return (
        <div>
            <HeroSection
                onGrowthClick={handleGrowthClick}
                onCommunityClick={handleCommunityClick}
                onLogListClick={handleLogListClick}
                onLogWriteClick={handleLogWriteClick}
                onMyPageClick={handleMyPageClick}
                onChatbotClick={handleChatbotClick}
            />
            <PreviewSection activeTab={activeTab} onTabChange={setActiveTab} cases={cases} onCaseClick={handleCaseClick} />
        </div>
    );
};

export default ProjectPreviewContainer;