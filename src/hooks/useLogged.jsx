import { fetchWithToken } from "../utils/fetchWithToken";

const useLogged = () => {
  const BASE_URL = "https://notes-api.dicoding.dev/v1";
  const getLoggedIn = async () => {
    const response = await fetchWithToken(`${BASE_URL}/users/me`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      return { error: true, data: null };
    } else {
      return { error: false, data: responseJson.data };
    }
  };
  return { getLoggedIn };
};

export default useLogged;
