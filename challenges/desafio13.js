// Conte os documentos em que o campo aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e OCEANIA.
// operador de comparação $nin - not in

db.voos.count({
  "aeroportoDestino.continente": {
    $nin: [
      "EUROPA",
      "ASIA",
      "OCEANIA",
    ]
  }
});
