function decrypt(auth) {
  return atob(auth);
}

export function encrypt(user) {
  return btoa(JSON.stringify(user));
}
