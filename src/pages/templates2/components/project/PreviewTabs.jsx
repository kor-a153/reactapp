import React from 'react';

const PreviewTabs = ({ activeTab, onTabChange }) => {
    return (
        <div>
            <button onClick={() => onTabChange("logs")}>다양한 로그</button>
            <button onClick={() => onTabChange("community")}>커뮤니티</button>
        </div>
    );
};

export default PreviewTabs;