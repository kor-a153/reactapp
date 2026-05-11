import React from 'react';

const MyGuestbookContainer = () => {
    return (
     <div className="MyGuestbookContainer">
            {/* 상단 히어로 섹션: 방명록 페이지 정체성 및 퀵 메뉴 */}
            <div className="HeroSection">
                <div className="BannerCard">페일로그 방명록</div>
                <div className="SubCardsContainer">
                    <div className="SubCardItem">페일로그 바로가기</div>
                    <div className="SubCardItem">마이 페일로그</div>
                    <div className="SubCardItem">좋아요 한 페일로그</div>
                </div>
            </div>
    </div>
    );
};

export default MyGuestbookContainer;