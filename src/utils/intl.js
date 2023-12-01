export const dictionaryWithKeys = (text, params) => {
  let dictItem = text;

  if (params) {
    Object.keys(params).forEach((paramKey) => {
      const trimmedParamKey = paramKey.trim();
      const searchValue = `{${trimmedParamKey}}`;

      dictItem = dictItem.replace(new RegExp(searchValue, 'g'), `${params[trimmedParamKey]}`);
    });
  }

  return dictItem;
};
