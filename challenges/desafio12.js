db.voos.count({
  "aeroportoDestino.pais": { $in: ["ARGENTINA", "BRASIL", "CHILE"] },
});
