import React, { useState, useContext  } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReusableInput from "./ReusableInput";
import { LinkButton } from "./ui/LinkButton";
import { ModalContext } from "./modal/ModalProvider";
import { handleSignIn } from '../api/registerLogin';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

const SignUpForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<FormValues>>({});
  const { openModal, closeModal, setToken } = useContext(ModalContext);
  const [errorMessage, setErrorMessage]=useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });

    validateField(name, values[name as keyof FormValues]);
  };

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value) {
          error = "Name is required";
        }
        break;
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

    setErrors({
      ...errors,
      [name]: error
    });
  };
  const handleSubmit = async () => {
    if (!values.name || !values.email || !values.password) {
      return setErrorMessage("Please fill all the fields");
    }
    setErrorMessage("");
    try {
      const response = await handleSignIn(values.name, values.email, values.password);
      console.log(response.data);
      closeModal('signUpModal');
      setToken(response.data.token);
    } catch (error) {
      console.error('Error signing up', error);
      if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Sign-up failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="inline-flex flex-col justify-center items-center form-card border-bg">
        <h1 className="font-bold text-blue flex flex-col justify-end items-start text-xl lg:text-2xl font-sora -mt-4">
          Sign Up
        </h1>
        <form className="flex flex-col justify-center">
          <div className="flex flex-col justify-end items-start gap-y-1">
            <label htmlFor="name" className="text-base md:text-md font-medium font-sora">
              Name
            </label>
            <ReusableInput
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && (
              <div className="text-red-600 text-sm mt-1">{errors.name}</div>
            )}
          </div>
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
              <div className="text-red-600 text-sm mt-1">{errors.email}</div>
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
              <div className="text-red-600 text-sm mt-1">{errors.password}</div>
            )}
          </div>
          {errorMessage && (
            <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
          )}
          <div className="flex-center mt-4">
            <LinkButton to="/" intent="blue" className="flex items-center justify-center w-full" onClick={handleSubmit}>
              Sign Up
            </LinkButton>
          </div>
        </form>
        <div className="flex-center text-xs font-sora font-semibold">
          <p>
            Already have an account?{" "}
            <Link to="/" className="text-blue font-bold" onClick={() => {
                openModal('loginModal');
              }}>
              Login<span className="text-blue">!</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
