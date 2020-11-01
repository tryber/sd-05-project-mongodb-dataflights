// Conte os documentos em que o campo aeroportoDestino.pais seja igual a BRASIL, ARGENTINA ou CHILE.
// operador de comparação $in - funciona como "ou"

db.voos.count({
  "aeroportoDestino.pais": {
    $in: [
      "BRASIL",
      "ARGENTINA",
      "CHILE",
    ]
  }
});
