const __ = 'replace me so that the test is passing';

it('you understand asynchronous tests', function() {
  expect(1).toBe(1);
  setTimeout(function() {
    expect(1).toBe(2);
  }, 1000);
});
it('you understand asynchronous tests 2', function (done) {
  setTimeout(function () {
    expect(1).toBe(2);
    done();
  }, 1000);
});

it('you understand setInterval', function (done) {
  let result = '';
  const interval = setInterval(function () {
    result += 'x';
  }, 100);
  setTimeout(function () {
    clearInterval(interval);
    expect(result).toBe(__);
    done();
  }, 350);
});

test('you really understand async 1', function (done) {
  let i = 0;
  setTimeout(function () {
    i = 1;
  }, 200);
  setTimeout(function () {
    expect(i).toBe(__);
  }, 100);
  setTimeout(function () {
    expect(i).toBe(__);
    done();
  }, 300);
  expect(i).toBe(__);
});

test('you really understand async 2', function (done) {
  let i = 0;
  expect(i).toBe(__);
  setTimeout(function () {
    i = 1;
  }, 0);
  expect(i).toBe(__);
  setTimeout(function () {
    expect(i).toBe(__);
    done();
  }, 1);
  expect(i).toBe(__);
});

test('you really understand async 3', function (done) {
  let i = 0;
  const loopDueTime = Date.now() + 1000;
  setTimeout(function () {
    i = 1;
  }, 300);
  while (new Date().getTime() <= loopDueTime) {
  }
  expect(i).toBe(__);
  setTimeout(function () {
    expect(i).toBe(__);
    done();
  }, 0);
  expect(i).toBe(__);
});
