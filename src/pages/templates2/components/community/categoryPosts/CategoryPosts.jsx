import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPosts = () => {
    const posts = [
        { id: 1, title: '게시글1' },
        { id: 2, title: '게시글2' },
        { id: 3, title: '게시글3' },
        { id: 4, title: '게시글4' },
        { id: 5, title: '게시글5' },
        { id: 6, title: '게시글6' }
    ];

    return (
        <div>
            <h2>카테고리</h2>
            {posts.map(post => (
                <Link key={post.id} to={`/community/post/${post.id}`}>{post.title}</Link>
            ))}
        </div>
    );
};

export default CategoryPosts;