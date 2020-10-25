// Conte os documentos em que o campo aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e OCEANIA.

// https://docs.mongodb.com/manual/reference/operator/query/nin/
db.voos.count({
  "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] },
});
