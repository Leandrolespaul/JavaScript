const geradorId = () => {
  let id = 1;
  return () => id++;
};

module.exports = { geradorId };
