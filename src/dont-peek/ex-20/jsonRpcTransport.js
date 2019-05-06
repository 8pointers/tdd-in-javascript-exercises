const fetch = require('node-fetch');

let id = 0;

const transport = endpointUrl => (method, params) =>
  fetch(endpointUrl, {
    method: 'POST',
    body: JSON.stringify({ jsonrpc: '2.0', method, params, id: id++ }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(x => {
      console.log(x);
      return x;
    })
    .then(result => (result.error ? Promise.reject(result.error) : result.result));

module.exports = transport;
