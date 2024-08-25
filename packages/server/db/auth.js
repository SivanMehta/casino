export function decrypt(auth) {
  return JSON.parse(atob(auth));
}

export function encrypt(user) {
  console.log(user);
  return btoa(JSON.stringify(user));
}
