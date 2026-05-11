import React from "react";
import S from "./styles/HeroSectionStyles";

const HeroBannerComponent = ({ title, description, onClick }) => (
  <S.HeroBanner onClick={onClick}>
    <S.BannerContent>
      <h2>{title}</h2>
      <p>{description}</p>
      <S.GoBtn>바로가기</S.GoBtn>
    </S.BannerContent>
    <S.BannerGraphic />
  </S.HeroBanner>
);

export default HeroBannerComponent;