const users = [{
  id: 0,
  username: "admin",
  password: "admin",
  balance: 1000
}, {
  id: 1,
  username: "sivan",
  password: "mehta",
  balance: 1000
}, {
  id: 2,
  username: "warren",
  password: "oracle",
  balance: 99999
}, {
  id: 3,
  username: "joe",
  password: "schmoe",
  balance: 10
}];

export function load (db) {
  users.forEach(user => {
    db.set(`user:${user.username}`, user);
  });
}
