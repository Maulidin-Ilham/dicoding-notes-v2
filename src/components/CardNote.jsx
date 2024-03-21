/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getFormatedDate } from "../utils/getFormatedDate";

const CardNote = ({ note }) => {
  let date = note.createdAt;

  return (
    <>
      <Link to={`/notes/${note.id}`}>
        <div className="bg-gray-200 border border-gray-200 p-4 rounded-md shadow-md min-h-[180px] lg:min-h-[230px] flex flex-col justify-between space-y-3  hover:opacity-70 transition duration-200 ease-in-out">
          <div className="flex flex-col space-y-4">
            <h1 className="font-semibold text-lg line-clamp-1">{note.title}</h1>
            <p className="line-clamp-4 break-words hyphens-auto">{note.body}</p>
          </div>
          <div>
            <p>{getFormatedDate(date)}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardNote;
