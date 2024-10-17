import { useState } from "react";
import Form from "../components/Form";
import logo from "./../assets/Logo.png";
import LabeledInput from "../components/LabeledInput";
import LabeledFileInput from "../components/LabeledFileInput";
import {
  email,
  fname,
  lname,
  passowrdConfirmation,
  password,
  profileImage,
} from "../data/signUpInputData";
import AuthService from "../Services/AuthService";
import { useNavigate } from "react-router-dom";
import { SignUpErrors } from "../interfaces/SignUpErrors";
import { SignUpValues } from "../interfaces/SignUpValues";

const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<SignUpValues>({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
    profile_image: null,
  });
  const [errors, setErrors] = useState<SignUpErrors>({});
  const navigatie = useNavigate();

  const handleSignUp = async () => {
    setLoading(true);
    const response = await AuthService.signUp(
      signUp.first_name,
      signUp.last_name,
      signUp.email,
      signUp.password,
      signUp.password_confirmation,
      signUp.profile_image || ({} as File)
    );
    
    if (!response) navigatie("/");
    else setErrors(response);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-orange-450 to-yellow-450 h-screen flex justify-center items-center py-10">
      {loading ? (
        <p>loading</p>
      ) : (
        <Form
          logo={logo}
          title="Sign Up"
          subTitle="Fill in the following fields to create an account."
          buttonText="sign up"
          question="Do you have an account?"
          linkText="Sign in"
          linkTo="/sign_in"
          onSubmtion={handleSignUp}
        >
          <LabeledInput
            label="Name"
            fInput={fname}
            sInput={lname}
            error={
              (errors.first_name?.[0] || "") +
              " " +
              (errors.last_name?.[0] || "")
            }
            set={setSignUp}
            state={signUp}
          />
          <LabeledInput
            label="Email"
            fInput={email}
            error={errors.email?.[0] || ""}
            set={setSignUp}
            state={signUp}
          />
          <LabeledInput
            label="Password"
            fInput={password}
            sInput={passowrdConfirmation}
            error={errors.password?.[0] || ""}
            set={setSignUp}
            state={signUp}
          />
          <LabeledFileInput
            label="Profile Image"
            name={profileImage.name}
            id={profileImage.id}
            error={errors.profile_image?.[0] || ""}
            set={setSignUp}
            state={signUp}
          />
        </Form>
      )}
    </div>
  );
};

export default SignUp;
