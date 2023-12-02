const getLocalStorage = (key: string): any =>
  JSON.parse(localStorage.getItem(key));

const setLocalStorage = (key: string, value: any): void =>
  localStorage.setItem(key, JSON.stringify(value));

const removeLocalStorage = (key: string): void => localStorage.removeItem(key);

export { getLocalStorage, setLocalStorage, removeLocalStorage };
