import styled from "styled-components";
import { colorCSS } from "../style";

const S = {}

//게시글목록, ai추천글컨테이너 래퍼
S.PostListAndAiRecommandPostWrapper = styled.div`
    width: 1320px;
`

S.ListBgWrap = styled.div`
    width: 100dvw;
    background-color: ${colorCSS["faillog-sector-gray"]};
`

export default S;