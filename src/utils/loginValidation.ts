import * as Yup from "yup";

const PASSWORD_REGEX = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
export const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("username is required")
    .min(3, "username must be at least 3 characters long")
    .max(20, "username is too Long!"),
  password: Yup.string()
    .min(6, "Password is too Short!")
    .max(10, "Password is too Long!")
    .matches(
      PASSWORD_REGEX,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is required"),
});