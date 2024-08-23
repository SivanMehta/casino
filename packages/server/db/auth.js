const errorCodes = {
  401: 'User not found',
  403: 'Incorrect Credentials'
};

export function generateError(response, code) {
  response.status(code).json({ error: errorCodes[code]});
}

function decrypt(auth) {
  return auth;
}

export function encrypt(user) {
  return JSON.stringify(user);
}

// middleware to verify if a user is logged in
export function isAuthorized(req, res) {
  const cookies = req.cookies();
  const auth = decrypt(cookies.auth);
  if(auth) {
    next();
  } else {
    generateError(403);
  }
}

// middleware used to gate transactions
export function checkAuthorization(req, res, next) {
  next();
}
