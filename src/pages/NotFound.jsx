import { Link } from "react-router-dom";
import Container from "../components/Container";

const NotFound = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col h-screen justify-center items-center bg-white">
          <div className="flex flex-col items-center">
            <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
            <p className="text-2xl font-medium text-gray-600 mb-6">
              Page Not Found
            </p>
            <Link
              to={"/"}
              className="px-4 py-2 font-medium text-white bg-black rounded-md hover:opacity-80 transition-all duration-200 ease-in-out"
            >
              Go Home
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
