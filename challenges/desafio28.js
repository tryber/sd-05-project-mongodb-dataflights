db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos.count({ $and: ["empresa.nome": "LATAM AIRLINES BRASIL"}, {"natureza": "Doméstica"}]})
});

db.resumoVoos.findOne(
  { empresa: "LATAM AIRLINES BRASIL" },
  { _id: false, totalVoosDomesticos: true, empresa: true }
);
