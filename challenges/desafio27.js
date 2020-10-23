db.voos.count({
  $and: [{ "empresa.nome": "PASSAREDO" }, { natureza: "Doméstica" }],
});

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({
  $and: [{ "empresa.nome": "PASSAREDO" }, { natureza: "Doméstica" }],
}),
});

db.resumoVoos.findOne({}, { _id: 0 });
