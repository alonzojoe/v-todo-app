export function saveLocalStorage(key, array) {
  if (!Array.isArray(array)) {
    throw new Error("The second parameter must be an array");
  }
  localStorage.setItem(key, JSON.stringify(array));
}

export function getLocalStorage(key) {
  const storedArray = localStorage.getItem(key);
  if (!storedArray) {
    return [];
  }
  try {
    return JSON.parse(storedArray);
  } catch (error) {
    console.error("Error parsing JSON from local storage", error);
    return [];
  }
}
