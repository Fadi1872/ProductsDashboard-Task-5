import axios from "axios";
import { SignUpErrors } from "../interfaces/SignUpErrors";

interface User {
  fname: string;
  lname: string;
  userName: string;
  email: string;
  imageUrl: string;
}

type InputValue = FormDataEntryValue | null;

//this calss is to host all the auth functionalities
class AuthService {
  //store data in the local storage
  static storeUserData(token: string, user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  }

  //login method that sends the request to the backend and returns the error messages if exists
  static async logIn(email: InputValue, password: InputValue) {
    try {
      const response = await axios.post("https://test1.focal-x.com/api/login", {
        email: email,
        password: password,
      });
      AuthService.storeUserData(response.data.token, response.data.user);
      return null;
    } catch (err: any) {
      if (err.response) {
        if (err.response.status == 422) {
          return {
            email: err.response.data.errors?.email || "",
            password: err.response.data.errors?.password || "",
          };
        } else {
          return {
            email: err.response.data.msg,
          };
        }
      } else {
        return {
          email: "Network error",
        };
      }
    }
  }

  // the regestering function
  static async signUp(
    fname: string,
    lname: string,
    email: string,
    password: string,
    passwordConfirmation: string,
    profileImage: File
  ): Promise<SignUpErrors | null> {
    try {
      const data = {
        first_name: fname,
        last_name: lname,
        user_name: fname + "_" + lname,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        profile_image: profileImage,
      };
      let formdata = new FormData();
      for (const [key, value] of Object.entries(data)) {
        formdata.append(key, value);
      }
      const response = await axios.post(
        "https://test1.focal-x.com/api/register",
        formdata
      );
      AuthService.storeUserData(
        response.data.data.token,
        response.data.data.user
      );
      return null;
    } catch (err: any) {
      if (err.response) {
        if (err.response.status == 422) {
          let errors = {};
          Object.entries(err.response.data.errors).forEach((element) => {
            errors = { ...errors, [element[0]]: element[1] };
          });
          return errors;
        } else {
          return { error: "Failed To Sign Up" };
        }
      } else {
        return { error: "Network Error" };
      }
    }
  }

  // checks if the user has info in the localsorage
  static isLoggedIn(): boolean {
    return !!localStorage.getItem("token") && !!localStorage.getItem("user");
  }

  // removes the users informations
  static logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
}

export default AuthService;
