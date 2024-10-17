export interface SignUpValues {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    profile_image: File | null;

    [key: string]: string | File | null;
  }