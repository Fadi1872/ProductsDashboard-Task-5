import SignUp from "../pages/SignUp";
import SingIn from "../pages/SingIn";

export const publicroutes = [
  {
    path: "/sign_in",
    element: <SingIn />,
  },
  {
    path: "/sign_up",
    element: <SignUp />,
  },
];
