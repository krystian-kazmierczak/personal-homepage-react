export const getFromLocalStorage = (key, value) =>
  JSON.parse(localStorage.getItem(key)) ?? value;

export const saveInLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
