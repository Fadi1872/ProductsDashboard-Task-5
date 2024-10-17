import { useEffect } from "react";
import AuthService from "../Services/AuthService";
import { Outlet, useNavigate } from "react-router-dom";

const MustBeLoggedIn = ({ mustLogIn }: { mustLogIn: boolean }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!AuthService.isLoggedIn() && mustLogIn) {
      navigate("/sign_in");
    } else if (AuthService.isLoggedIn() && !mustLogIn) {
      navigate("/")
    }
  }, []);

  return <Outlet />;
};

export default MustBeLoggedIn;
