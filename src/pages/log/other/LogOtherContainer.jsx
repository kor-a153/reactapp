import React from 'react';
import { Outlet } from 'react-router-dom';
import LogOtherHero from './LogOtherHero';
import LogPopularSolution from './LogPopularSolution';


const LogOtherContainer = () => {
    return (
        <div>
            <LogPopularSolution />
            <Outlet />
        </div>
    );
};

export default LogOtherContainer;