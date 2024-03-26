import { fetchWithToken } from "./fetchWithToken";

const archiveNote = async (id) => {
  const BASE_URL = "https://notes-api.dicoding.dev/v1";
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
    method: "POST",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
};

export default archiveNote;
