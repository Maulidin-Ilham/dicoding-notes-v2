const useRegister = async ({ name, email, password }) => {
  const BASE_URL = "https://notes-api.dicoding.dev/v1";
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
    return { status: "error", message: responseJson.message };
  }

  return { status: "success", message: responseJson.message };
};

export default useRegister;
