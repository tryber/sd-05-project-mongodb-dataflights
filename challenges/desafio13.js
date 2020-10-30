// Conta os voos com destinosPaís sejam NÃO igual ($nin) à Europa, Ásia, e Oceania
db.voos.count({
  "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] },
});
