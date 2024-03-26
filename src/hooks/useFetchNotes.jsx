import { useEffect, useState } from "react";
import { fetchWithToken } from "../utils/fetchWithToken";

const useFetchNotes = () => {
  const [notes, setNotes] = useState([]);

  const BASE_URL = "https://notes-api.dicoding.dev/v1";

  const getActiveNotes = async () => {
    const response = await fetchWithToken(`${BASE_URL}/notes`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      return { error: true, data: null };
    }
    setNotes(responseJson.data);
    return { error: false, data: responseJson.data };
  };

  useEffect(() => {
    getActiveNotes();
  }, []);

  return { notes };
};

export default useFetchNotes;
