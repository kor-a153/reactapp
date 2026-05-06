import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenuContainer.css';

// 아이콘 이미지 import
import iconFaillog from './main_icon/file_1324039.svg';
import iconProject from './main_icon/routine_4088138.svg';
import iconChronology from './main_icon/graph_1357731.svg';
import iconCommunity from './main_icon/crm_304575.svg';
import iconMypage from './main_icon/feedback_2512312.svg';

// 아이콘 배경색 (디자인 이미지 기준)
const CARDS = [
    {
        label: '페일로그',
        desc: '모두의 기록들을\n한눈에 모아보기',
        path: '/log/result',
        icon: iconFaillog,
        iconBg: 'linear-gradient(135deg, #F53102, #FF34C5)',
    },
    {
        label: '프로젝트',
        desc: '새로운 실패 경험을\n구조화하여 기록하세요',
        path: '/log/write/1',
        icon: iconProject,
        iconBg: 'linear-gradient(135deg, #FF34C5, #F5EE03)',
    },
    {
        label: '성장 연대기',
        desc: '자신의 발전 과정을\n확인하기',
        path: '/chronology',
        icon: iconChronology,
        iconBg: 'linear-gradient(135deg, #F5EE03, #00B53F)',
    },
    {
        label: '커뮤니티',
        desc: '다른 사람들과\n소통하기',
        path: '/community',
        icon: iconCommunity,
        iconBg: 'linear-gradient(135deg, #00B53F, #027DF0)',
    },
    {
        label: '마이페이지',
        desc: '내 정보\n관리하기',
        path: '/mypage',
        icon: iconMypage,
        iconBg: 'linear-gradient(135deg, #027DF0, #9333EA)',
    },
];

const MainMenuContainer = () => {
    const navigate = useNavigate();

    return (
        <div className="main-menu-container">
            <div className="main-menu-title-section">
                <h1 className="main-menu-title">실패가 성장의 자산이 되는 공간, FailLog</h1>
                <p className="main-menu-subtitle">
                    실패를 기록하고, 나만의 성공 데이터를 만들어 보세요.
                    <br />
                    무엇을 도전했나요?
                </p>
            </div>

            <div className="main-menu-card-wrapper">
                {CARDS.map((card) => (
                    <div
                        key={card.label}
                        className="main-menu-card"
                        onClick={() => navigate(card.path)}
                    >
                        <div
                            className="main-menu-card-icon-box"
                            style={{ background: card.iconBg }}
                        >
                            <img src={card.icon} alt={card.label} />
                        </div>
                        <p className="main-menu-card-label">{card.label}</p>
                        <p className="main-menu-card-desc">
                            {card.desc.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i < card.desc.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainMenuContainer;
