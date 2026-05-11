import React from 'react';
import styled from 'styled-components';

import detail1 from '../../resources/detail1.png'
import detail2 from '../../resources/detail2.png'
import S from '../../style';

const Content = () => {
  return (
    <Wrapper>
      <ContentImg src={detail1} $width={"1268px"} $height={"414px"} $marginbottom={"23px"} />
      <S.Span size={"h8Regular"} color={"faillog-black"}>
        익숙한 내 방에서만 공부하던 게 독이었습니다. 실전에서는 낯선 환경과 작은 소음에도 쉽게 흔들렸고, 알고 있던 것도 제대로 꺼내지 못했습니다. 그래서 공부량을 더 늘리는 대신<br/>
        환경부터 바꾸기로 했습니다.<br/><br/>
        집이 아닌 도서관, 카페, 스터디카페를 번갈아 이용했고 처음엔 불편했지만 점점 낯선 공간에서도 집중을 유지하는 시간이 길어졌습니다. 이전에는 긴장하면 손이 굳고 머리가 멍해<br/>
        졌는데, 이제는 다시 흐름을 잡는 연습이 되기 시작했습니다.
      
      <ContentImg src={detail2} $width={"1268px"} $height={"360px"} $marginbottom={"23px"} $margintop={"23px"} />

      공부 루틴도 바꿨습니다. 예전에는 오래 앉아 있는 것 자체에 의미를 뒀지만, 지금은 30분 집중 후 짧게 쉬는 방식으로 구조를 바꿨습니다. 틀린 문제는 그냥 넘어가지 않고 왜 틀렸는<br />
      지를 적으면서 실수의 패턴을 추적했습니다. <br /><br />
      결국 실전은 많이 아는 것보다 흔들려도 다시 꺼낼 수 있는 힘이 더 중요하다는 걸 느꼈습니다. 환경을 바꾸고, 루틴을 바꾸고, 실수의 원인을 적기 시작한 뒤부터 실전에서의 안정감<br />
      이 달라졌습니다.
      </S.Span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  width: 1320px;
  padding-bottom: 11px;
  display: flex;
  flex-direction: column;
`

const ContentImg = styled.img`
  display: block;
  width: ${({$width}) => $width};
  height: ${({$height}) => $height};
  margin-top: ${({$margintop}) => $margintop ? $margintop : "0px"};
  margin-bottom: ${({$marginbottom}) => $marginbottom ? $marginbottom : "0px"};
`

export default Content;