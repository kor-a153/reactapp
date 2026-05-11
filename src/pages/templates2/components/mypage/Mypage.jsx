

import React from 'react';

const mypage = () => {
    return (
      <div>
      <div>
        <Link to={"/mypage"}>mypage</Link>
      </div>
      <div>
        <Link to={"/mypage/profileEdit"}>내정보 수정하기</Link>
      </div>
      <div>
        <Link to={"/mypage/profile"}>내 정보 관리</Link>&nbsp;|&nbsp;
        <Link to={"/mypage/my-logs"}>마이 페일로그</Link>
        <Link to={"/mypage/liked-logs"}>좋아요 한 로그</Link>
        <Link to={"/mypage/projects"}>프로젝트</Link>
        <Link to={"/mypage/trash"}>로그 휴지통</Link>
        <Link to={"/mypage/posts"}>내 게시글</Link>
      </div>
      <hr />
      <Outlet />
    </div>
    );
};

export default mypage;