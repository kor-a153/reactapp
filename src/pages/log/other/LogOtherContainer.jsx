import React from 'react';
import { Outlet } from 'react-router-dom';
import LogOtherSearch from './LogOtherSearch';
import LogOtherHero from './LogOtherHero';
import LogPopularSolution from './LogPopularSolution';


const LogOtherContainer = () => {
    return (
        <div>
            <LogOtherHero />
            <LogPopularSolution />
            다른 사람의 로그
            <LogOtherSearch />
            <Outlet />
        </div>
    );
};

export default LogOtherContainer;