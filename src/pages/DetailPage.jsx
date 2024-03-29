import { useNavigate, useParams } from "react-router-dom";
import Container from "../components/Container";
import { getFormatedDate } from "../utils/getFormatedDate";
import { useEffect, useState } from "react";
import getNote from "../utils/getNote";
import Loading from "../components/Loading";
import deleteNote from "../utils/deleteNote";
import ArchiveIcon from "../components/ArchiveIcon";
import UnarchiveIcon from "../components/UnarchiveIcon";
import DeleteIcon from "../components/DeleteIcon";
import archiveNote from "../utils/archiveNote";
import unarchiveNote from "../utils/unarchiveNote";

const DetailPage = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleNote = async () => {
      setLoading(true);
      const { error, data } = await getNote(noteId);
      if (!error) {
        setNote(data);
        setLoading(false);
      }
    };
    const timer = setTimeout(() => {
      fetchSingleNote();
    }, 1500);

    return () => clearTimeout(timer);
  }, [noteId]);

  const deleteHandler = async (id) => {
    const { error } = await deleteNote(id);
    if (!error) {
      navigate("/");
    } else {
      console.log("error");
    }
  };

  const archivedToggle = async (id) => {
    if (note.archived === true) {
      const { error } = await unarchiveNote(id);
      if (!error) {
        navigate("/arsip");
      } else {
        console.log("error");
      }
    } else {
      const { error } = await archiveNote(id);
      if (!error) {
        navigate("/");
      } else {
        console.log("error");
      }
    }
  };

  return (
    <>
      <Container>
        {loading && <Loading />}
        {!loading && (
          <>
            <h1 className="text-xl font-bold dark:text-white">{note.title}</h1>
            <p className="mt-2 text-gray-500 dark:text-white">
              {getFormatedDate(note.createdAt)}
            </p>
            <p className="text-lg mt-5 dark:text-white">{note.body}</p>
            <div className="flex flex-row space-x-4 mt-4 dark:text-white">
              <button
                className="p-3 bg-blue-400 text-black w-[100px] rounded-md hover:opacity-80 transition duration-200 ease-in-out flex flex-col justify-center items-center"
                onClick={() => archivedToggle(note.id)}
                title={note.archived === false ? "Arsipkan" : "Batalkan Arsip"}
              >
                {note.archived == false ? <ArchiveIcon /> : <UnarchiveIcon />}
              </button>
              <button
                className="p-3 bg-red-400 text-black w-[100px] rounded-md hover:opacity-80 transition duration-200 ease-in-out flex justify-center items-center"
                onClick={() => deleteHandler(note.id)}
                title="Hapus"
              >
                <DeleteIcon />
              </button>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default DetailPage;
