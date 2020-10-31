// Retorne o total de voos em que o 
// país de origem não seja BRASIL.
db.voos.count(
  { "aeroportoOrigem.pais": { $ne: "BRASIL" } },
  { "_id": 0, "vooId": 1 }
);
