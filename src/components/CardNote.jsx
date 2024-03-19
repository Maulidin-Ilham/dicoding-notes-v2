import { Link } from "react-router-dom";

const CardNote = () => {
  return (
    <>
      <Link to={"/note/2"}>
        <div className="bg-gray-200 border border-gray-200 p-4 rounded-md shadow-md min-h-[180px] lg:min-h-[230px] flex flex-col justify-between space-y-3  hover:opacity-80 transition duration-200 ease-in-out">
          <div className="flex flex-col space-y-4">
            <h1 className="font-semibold text-lg line-clamp-1">
              juddsdadsd sasa{" "}
            </h1>
            <p className="line-clamp-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              repellendus! Lorem ipsum
            </p>
          </div>
          <div>
            <p>21/02/2024</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardNote;
