import React, { useState, useContext  } from "react";
import { Link } from "react-router-dom";
import ReusableInput from "./ReusableInput";
import { LinkButton } from "./ui/LinkButton";
import { ModalContext } from "./modal/ModalProvider";

const LoginForm: React.FC = () => {
  interface FormValues {
    email: string;
    password: string;
  }

  interface FormErrors {
    email?: string;
    password?: string;
  }
  const [errorMessage, setErrorMessage]=useState<string>("");
  const [values, setValues] = useState<FormValues>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<FormValues>>({});
  const { openModal, closeModal, setToken } = useContext(ModalContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });

    validateField(name, values[name as keyof FormValues]);
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email is invalid";
        }
        break;
      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: error });
  };
  const handleLogin = async () => {
    if (!values.email || !values.password) {
      return setErrorMessage("Please fill all the fields");
    }
    setErrorMessage("");
    closeModal('loginModal');
    setToken('xyz');
  }
  return (
    <div className="flex justify-center items-center">
      <div className="inline-flex flex-col justify-center items-center form-card border-bg">
        <h1 className="font-bold text-blue text-xl lg:text-2xl font-sora leading-none md:leading-normal lg:leading-loose mr-2 -mt-4">
          Login
        </h1>
        <form className="flex flex-col justify-center">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-end items-start gap-y-1">
              <label htmlFor="email" className="text-base md:text-md font-medium font-sora">
                Email
              </label>
              <ReusableInput
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>
            <div className="flex flex-col justify-end items-start gap-y-1">
              <label htmlFor="password" className="text-base md:text-md font-medium font-sora">
                Password
              </label>
              <ReusableInput
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <div className="text-red-500 text-sm mt-1">{errors.password}</div>
              )}
            </div>
          </div>
          <div className="flex items-center h-5 mt-2">
            <input id="default-checkbox" type="checkbox" className="w-4 h-4 rounded-md border-bg" />
            <label htmlFor="default-checkbox" className="ml-2 font-medium text-black tracking-widest text-base">
              Remember me
            </label>
          </div>
          <div className="flex-center mt-4">
            <LinkButton to="/" intent="blue" onClick={handleLogin} className="flex items-center justify-center w-full">
              Login
            </LinkButton>
          </div>
        </form>
        <div className="flex-center text-sm font-sora font-semibold mt-4">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue font-bold"  onClick={() => {
              openModal('signUpModal');
            }}>
              Sign up<span className="text-blue">!</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
