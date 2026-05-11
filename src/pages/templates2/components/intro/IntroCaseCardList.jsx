import React from 'react';

const IntroCaseCardList = ({ cards, onCardClick }) => {
    return (
        <div>
            {cards.map((item) => (
                <div key={item.id} onClick={() => onCardClick(item.id)}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default IntroCaseCardList;