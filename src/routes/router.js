import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/layout/RootLayout";
import LogMainContainer from "../pages/log/LogMainContainer";
import MainContainer from "../pages/main/MainContainer";
import LogResultContainer from "../pages/log/result/LogResultContainer";
import LogDetailContainer from "../pages/log/result/detail/LogDetailContainer";
import LogReportContainer from "../pages/log/result/report/LogReportContainer";
import LogPatternsContainer from "../pages/log/result/report/patterns/LogPatternsContainer";
import LogActionPlanContainer from "../pages/log/result/report/actionplan/LogActionPlanContainer";
import CommunityContainer from "../pages/community/CommunityContainer";
import CommunityListContainer from "../pages/community/list/CommunityListContainer";
import CommunityCreateContainer from "../pages/community/create/CommunityCreateContainer";
import CommunityDetailContainer from "../pages/community/detail/CommunityDetailContainer";
import CommunityEditContainer from "../pages/community/edit/CommunityEditContainer";
import LogWriteStep2Container from "../pages/log/write/LogWriteStep2Container";
import LogWriteStep1Container from "../pages/log/write/LogWriteStep1Container";
import LogWriteContainer from "../pages/log/write/LogWriteContainer";
import AccountLayout from "../pages/account/AccountLayout";
import JoinContainer from "../pages/account/join/JoinContainer";
import LoginContainer from "../pages/account/login/LoginContainer";
import ResetPassWordContainer from "../pages/account/resetpassword/ResetPassWordContainer";
import FindIdContainer from "../pages/account/findid/FindIdContainer";
import MyPostsContainer from "../pages/mypage/posts/MyPostsContainer";
import MyProfileContainer from "../pages/mypage/profile/MyProfileContainer";
import MyTrashContainer from "../pages/mypage/trash/MyTrashContainer";
import MyGuestbookContainer from "../pages/mypage/guestbook/MyGuestbookContainer";
import MyLikesContainer from "../pages/mypage/likes/MyLikesContainer";
import MyFailLogsContainer from "../pages/mypage/faillog/MyFailLogsContainer";
import MyPageContainer from "../pages/mypage/MyPageContainer";
import LogOtherContainer from "../pages/log/other/LogOtherContainer";
import LogOtherListContainer from "../pages/log/other/LogOtherListContainer";
import ChronologyMainContainer from "../pages/chronology/ChronologyMainContainer";
import ProjectMainContainer from "../pages/project/ProjectMainContainer";
import VisionMainContainer from "../pages/vision/VisionMainContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <MainContainer />  
      },
      {
        path: "fail-logs",
        element: <LogOtherContainer />,
        children: [
          {
            path: "",
            element: <LogOtherListContainer />
          },
        ]
      },
      {
        path: "logs",
        element: <LogMainContainer />,
        children: [
          {
            path: "new",
            element: <LogWriteContainer />,
            children: [
              {
                path: "step1",
                element: <LogWriteStep1Container />
              },
              {
                path: "step2",
                element: <LogWriteStep2Container />
              },
            ]
          },
          {
            path: "result/:id",
            element: <LogResultContainer />,
            children: [
              {
                path: "detail",
                element: <LogDetailContainer />
              },
              {
                path: "report",
                element: <LogReportContainer />,
                children: [
                  {
                    path: "patterns",
                    element: <LogPatternsContainer />
                  },
                  {
                    path: "action-plan",
                    element: <LogActionPlanContainer />
                  }
                ]
              },
            ]
          },
        ]
      },
      {
        path: "community",
        element: <CommunityContainer />,
        children: [
          {
            path: "",
            element: <CommunityListContainer />
          },
        ]
      },
      {
        path: "community/new",
        element: <CommunityCreateContainer />
      },
      {
        path: "community/detail/:id",
        element: <CommunityDetailContainer />
      },
      {
        path: "community/edit/:id",
        element: <CommunityEditContainer />
      },
      {
        element: <AccountLayout />,
        children: [
          {
            path: "join",
            element: <JoinContainer />
          },
          {
            path: "login",
            element: <LoginContainer />
          },
          {
            path: "reset-password",
            element: <ResetPassWordContainer />
          },
          {
            path: "find-id",
            element: <FindIdContainer />
          }
        ]
      },
      {
        path: "my-page",
        element: <MyPageContainer />,
        children: [
          {
            path: "profile",
            element: <MyProfileContainer />
          },
          {
            path: "fail-logs",
            element: <MyFailLogsContainer />
          },
          {
            path: "posts",
            element: <MyPostsContainer />
          },
          {
            path: "likes",
            element: <MyLikesContainer />
          },
          {
            path: "guestbook",
            element: <MyGuestbookContainer />
          },
          {
            path: "trash",
            element: <MyTrashContainer />
          },
        ]
      },
      { 
        path : "chronology",
        element: <ChronologyMainContainer />,
        children: []
      },
      {
        path: "projects",
        element: <ProjectMainContainer />,
        children : []
      },
      {
        path : "vision",
        element : <VisionMainContainer />,
        children : []
      }
      

    ]
  },
])

export default router;
