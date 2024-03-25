import { useEffect } from "react";

const useLogin = () => {
  const BASE_URL = "https://notes-api.dicoding.dev/v1";

  const login = async ({ email, password }) => {
    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const responseJson = await res.json();
      if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true, data: null };
      }

      return { error: false, data: responseJson.data };
    } catch (error) {
      console.log("login error");
    }
  };

  useEffect(() => {
    const initialLogin = async () => {
      const { error, data } = await login({
        email: "example@example.com",
        password: "password123",
      });
      if (error) {
        console.error("Login failed:", error);
        // Handle login failure
      } else {
        console.log("Login successful:", data);
        // Handle successful login
      }
    };

    initialLogin();
  }, []);

  return { login };
};

export default useLogin;
