// Conte os documentos em que o campo aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e OCEANIA.
// Operador $nin para analisar a lista de valores que são diferentes aos especificados
db.voos.count({ "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] }});
