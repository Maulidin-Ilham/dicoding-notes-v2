import { fetchWithToken } from "../utils/fetchWithToken";

const useLoggedIn = async () => {
  const BASE_URL = "https://notes-api.dicoding.dev/v1";
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
};

export default useLoggedIn;
