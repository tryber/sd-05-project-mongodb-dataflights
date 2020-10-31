// Conte os documentos em que o campo aeroportoDestino.continente 
// não seja igual a EUROPA, ÁSIA e OCEANIA.
db.voos.count(
  { $and: [{ "aeroportoDestino.continente": { $ne: "EUROPA", $ne: "ÁSIA", $ne: "OCEANIA" } }] },
);
