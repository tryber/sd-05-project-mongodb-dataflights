db.voos.count({
  "aeroportoDestino.conitnente": { $ne: ["EUROPA", "ASIA", "OCEANIA"] },
});
