import { useEffect, useState } from "react";
import { fetchWithToken } from "../utils/fetchWithToken";

const useFetchNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://notes-api.dicoding.dev/v1";

  const getActiveNotes = async () => {
    setLoading(true);
    const response = await fetchWithToken(`${BASE_URL}/notes`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      setLoading(true);
      return { error: true, data: null };
    }
    setNotes(responseJson.data);
    setLoading(false);
    return { error: false, data: responseJson.data };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getActiveNotes();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return { notes, loading };
};

export default useFetchNotes;
