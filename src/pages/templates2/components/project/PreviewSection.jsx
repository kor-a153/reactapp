import React from 'react';
import PreviewTabs from './PreviewTabs';
import CaseCardList from './CaseCardList';

const PreviewSection = ({ activeTab, onTabChange, cases, onCaseClick }) => {
    return (
        <div>
            <PreviewTabs activeTab={activeTab} onTabChange={onTabChange} />
            <CaseCardList cases={cases} onCaseClick={onCaseClick} />
        </div>
    );
};

export default PreviewSection;