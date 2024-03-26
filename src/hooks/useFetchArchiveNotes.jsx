import { useEffect, useState } from "react";
import { fetchWithToken } from "../utils/fetchWithToken";

const useFetchArchiveNotes = () => {
  const BASE_URL = "https://notes-api.dicoding.dev/v1";

  const [archiveNotes, setArchiveNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const getArchivedNotes = async () => {
    setLoading(true);
    const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      setLoading(true);
      return { error: true, data: null };
    }
    setArchiveNotes(responseJson.data);
    setLoading(false);
    return { error: false, data: responseJson.data };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getArchivedNotes();
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return { archiveNotes, loading };
};

export default useFetchArchiveNotes;
