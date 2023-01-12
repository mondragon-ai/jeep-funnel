export function saveItem(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  const got = sessionStorage.getItem(key);
  return JSON.parse(got);
}
