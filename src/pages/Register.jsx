import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import useInput from "../hooks/useInput";
import useRegister from "../hooks/useRegister";
import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const Register = () => {
  const navigate = useNavigate();
  const [name, onChangeName] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { register } = useRegister();
  const { isEnglish } = useContext(LanguageContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      password.length >= 6 &&
      name.trim() !== "" &&
      email !== "" &&
      password.trim() !== ""
    ) {
      const { error } = await register({ name, email, password });
      if (error) {
        console.log(error);
      } else {
        navigate("/login");
      }
    }
  };

  return (
    <>
      <Container>
        <div className="md:flex md:flex-col md:items-center">
          <div className="bg-gray-200 border border-gray-200 p-5 rounded-md shadow-md md:w-7/12 lg:w-6/12">
            <form
              action=""
              className="flex flex-col space-y-3 w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Nama..."
                className="p-3 rounded-md outline-none border border-transparent focus:border focus:border-gray-500"
                onChange={onChangeName}
                value={name}
                required
              />
              <input
                type="email"
                placeholder="Email..."
                className="p-3 rounded-md outline-none border border-transparent focus:border focus:border-gray-500"
                onChange={onChangeEmail}
                value={email}
                required
              />
              <input
                type="password"
                placeholder="Password..."
                className="p-3 rounded-md outline-none border border-transparent focus:border focus:border-gray-500"
                onChange={onChangePassword}
                value={password}
                required
              />

              <button
                type="submit"
                className="p-3 bg-black text-white rounded-md hover:opacity-80 transition  duration-200 ease-in-out"
              >
                <p className="font-bold tracking-wide text-base">
                  {isEnglish ? "Register" : "Daftar"}
                </p>
              </button>
            </form>
          </div>
          <h1 className="mt-6 dark:text-white">
            {isEnglish ? "Already have account? " : "Sudah Punya akun? "}
            <Link to={"/login"} className="underline">
              <span>{isEnglish ? "Login here" : "Login disini"}</span>
            </Link>
          </h1>
        </div>
      </Container>
    </>
  );
};

export default Register;
