import React from 'react';

const MainMenuCardList = ({ cards, onCardClick }) => {
    return (
        <div>
            {cards.map((card) => (
                <div key={card.id} onClick={() => onCardClick(card.path)}>
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default MainMenuCardList;