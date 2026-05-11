import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostRead = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/community')}>목록으로 돌아가기</button>
            <h2>게시글 상세: {id}번 게시글</h2>
            <p>게시글 상세보기 페이지입니다.</p>
        </div>
    );
};

export default PostRead;