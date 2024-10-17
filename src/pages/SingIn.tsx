import React, { useState } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import { Type } from "../enums/Type";
import { InputProps } from "../interfaces/InputProps";
import logo from "./../assets/Logo.png";
import AuthService from "../Services/AuthService";
import { useNavigate } from "react-router-dom";

type Errors = {
  email: string;
  password: string;
};

const SingIn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [singIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({} as Errors);
  const navigate = useNavigate();

  let email: InputProps = {
    type: Type.Email,
    placeholder: "Enter Your Email",
    name: "email",
    id: "email",
  };

  let password: InputProps = {
    type: Type.Password,
    placeholder: "Enter Your Password",
    name: "password",
    id: "password",
  };

  const handleSignIn = async () => {
    setLoading(true);
    let response = await AuthService.logIn(singIn.email, singIn.password);
    if (response) {
      setErrors((prev) => ({
        ...prev,
        email: response?.email || "",
        password: response?.password || "",
      }));
    } else {
      navigate("/");
    }
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-orange-450 to-yellow-450 h-screen flex justify-center items-center py-10">
      {loading ? (
        <div>loading</div>
      ) : (
        <Form
          logo={logo}
          title="Sign In"
          subTitle="Enter your credentials to access your account"
          buttonText="sign in"
          question="Don’t have an account?"
          linkText="Create one"
          linkTo="/sign_up"
          onSubmtion={handleSignIn}
        >
          <LabeledInput
            label="Email"
            fInput={email}
            error={errors?.email}
            set={setSignIn}
            state={singIn}
          />
          <LabeledInput
            label="Password"
            fInput={password}
            error={errors?.password}
            set={setSignIn}
            state={singIn}
          />
        </Form>
      )}
    </div>
  );
};

export default SingIn;
