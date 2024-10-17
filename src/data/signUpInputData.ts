import { Type } from "../enums/Type";
import { InputProps } from "../interfaces/InputProps";

export const fname: InputProps = {
  type: Type.Text,
  name: "first_name",
  placeholder: "First Name",
  id: "fname",
};
export const lname: InputProps = {
  type: Type.Text,
  name: "last_name",
  placeholder: "Last Name",
  id: "lname",
};
export const email: InputProps = {
  type: Type.Email,
  name: "email",
  placeholder: "Enter Your Email",
  id: "email",
};
export const password: InputProps = {
  type: Type.Password,
  name: "password",
  placeholder: "Enter Password",
  id: "password",
};
export const passowrdConfirmation: InputProps = {
  type: Type.Password,
  name: "password_confirmation",
  placeholder: "Re-Enter Password",
  id: "passconfirmation",
};
export const profileImage = {
  name: "profile_image",
  id: "profileImage",
};
