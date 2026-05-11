import React from 'react';
import { Link } from 'react-router-dom';

const GeneralPosts = () => {
    const posts = [
        { id: 101, title: '일반게시글 1' },
        { id: 102, title: '일반게시글 2' },
        { id: 103, title: '일반게시글 3' },
        { id: 104, title: '일반게시글 4' },
        { id: 105, title: '일반게시글 5' }
    ];

    return (
        <div>
            <h2>일반게시글</h2>
            {posts.map(post => (
                <Link key={post.id} to={`/community/post/${post.id}`}>{post.title}</Link>
            ))}
        </div>
    );
};

export default GeneralPosts;
