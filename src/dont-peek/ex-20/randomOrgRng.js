const randomOrgRng = (transport, apiKey, decimalPlaces) => n =>
  transport('generateDecimalFractions', { apiKey, n, decimalPlaces }).then(result => result.random.data);

module.exports = randomOrgRng;
