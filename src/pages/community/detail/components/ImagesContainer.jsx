import React from 'react';
import styled from 'styled-components';
import S from '../../style';
import ImageCard from './ImageCard';

const DUMMY_IMAGES = [
  { src: "https://picsum.photos/seed/img1/144/96", name: "screenshot_01.png" },
  { src: "https://picsum.photos/seed/img2/144/96", name: "screenshot_02.png" },
  { src: "https://picsum.photos/seed/img3/144/96", name: "diagram_03.jpg" },
  { src: "https://picsum.photos/seed/img4/144/96", name: "design_04.jpg" },
  { src: "https://picsum.photos/seed/img5/144/96", name: "mockup_05.png" },
  { src: "https://picsum.photos/seed/img6/144/96", name: "preview_06.png" },
  { src: "https://picsum.photos/seed/img7/144/96", name: "reference_07.jpg" },
  { src: "https://picsum.photos/seed/img8/144/96", name: "sample_08.png" },
  { src: "https://picsum.photos/seed/img9/144/96", name: "capture_09.jpg" },
  { src: "https://picsum.photos/seed/img10/144/96", name: "image_10.png" },
];

const ImagesContainer = ({ images = DUMMY_IMAGES }) => {
  return (
    <Wrapper>
      <S.Span size="h7Bold" isvisible="true">첨부이미지 목록</S.Span>
      <ImageList>
        {images.map((image, index) => (
          <ImageCard key={index} src={image.src} name={image.name} />
        ))}
      </ImageList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1320px;
  padding: 71px 24px 41px 24px;
  display: flex;
  flex-direction: column;
`;

const ImageList = styled.div`
  width: 1270px;
  height: 162px;
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
`;

export default ImagesContainer;
