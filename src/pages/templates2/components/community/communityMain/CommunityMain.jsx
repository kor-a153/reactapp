import React, { useState } from 'react';
import PopularPosts from '../popularPosts/PopularPosts';
import GeneralPosts from '../generalPosts/GeneralPosts';

const CommunityMain = () => {
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const categories = [
        { name: '전체', label: '전체' },
        { name: '공부/취업', label: '공부/취업' },
        { name: '사업/창업', label: '사업/창업' },
        { name: '인간관계', label: '인간관계' },
        { name: '건강/루틴', label: '건강/루틴' },
        { name: '자유', label: '자유' }
    ];

    return (
        <>
            <PopularPosts />

            <div>
                {categories.map(category => (
                    <button
                        key={category.name}
                        type="button"
                        onClick={() => setSelectedCategory(category.name)}
                    >
                        {category.label}{selectedCategory === category.name ? ' (선택)' : ''}
                    </button>
                ))}
            </div>

            <GeneralPosts />
        </>
    );
};

export default CommunityMain;
