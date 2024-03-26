import { fetchWithToken } from "./fetchWithToken";

const getActiveNotes = async () => {
  const BASE_URL = "https://notes-api.dicoding.dev/v1";
  const response = await fetchWithToken(`${BASE_URL}/notes`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }
  // console.log(responseJson.data);

  return { error: false, data: responseJson.data };
};

export default getActiveNotes;
