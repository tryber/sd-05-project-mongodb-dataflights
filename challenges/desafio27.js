// PR do Alexander pois nao passava no cc de nenhum jeito
db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  }),
});
db.resumoVoos.findOne({}, { _id: 0 });
