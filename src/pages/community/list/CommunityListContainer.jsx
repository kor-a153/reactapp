import React from 'react';
import { Link } from 'react-router-dom';
import S from '../style';

const CommunityListContainer = () => {

    // const testId = new Array(10).fill(0).map((_, i) => i + 1).map((n) => (
    //     <li><Link to={`/community/detail/${n}`}>{n}번 게시글</Link></li>
    // ))
    // return (
    //     <div>
    //         커뮤니티 목록
    //         {testId}
    //     </div>
    // );

    return (
        <div>
            <S.MainHeaderWrap>
                <S.MainHeader>
                    <S.MainHeaderLeftDiv>
                        <S.Span size={"h2-bold"} color={"faillog-black"}>Community</S.Span>
                        <S.MainHeaderLeftTextOneDiv>
                            <S.Span size={"h8-bold"} color={"faillog_gray9"} display={"block"}>실패를 숨기지 마세요. 우리는 서로의 오답노트에서 가장 크게 배웁니다.</S.Span>
                        </S.MainHeaderLeftTextOneDiv>
                    </S.MainHeaderLeftDiv>

                    <S.MainHeaderRightButtonDiv>
                        <S.WriteButton>
                            <S.Span size={"h7-bold"} color={"faillog_white"}>새 글 작성하기</S.Span>
                        </S.WriteButton>
                    </S.MainHeaderRightButtonDiv>
                </S.MainHeader>
            </S.MainHeaderWrap>

            <S.BestPostWrap>
                <S.BestPost>
                    <S.BestPostLeftLine></S.BestPostLeftLine>
                    <S.BestPostMainWrapDiv>
                        <S.BestPostMainDiv>
                            <S.BestPostMainHeader>헤더</S.BestPostMainHeader>
                            <S.BestPostMainTitle>타이틀</S.BestPostMainTitle>
                            <S.BestPostMainContent>내용</S.BestPostMainContent>
                            <S.BestPostMainHr></S.BestPostMainHr>
                            <S.BestPostMainInfo>정보</S.BestPostMainInfo>
                            <S.BestPostMainButton>버튼</S.BestPostMainButton>
                        </S.BestPostMainDiv>
                    </S.BestPostMainWrapDiv>
                    <S.BestPostImgWrapDiv></S.BestPostImgWrapDiv>
                </S.BestPost>
            </S.BestPostWrap>
        </div>
    );

};

export default CommunityListContainer;