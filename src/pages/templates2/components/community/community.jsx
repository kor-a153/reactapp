import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Community = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/community/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
                <Link to="/community">Community</Link>

            <div>
                <Link to="/community/write">새글 작성하기</Link>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="제목이나 키워드를 입력하세요"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleSearch}>검색</button>
            </div>

            <Outlet />
        </div>
    );
};

export default Community;