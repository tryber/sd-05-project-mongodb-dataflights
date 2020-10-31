const voosDomesticos = db.voos.count(
  {
    $and: [
      { "empresa.nome": "PASSAREDO" },
      { "natureza": "Doméstica" }
    ]
  }
);

db.resumoVoos.insertOne(
  { "empresa": "PASSAREDO", "totalVoosDomesticos": voosDomesticos }
);

db.resumoVoos.find(
  { "empresa": "PASSAREDO" },
  { "_id": 0, "empresa": 1, "totalVoosDomesticos": 1 }
).limit(1);
