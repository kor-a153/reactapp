import React from "react";
import S from "./styles/HeroSectionStyles";

const QuickMenuCardComponent = ({ title, icon, color, size = "small" }) => (
  <S.QuickCard size={size} bgColor={color}>
    <S.CardIcon>{icon}</S.CardIcon>
    <S.CardTitle>{title}</S.CardTitle>
  </S.QuickCard>
);

export default QuickMenuCardComponent;