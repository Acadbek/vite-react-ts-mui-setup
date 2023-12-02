export const dictionaryWithKeys = (
  text: string,
  params: { [key: string]: string }
): string => {
  let dictItem: string = text;

  if (params) {
    Object.keys(params).forEach((paramKey: string) => {
      const trimmedParamKey: string = paramKey.trim();
      const searchValue: string = `{${trimmedParamKey}}`;

      dictItem = dictItem.replace(
        new RegExp(searchValue, "g"),
        `${params[trimmedParamKey]}`
      );
    });
  }

  return dictItem;
};
