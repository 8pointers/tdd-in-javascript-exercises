const rpc = require('./util/rpc');
const { JWTService, AuthService, authBeforeInterceptor } = require('./util/auth');
const EchoService = require('./echo');

const jwtService = new JWTService('this-is-a-secret');
const authService = new AuthService(jwtService, [
  { id: 1, username: 'user1@user.com', password: 'password1' },
  { id: 2, username: 'user2@user.com', password: 'password2' }
]);
const echoService = new EchoService();

rpc({ authService, echoService }, [authBeforeInterceptor(jwtService)]);
