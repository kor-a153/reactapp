import React from 'react';
import myStyle from '../../styles/CommunityCategoryComponentStyle';
import S from '../../style';

const CommunityCategoryComponent = ({selected, content, onClick}) => {
  return (
    <div>
      <myStyle.button selected={selected} onClick={onClick}>
        {selected ? <S.Span size={"h8Bold"} color={"faillog_white"}>{content}</S.Span> : <S.Span size={"h8Bold"} color={"faillog_gray10"}>{content}</S.Span>}
      </myStyle.button>
    </div>
  );
};

export default CommunityCategoryComponent;