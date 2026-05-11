import React, { useState, useRef, useEffect } from 'react';
import myStyle from '../../styles/CommunitySearchOrderStyle';
import S from '../../style';

import downImage from '../../resources/down.svg'

const OPTIONS = ['제목', '제목+내용', '내용', '작성자', '댓글'];

const CommunitySearchOrderComponent = ({ defaultValue = '제목', onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const wrapperRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <myStyle.Wrapper ref={wrapperRef}>
      <myStyle.Trigger onClick={() => setIsOpen((prev) => !prev)}>
        <S.Span size="h8Regular" color="faillog-black">{selected}</S.Span>
        <myStyle.ChevronImg isOpen={isOpen} src={downImage}></myStyle.ChevronImg>
      </myStyle.Trigger>

{/* customProps은 dom에 전달하면 안된다 그러기위해 앞에 $를 붙인다. */}
      {isOpen && (
        <myStyle.OptionBox>
          {OPTIONS.map((option) => (
            <myStyle.OptionItem
              key={option}
              $isfirst={option === '제목'}
              $selected={option === selected}
              onClick={() => handleSelect(option)}
            >
              <S.Span size="h8Regular" color="faillog-black">{option}</S.Span>
            </myStyle.OptionItem>
          ))}
        </myStyle.OptionBox>
      )}
    </myStyle.Wrapper>
  );
};

export default CommunitySearchOrderComponent;
