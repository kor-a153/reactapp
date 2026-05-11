import React from 'react';
import styled from 'styled-components';
import S, { colorCSS } from '../../style';

const ImageCard = ({ src, name }) => {
  return (
    <Card>
      <ImageWrapper>
        <img src={src} alt={name} />
      </ImageWrapper>
      <TextArea>
        <S.Span size="h11Regular" isvisible="true">{name}</S.Span>
      </TextArea>
    </Card>
  );
};

const Card = styled.div`
  width: 144px;
  height: 132px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${colorCSS["faillog_gray4"]};
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 144px;
  height: 96px;
  background-color: ${colorCSS["faillog_gray2"]};
  flex-shrink: 0;

  img {
    width: 144px;
    height: 96px;
    object-fit: cover;
    display: block;
  }
`;

const TextArea = styled.div`
  width: 144px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  background-color: #ffffff;
  box-sizing: border-box;

  span {
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default ImageCard;
