import React from 'react';
import MainMenuContainer from './MainMenuContainer';
import IntroContainer from './IntroContainer';
import useAuthStore from '../../store/authStore';

const MainContainer = () => {
    const {isAuthenticated} = useAuthStore()

    return (
        <>
            {false  ? <MainMenuContainer /> : <IntroContainer />}
        </>
    );
};

export default MainContainer;