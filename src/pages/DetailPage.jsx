import { useNavigate, useParams } from "react-router-dom";
import Container from "../components/Container";
import { getFormatedDate } from "../utils/getFormatedDate";
import PropTypes from "prop-types";

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
            className="p-3 bg-blue-400 text-black w-[100px] rounded-md hover:opacity-80 transition duration-200 ease-in-out flex flex-col justify-center items-center"
            onClick={() => archivedToggle(selectedNote.id)}
            title={
              selectedNote.archived === false ? "Arsipkan" : "Batalkan Arsip"
            }
          >
            {selectedNote.archived == false ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 15-6 6m0 0-6-6m6 6V9a6 6 0 0 1 12 0v3"
                  />
                </svg>
              </>
            )}
          </button>
          <button
            className="p-3 bg-red-400 text-black w-[100px] rounded-md hover:opacity-80 transition duration-200 ease-in-out flex justify-center items-center"
            onClick={() => deleteHandler(selectedNote.id)}
            title="Hapus"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </Container>
    </>
  );
};

DetailPage.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
  getDeleteId: PropTypes.func.isRequired,
  getArchivedId: PropTypes.func.isRequired,
  getUnarchivedId: PropTypes.func.isRequired,
};

export default DetailPage;
