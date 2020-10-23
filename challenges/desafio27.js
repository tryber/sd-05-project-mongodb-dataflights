db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  "totalVoosDomestico": db.voos.count({
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica"
  }),
});
  