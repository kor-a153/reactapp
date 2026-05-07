import React from 'react';
import styled from 'styled-components';
import { colorCSS } from '../../style';

const myStyle = {}

myStyle.wrapper = styled.div`
    width: 984px;
    background-color: ${colorCSS["faillog_white"]};
    border-radius: 15px;
`

const Posts = () => {
  return (
    <div>
      <wrapper>

      </wrapper>
    </div>
  );
};

export default Posts;