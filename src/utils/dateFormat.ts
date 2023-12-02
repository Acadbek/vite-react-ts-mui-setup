export const dateFormatter = (date: string): string => {
  const formattedDate: Date = new Date(date);

  const month: string[] = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const year: number = formattedDate.getFullYear();
  const time: string = String(formattedDate).split(" ")[4];

  return `${formattedDate.getDate()}.${
    month[formattedDate.getMonth()]
  }.${year} ${time}`;
};
