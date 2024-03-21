/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import Container from "../components/Container";
import { getFormatedDate } from "../utils/getFormatedDate";

const DetailPage = ({ notes, getDeleteId, getArchivedId, getUnarchivedId }) => {
  const { noteId } = useParams();
  const navigate = useNavigate();

  const selectedNote = notes.find((note) => note.id === noteId);

  const deleteHandler = (id) => {
    getDeleteId(id);
    navigate("/");
  };

  const archivedToggle = (id) => {
    if (selectedNote.archived === true) {
      getUnarchivedId(id);
      navigate("/arsip");
    } else {
      getArchivedId(id);
      navigate("/");
    }
  };

  return (
    <>
      <Container>
        <h1 className="text-xl font-bold">{selectedNote.title}</h1>
        <p className="mt-2 text-gray-500">
          {getFormatedDate(selectedNote.createdAt)}
        </p>
        <p className="text-lg mt-5">{selectedNote.body}</p>
        <div className="flex flex-row space-x-4 mt-4">
          <button
            className="p-3 bg-blue-400 text-white w-[100px] rounded-md hover:opacity-80 transition duration-200 ease-in-out"
            onClick={() => archivedToggle(selectedNote.id)}
          >
            {selectedNote.archived == false ? "Arsip" : "Undo"}
          </button>
          <button
            className="p-3 bg-red-400 text-white w-[100px] rounded-md hover:opacity-80 transition duration-200 ease-in-out"
            onClick={() => deleteHandler(selectedNote.id)}
          >
            Delete
          </button>
        </div>
      </Container>
    </>
  );
};

export default DetailPage;
