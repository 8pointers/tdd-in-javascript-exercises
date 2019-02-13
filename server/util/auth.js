const jwt = require('jsonwebtoken');

class JWTService {
  constructor(secret) {
    this.secret = secret;
  }
  sign(payload) {
    return jwt.sign(payload, this.secret, { expiresIn: '1h' });
  }

  verify(token) {
    return jwt.verify(token, this.secret);
  }
}

class AuthService {
  constructor(jwtService, users) {
    this.jwtService = jwtService;
    this.users = users;
  }

  login(username, password) {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (!user) {
      return Promise.reject('loginFailed');
    }
    return Promise.resolve(this.jwtService.sign({ playerId: user.id }));
  }
}

const authBeforeInterceptor = jwtService => (request, response, method) => {
  if (/authContext/.exec(method)) {
    try {
      const token = jwtService.verify(request.headers.jwt);
      return [{ playerId: token.playerId }];
    } catch (e) {
      throw new Error('notAuthorised');
    }
  }
  return [];
};

module.exports = { JWTService, AuthService, authBeforeInterceptor };
