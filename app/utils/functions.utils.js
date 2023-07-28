function RandomNumberGenerator() {
  return ~~(Math.random() * 90000 + 10000);
}

const UtilsFunctions = {
  RandomNumberGenerator,
};

module.exports = UtilsFunctions;
