import React, { useState } from 'react';
import CommunityCategoryComponent from './CommunityCategoryComponent';
import S from '../../styles/CommunityCategoryContainerStyle';

const CommunityCategoryContainer = () => {
  const categories = ["전체", "공부/취업", "사업/창업", "인간관계", "건강/루틴", "기타"];
  const [selected, setSelected] = useState("전체");

  return (
    <S.container>
      {categories.map((category) => (
        <CommunityCategoryComponent
          key={category}
          content={category}
          selected={selected === category}
          onClick={() => setSelected(category)} //여기다 zustand 데이터 저장예정
        />
      ))}
    </S.container>
  );
};

export default CommunityCategoryContainer;