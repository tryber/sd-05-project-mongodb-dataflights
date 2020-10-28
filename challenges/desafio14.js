db.voos.find({ "aeroportoOrigem.pais": { $not: { $eq: "Brasil" } } }).count();
