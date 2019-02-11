module.exports = (serviceRegistry, beforeInterceptors = []) => {
  const server = require('http').createServer((req, res) => {
    const [, serviceName, methodName] = req.url.split('/');
    const payload = [];
    req.on('data', chunk => payload.push(chunk));
    req.on('end', () => {
      try {
        const args = JSON.parse(payload.length === 1 ? payload[0] : Buffer.concat(payload));
        const service = serviceRegistry[serviceName];
        const interceptorArgs = beforeInterceptors
          .map(interceptor => interceptor(req, res, service[methodName]))
          .reduce((acc, xs) => [...acc, ...xs], []);
        service[methodName](...interceptorArgs, ...args)
          .then(result => ({ result }), error => ({ error }))
          .then(response => res.end(JSON.stringify(response)));
      } catch (e) {
        res.end(JSON.stringify({ error: e.message }));
      } finally {
        res.statusCode = 200;
      }
    });
  });
  server.listen(3000);
};
