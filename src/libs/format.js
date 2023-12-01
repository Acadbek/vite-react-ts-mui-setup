export const format = (option, dateString) => {
  const options =
    option === "year"
      ? { year: "numeric", month: "numeric", day: "numeric" }
      : {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
