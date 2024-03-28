/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Container from "../components/Container";
import useInput from "../hooks/useInput";
import useLogin from "../hooks/useLogin";
import PropTypes from "prop-types";

const Login = ({ getValueForm }) => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { login } = useLogin();
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() !== "" && password.length >= 6) {
      const { error, data } = await login({ email, password });
      if (error) {
        console.error();
      } else {
        getValueForm(data);
        // navigate("/login");
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
                <p className="font-bold tracking-wide text-base">Simpan</p>
              </button>
            </form>
          </div>
          <h1 className="mt-6">
            Belum Punya akun?{" "}
            <Link to={"/register"} className="underline">
              <span>Registrasi disini</span>
            </Link>{" "}
          </h1>
        </div>
      </Container>
    </>
  );
};

Login.propTypes = {
  getValueForm: PropTypes.func.isRequired,
};

export default Login;
