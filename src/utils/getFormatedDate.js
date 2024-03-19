export const getFormatedDate = (date) => {
  let dateFormated = new Date(date);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const formatedDate = dateFormated.toLocaleDateString("id-ID", options);

  return formatedDate;
};
