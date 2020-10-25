// Retorne a quantidade de voos dos anos de 2017 e 2018.
// operador de comparação $in - funciona como "ou"

db.voos.count({
  ano: {
    $in: [
      2017, 2018
    ]
  }
});
