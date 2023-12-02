export const formData = ( details: { [key: string]: string }, id?: string ): FormData => {
  const form = new FormData();

  for (let detail in details) {
    form.append(detail, details[detail]);
  }

  if (id) {
    form.append("id", id);
  }

  return form;
};
