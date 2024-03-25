import { useState } from "react";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import useRegister from "../hooks/useRegister";

const Register = () => {
  const navigate = useNavigate();

  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const register = async (name, email, password) => {
    const { status, message } = await useRegister({ name, email, password });
    if (status === "success") {
      console.log({ status, message });
      navigate("/login");
    } else {
      console.log({ status, message });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
  };

  return (
    <>
      <Container>
        <h1>Register</h1>
        <div className="md:flex md:flex-col md:items-center">
          <div className="bg-gray-200 border border-gray-200 p-5 rounded-md shadow-md md:w-7/12 lg:w-6/12">
            <form
              action=""
              className="flex flex-col space-y-3 w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Name..."
                className="p-3 rounded-md outline-none border border-transparent focus:border focus:border-gray-500"
                required
                value={name}
                onChange={(e) => onNameChange(e)}
              />
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="p-3 rounded-md outline-none border border-transparent focus:border focus:border-gray-500"
                required
                value={email}
                onChange={(e) => onEmailChange(e)}
              />
              <input
                type="text"
                placeholder="Password..."
                className="p-3 rounded-md outline-none border border-transparent focus:border focus:border-gray-500"
                required
                value={password}
                onChange={(e) => onPasswordChange(e)}
              />

              <button
                type="submit"
                className="p-3 bg-black text-white rounded-md hover:opacity-80 transition  duration-200 ease-in-out"
              >
                <p className="font-bold tracking-wide text-base">Simpan</p>
              </button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
