import React from 'react';

const MyLikesContainer = () => {
    return (
        <div className="MyLikesContainer">
            {/* 상단 히어로 섹션: 좋아요 섹션 정체성 및 퀵 메뉴 */}
            <div className="HeroSection">
                <div className="BannerCard">좋아요 한 페일로그</div>
                <div className="SubCardsContainer">
                    <div className="SubCardItem">페일로그 방명록</div>
                    <div className="SubCardItem">마이 페일로그</div>
                    <div className="SubCardItem">페일로그 바로가기</div>
                </div>
            </div>
        </div>
    );
};

export default MyLikesContainer;