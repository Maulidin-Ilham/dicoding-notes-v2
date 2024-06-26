const useRegister = () => {
  const BASE_URL = "https://notes-api.dicoding.dev/v1";
  const register = async ({ name, email, password }) => {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false };
  };

  return { register };
};

export default useRegister;
