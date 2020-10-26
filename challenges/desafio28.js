// Conte quantos voos da empresa LATAM AIRLINES BRASIL cujo campo natureza possua valor igual a Doméstica e crie uma query que insira na coleção resumoVoos um documento com os campos: empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).

const tVD = db.voos.count({
  "empresa.nome": "LATAM AIRLINES BRASIL",
  natureza: "Doméstica",
});
// podia ser escrito também com $and

db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: tVD,
});

// Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento presente na coleção resumoVoos em que a empresa seja LATAM AIRLINES BRASIL.

db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" }, { _id: 0 });
// Ou seja implicitamente empresa 1 e totalVoosDomesticos que é a totalidade do objeto.
