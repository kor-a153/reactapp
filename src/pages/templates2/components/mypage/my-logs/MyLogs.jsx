import React from 'react';
import { Link } from 'react-router-dom';

const MyLogs = () => {
    return (
        <div>
            <h2>마이 페일로그</h2>
            <p>내 로그 목록 페이지입니다.</p>
        <section>
            <Link to="/case/1">로그사례 1</Link>
            <Link to="/case/2">로그사례 2</Link>
            <Link to="/case/3">로그사례 3</Link>
            <Link to="/case/4">로그사례 4</Link>
            <Link to="/case/5">로그사례 5</Link>
            <Link to="/case/6">로그사례 6</Link>
            <Link to="/case/7">로그사례 7</Link>
            <Link to="/case/8">로그사례 8</Link>
            <Link to="/case/9">로그사례 9</Link>
        </section>
        </div>
    );
};

export default MyLogs;