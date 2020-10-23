db.voos.count({$or: [{"aeroportoDestino.pais": "BRASIL"}, {"aeroportoDestino.pais": "ARGENTINA"}, {"aeroportoDestino.pais": "CHILE"}]});

// MAIS ESPERTO: db.voos.count({"aeroportoDestino.pais": {$in:["BRASIL", "ARGENTINA", "CHILE"]}})
