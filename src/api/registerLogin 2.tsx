import axios from "axios";
const API_PORT = import.meta.env.VITE_API;

export const handleSignIn = async (name: string, email: string, password: string) => {
  const reqBody = {
    name,
    email,
    password,
  };

  try {
    const response = await axios.post(`${API_PORT}/register`, reqBody);
    return response;
  } catch (err) {
    console.error('Error registering user', err);
    throw err;
  }
};

export const handleLogin = async (email: string, password: string, rememberMe: boolean) => {
  const reqBody = {
    email,
    password,
    rememberMe
  };

  try {
    const response = await axios.post(`${API_PORT}/login`, reqBody);
    return response;
  } catch (err) {
    console.error('user login details error', err);
    throw err;
  }
};
