import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('q') || '';

    return (
        <div>
            <h2>검색 결과: {searchQuery}</h2>
            <p>검색 결과 페이지입니다.</p>
        </div>
    );
};

export default SearchResults;