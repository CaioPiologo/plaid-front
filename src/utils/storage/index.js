const setStorage = (name, value) => {
  localStorage.setItem(name, value);
};

const setSessionStorage = (name, value) => {
  sessionStorage.setItem(name, value);
};

const getStorage = (name) => {
  const data = localStorage.getItem(name);
  if (data) {
    return data;
  }
  return sessionStorage.getItem(name);
};

const clearStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
};

const removeFromStorage = (name) => {
  localStorage.removeItem(name);
  sessionStorage.removeItem(name);
};

export {
  setStorage,
  setSessionStorage,
  getStorage,
  clearStorage,
  removeFromStorage,
};
