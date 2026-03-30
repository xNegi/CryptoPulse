import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  headers: { "Content-Type": "application/json" }
});

export const signupUser = async (data) => {
  return API.post("/signup", data);
};

export const loginUser = async (data) => {
  return API.post("/login", data);
};