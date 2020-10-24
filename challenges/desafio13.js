db.voos.count({
  "aeroportoDestino.conitnente": { $nin: ["EUROPA", "ASIA", "OCEANIA"] },
});
