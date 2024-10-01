import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Register,
  Login,
  DashboardLayout,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
} from "./pages/index";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
const isDarkThemeEnable = checkDefaultTheme();

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnable={isDarkThemeEnable} />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          { path: "stats", element: <Stats /> },
          {
            path: "all-jobs",
            element: <AllJobs />,
          },

          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
