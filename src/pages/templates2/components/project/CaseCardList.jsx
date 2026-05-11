import React from 'react';

const CaseCardList = ({ cases, onCaseClick }) => {
    return (
        <div>
            {cases.map((caseItem, index) => (
                <div key={index} onClick={() => onCaseClick(caseItem.id)} >
                    {caseItem.title}
                </div>
            ))}
        </div>
    );
};

export default CaseCardList;