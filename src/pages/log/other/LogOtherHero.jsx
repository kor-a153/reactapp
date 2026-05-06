import React from 'react';
import './LogOtherHero.css';
import GlobeIcon from './otherLog_icon/internet_2282299.svg';
import ArrowIcon from './otherLog_icon/bitcoin-icons--arrow-up-filled.svg';

const LogOtherHero = () => {
    return (
        <section className="log-other-hero-wrapper">
            <div className="log-other-hero">
                <div className="log-other-hero-title-wrap">
                    <img
                        src={GlobeIcon}
                        alt="globe"
                        className="hero-globe-icon"
                    />
                    <h1 className="log-other-hero-title">다른 사람의 경험을 만나보세요.</h1>
                </div>
                <button className="log-other-start-btn">
                    <span className="log-other-start-btn-text">시작하기</span>
                    <img
                        src={ArrowIcon}
                        alt="arrow"
                        className="hero-arrow-icon"
                    />
                </button>
            </div>
        </section>
    );
};

export default LogOtherHero;
