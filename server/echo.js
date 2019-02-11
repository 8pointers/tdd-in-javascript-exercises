class EchoService {
  withoutAuth(name) {
    return Promise.resolve(`Hello ${name}!`);
  }

  withAuth(authContext, name) {
    return Promise.resolve(`Hello ${name}! Your id is ${authContext.playerId}.`);
  }
}

module.exports = EchoService;
