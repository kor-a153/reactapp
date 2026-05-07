import React from 'react';
import { Outlet } from 'react-router-dom';


const ChronologyMainContainer = () => {
    return (
        <div>
            연대기 컨테이너
            <Outlet />
        </div>
    );
};

export default ChronologyMainContainer;