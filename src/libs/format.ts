export const format = (option: string, dateString: string): string => {
  const options: Intl.DateTimeFormatOptions =
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
