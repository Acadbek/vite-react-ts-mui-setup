const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const setLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));


const removeLocalStorage = (key) => localStorage.removeItem(key);

export {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
};
