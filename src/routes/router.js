<<<<<<< HEAD
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
=======
import { createBrowserRouter, Outlet } from "react-router-dom";
import IntroPage from "../pages/templates2/IntroPage";
import MainPage from "../pages/templates2/MainPage";
import MyTestContextContainer from "../pages/templates/mytestcontext/MyTestContextContainer";
import MyTestDocs from "../pages/templates/mytestdocs/MyTestDocs";
import MyTestQueryStringContainer from "../pages/templates/mytestquerystring/MyTestQueryStringContainer";
import MyTestQueryStringRead from "../pages/templates/mytestquerystring/MyTestQueryStringRead";
import MyTestParameterContainer from "../pages/templates/mytesturlparameter/MyTestParameterContainer";
import MyTestParameterRead from "../pages/templates/mytesturlparameter/MyTestParameterRead";
import ChatbotPage from "../pages/templates2/chat/ChatbotPage";
import CaseDetailPage from "../pages/templates2/case/CaseDetailPage";
import NotFoundPage from "../pages/templates2/common/NotFoundPage";
import LoginPage from "../pages/templates2/auth/LoginPage";
import SignupPage from "../pages/templates2/auth/SignupPage";
import GrowthPage from "../pages/templates2/growth/GrowthPage";
import CommunityPage from "../pages/templates2/components/community/community";
import LogListContainer from "../pages/templates2/log/logList/LogListContainer";
import LogWriteContainer from "../pages/templates2/log/logWrite/LogWriteContainer";
import LogStep1Component from "../pages/templates2/log/logWrite/LogStep1Component";
import LogStep2Component from "../pages/templates2/log/logWrite/LogStep2Component";
import LogResultContainer from "../pages/templates2/log/logResult/LogResultContainer";
import PlanWriteContainer from "../pages/templates2/plan/planWrite/PlanWriteContainer";
import ProjectDashboardContainer from "../pages/templates2/plan/projectDashboard/ProjectDashboardContainer";
import DailyCheckListContainer from "../pages/templates2/growth/dailyCheckList/DailyCheckListContainer";
import MyPage from "../pages/templates2/user/MyPage";
import ProfileEdit from "../pages/templates2/components/mypage/profileEdit/ProfileEdit";
import Profile from "../pages/templates2/components/mypage/profile/Profile";
import MyLogs from "../pages/templates2/components/mypage/my-logs/MyLogs";
import LikedLogs from "../pages/templates2/components/mypage/liked-logs/LikedLogs";
import Projects from "../pages/templates2/components/mypage/projects/Projects";
import Trash from "../pages/templates2/components/mypage/trash/Trash";
import Posts from "../pages/templates2/components/mypage/posts/Posts";
import CommunityWrite from "../pages/templates2/components/community/communityWrite/CommunityWrite";
import CommunityMain from "../pages/templates2/components/community/communityMain/CommunityMain";
import CategoryPosts from "../pages/templates2/components/community/categoryPosts/CategoryPosts";
import SearchResults from "../pages/templates2/components/community/searchResults/SearchResults";
import PostRead from "../pages/templates2/components/community/postRead/PostRead";
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24

const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< HEAD
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
=======
    element: <IntroPage />,
    children: [
      {
        path: "section1",
        element: <div><h2>인트로 섹션 1</h2><p>인트로의 첫 번째 하위 섹션입니다.</p></div>
      },
      {
        path: "section2",
        element: <div><h2>인트로 섹션 2</h2><p>인트로의 두 번째 하위 섹션입니다.</p></div>
      }
    ]
  },
  {
    path: "/intro",
    element: <IntroPage />
  },
  {
    path: "/main",
    element: <MainPage />,
    children: [
      {
        path: "menu1",
        element: <div><h2>메인 메뉴 1</h2><p>메인의 첫 번째 하위 메뉴입니다.</p></div>
      },
      {
        path: "menu2",
        element: <div><h2>메인 메뉴 2</h2><p>메인의 두 번째 하위 메뉴입니다.</p></div>
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/growth",
    element: <GrowthPage />
  },
  {
    path: "/community",
    element: <CommunityPage />,
    children: [
      {
        path: "",
        element: <CommunityMain />
      },
      {
        path: "write",
        element: <CommunityWrite />
      },
      {
        path: "category",
        element: <CategoryPosts />
      },
      {
        path: "search",
        element: <SearchResults />
      },
      {
        path: "post/:id",
        element: <PostRead />
      }
    ]
  },
  {
    path: "/log",
    element: (
      <div>
        <h1>로그 페이지</h1>
        <p>로그 관련 기능을 제공하는 페이지입니다.</p>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "list",
        element: <LogListContainer />
      },
      {
        path: "write",
        element: <LogWriteContainer />,
        children: [
          {
            path: "",
            element: <LogStep1Component />
          },
          {
            path: "step2",
            element: <LogStep2Component />
          },
          {
            path: "result",
            element: <LogResultContainer />
          }
        ]
      }
    ]
  },
  {
    path: "/mypage",
    element: <MyPage />,
    children: [
      {
        path: "profileEdit",
        element: <ProfileEdit />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "my-logs",
        element: <MyLogs />
      },
      {
        path: "liked-logs",
        element: <LikedLogs />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "trash",
        element: <Trash />
      },
      {
        path: "posts",
        element: <Posts />
      }
    ]
  },
  {
    path: "/chatbot",
    element: <ChatbotPage />
  },
  {
    path: "/case/:id",
    element: <CaseDetailPage />
  },
  {
    path: "/plan/write",
    element: <PlanWriteContainer />
  },
  {
    path: "/plan/dashboard",
    element: <ProjectDashboardContainer />
  },
  {
    path: "/growth/daily-checklist",
    element: <DailyCheckListContainer />
  },
  {
    path: "*",
    element: <NotFoundPage />
  },
  {
    path: "/docs",
    element: <MyTestDocs />,
    children: [
      {
        path: "context", // == index: true
        element: <MyTestContextContainer />
      },
      {
        path: "url-parameter",
        element: <MyTestParameterContainer />
      },
      {
        path: "url-parameter/:id",
        element: <MyTestParameterRead />
      },
      {
        path: "query-string",
        element: <MyTestQueryStringContainer />
      },
      {
        path: "query-string/read",
        element: <MyTestQueryStringRead />
      }
    ]
  },

>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
])

export default router;
