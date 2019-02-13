class LoginService {
  login(username, password, rememberMe) {
    if (rememberMe) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username');
    }
  }
}

describe('using jest mocks', function() {
  let loginService;
  beforeEach(() => (loginService = new LoginService()));
  afterEach(() => jest.restoreAllMocks());
  it('should store username in localStorage when rememberMe is ticked', function() {
    const setItem = jest.spyOn(Storage.prototype, 'setItem');

    loginService.login('myamoto@samurai.com', 'password', true);

    expect(setItem).toHaveBeenCalledWith('username', 'myamoto@samurai.com');
  });
  it('should not store username in localStorage when rememberMe is not ticked', function() {
    const setItem = jest.spyOn(Storage.prototype, 'setItem');

    loginService.login('myamoto@samurai.com', 'password', false);

    expect(setItem).not.toHaveBeenCalled();
  });
});
