import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReusableInput from "./ReusableInput";
import { LinkButton } from "./ui/LinkButton";

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

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="inline-flex flex-col justify-center items-center form-card border-bg">
        <h1 className="font-extrabold text-blue-deep label-input text-2xl -mt-10">
          Sign In
        </h1>
        <form className="flex flex-col justify-center">
          <div className="place-item gap-px">
            <label htmlFor="name" className="label-text">
              Name
              <span className="asterisk">*</span>
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
              <div className="text-red-500 text-sm mt-1">{errors.name}</div>
            )}
          </div>
          <div className="place-item gap-px">
            <label htmlFor="email" className="label-text">
              Email
              <span className="asterisk">*</span>
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
          <div className="place-item">
            <label htmlFor="password" className="label-text">
              Password
              <span className="asterisk">*</span>
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
          <div className="flex-center mt-4">
            <LinkButton to="/" intent="blue" size="small">
              Create my account
            </LinkButton>
          </div>
        </form>
        <div className="flex-center text-base font-quicksand font-semibold">
          <p>
            Already have an account?{" "}
            <Link to="/" className="text-blue font-bold">
              Login<span className="text-black">!</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
