import { putAccessToken } from "../utils/putAccessToken";

const useLogin = () => {
  const BASE_URL = "https://notes-api.dicoding.dev/v1";

  const login = async ({ email, password }) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      alert(responseJson.message);
      return { error: true };
    } else {
      putAccessToken(responseJson.data.accessToken);

      return { error: false };
    }
  };

  return { login };
};

export default useLogin;
