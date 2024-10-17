import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { privateroutes } from "./privateroutes";
import { publicroutes } from "./publicroutes";
import NotFound from "../pages/NotFound";
import MustBeLoggedIn from "./MustBeLoggedIn";
import NavBarLayout from "./NavBarLayout";

const Navigation = () => {
  const router = createBrowserRouter([
    {
      element: <MustBeLoggedIn mustLogIn={false} />,
      children: publicroutes,
    },
    {
      element: <MustBeLoggedIn mustLogIn />,
      children: [
        {
          element: <NavBarLayout />,
          children: privateroutes,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Navigation;
