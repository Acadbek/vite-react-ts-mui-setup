export const formData = (details, id) => {
  const form = new FormData();

  for (let detail in details) {
    form.append(detail, details[detail]);
  }

  if (id) {
    form.append("id", id);
  }

  return form;
};
