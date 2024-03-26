import { fetchWithToken } from "../utils/fetchWithToken";

const useFetchNotes = () => {
  const BASE_URL = "https://notes-api.dicoding.dev/v1";

  const getActiveNotes = async () => {
    const response = await fetchWithToken(`${BASE_URL}/notes`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
  };

  return { getActiveNotes };
};

export default useFetchNotes;
