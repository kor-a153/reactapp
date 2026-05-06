import React, { useEffect, useRef, useState } from 'react';
import S from '../../style';
import myStyle from '../../styles/CommunitySearchOrder2ComponentStyle'

import downImage from '../../resources/down.png'

const OPTIONS = ["최신순", "좋아요 순", "조회 순"];

const CommunitySearchOrder2Component = ({ defaultValue = "최신순", onChange }) => {
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
        <S.Span size="h8-regular" color="faillog-black">{selected}</S.Span>
        <myStyle.ChevronImg isOpen={isOpen} src={downImage}></myStyle.ChevronImg>
      </myStyle.Trigger>

{/* customProps은 dom에 전달하면 안된다 그러기위해 앞에 $를 붙인다. */}
      {isOpen && (
        <myStyle.OptionBox>
          {OPTIONS.map((option) => (
            <myStyle.OptionItem
              key={option}
              $isfirst={option === "제목"}
              $selected={option === selected}
              onClick={() => handleSelect(option)}
            >
              <S.Span size="h8-regular" color=
              {option === selected ? "faillog_purple" : "faillog-black"}>{option}</S.Span>
            </myStyle.OptionItem>
          ))}
        </myStyle.OptionBox>
      )}
    </myStyle.Wrapper>
  );
};

export default CommunitySearchOrder2Component;