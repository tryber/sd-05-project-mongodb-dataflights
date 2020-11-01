// Retorne o total de voos em que o país de origem não seja BRASIL.
// operador de comparação $ne - not equal

db.voos.count({
  "aeroportoOrigem.pais": {
    $ne: "BRASIL"
  },
});
