const fetch = require('node-fetch');

const rpcFactory = token => (serviceName, methodName, ...args) =>
  fetch(`http://localhost:3000/${serviceName}/${methodName}`, {
    method: 'POST',
    body: JSON.stringify(args),
    headers: { 'Content-Type': 'application/json', jwt: token }
  })
    .then(response => response.json())
    .then(({ result, error }) => (error ? Promise.reject(new Error(error)) : result));

const rpc = rpcFactory();

describe('http rpc', function() {
  it('should be able to invoke public methods', async function() {
    const result = await rpc('echoService', 'withoutAuth', 'World');
    expect(result).toBe('Hello World!');
  });

  it('should not be able to invoke protected methods without logging in', async function() {
    expect.assertions(1);
    try {
      await rpc('echoService', 'withAuth', 'World');
    } catch (e) {
      expect(e).toEqual(new Error('notAuthorised'));
    }
  });
  it('should be able to invoke protected methods', async function() {
    const token = await rpc('authService', 'login', 'user1@user.com', 'password1');
    const authRpc = rpcFactory(token);
    const result = await authRpc('echoService', 'withAuth', 'World');
    expect(result).toBe('Hello World! Your id is 1.');
  });
});
