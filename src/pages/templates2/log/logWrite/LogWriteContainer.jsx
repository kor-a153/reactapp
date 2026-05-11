import { Outlet } from 'react-router-dom';

const LogWriteContainer = () => {
    return (
        <div>
            <h1>로그 작성 페이지</h1>
            <Outlet />
        </div>
    );
};

export default LogWriteContainer;
