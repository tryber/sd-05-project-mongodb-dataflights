// Retorne a quantidade de documentos em que o campo aeroportoDestino.pais não seja igual a ESTADOS UNIDOS.
// operador de comparação $ne - not equal

db.voos.count({
  "aeroportoDestino.pais": {
    $ne: "ESTADOS UNIDOS"
  }
});
