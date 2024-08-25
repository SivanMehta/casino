export function decrypt(auth) {
  return JSON.parse(atob(auth));
}

export function encrypt(user) {
  return btoa(JSON.stringify(user));
}
