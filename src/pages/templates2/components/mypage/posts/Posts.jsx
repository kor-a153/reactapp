import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    return (
        <div>
            <h2>내 게시글</h2>
            <p>내 게시글 목록 페이지입니다.</p>
        <section>
            <Link to="/case/1">게시글  1</Link>
            <Link to="/case/2">게시글 2</Link>
            <Link to="/case/3">게시글 3</Link>
            <Link to="/case/4">게시글 4</Link>
            <Link to="/case/5">게시글 5</Link>
            <Link to="/case/6">게시글 6</Link>
            <Link to="/case/7">게시글 7</Link>
            <Link to="/case/8">게시글 8</Link>
            <Link to="/case/9">게시글 9</Link>
        </section>
        </div>
    );
};

export default Posts;