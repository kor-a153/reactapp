import React from 'react';
import styled from 'styled-components';
import S, { colorCSS } from '../../style';

const ImageCard = ({ src, name }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('다운로드 실패:', error);
    }
  };

  return (
    <Card>
      <ImageWrapper>
        {/* 나중에 크기 불러올 예정 */}
        <Image src={src} alt={name} />
      </ImageWrapper>
      <TextArea onClick={handleDownload}>
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
  border-radius: 15px;
  border: 1px solid ${colorCSS["faillog_gray4"]};
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 144px;
  height: 96px;
  background-color: ${colorCSS["faillog_gray2"]};
  flex-shrink: 0;

  /* img {
    width: 144px;
    height: 96px;
    object-fit: cover;
    display: block;
  } */
`;

const Image = styled.img`
    width: 144px;
    height: 96px;
    object-fit: cover;
    display: block;
`

const TextArea = styled.div`
  width: 144px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  background-color: #ffffff;
  box-sizing: border-box;

  cursor: pointer;

  span {
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${colorCSS["faillog_blue"]};
    text-decoration: underline;
  }
`;

export default ImageCard;
