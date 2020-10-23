const empresa = "PASSAREDO";

const natureza = "Doméstica";

const totalVoosDomesticos = db.voos.find({ $and: [{"empresa.nome": empresa}, {natureza: natureza}]}).count();

db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos
});

db.resumoVoos.findOne({
  empresa
}, {
  _id: 0
});
