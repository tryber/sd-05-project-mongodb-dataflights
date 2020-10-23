db.voos.count({
  $and: [{ "empresa.nome": "PASSAREDO" }, { natureza: "Doméstica" }],
});

db.