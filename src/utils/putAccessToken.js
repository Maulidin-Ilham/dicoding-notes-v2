export const putAccessToken = (accessToken) => {
  return localStorage.setItem("accessToken", accessToken);
};
