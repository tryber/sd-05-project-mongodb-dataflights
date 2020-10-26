// Conte quantos voos da empresa PASSAREDO cujo campo natureza possua valor igual a Doméstica e crie uma query que insira na coleção resumoVoos um documento com os campos: empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).

const tVD = db.voos.count({
  "empresa.nome": "PASSAREDO",
  natureza: "Doméstica",
});
// podia ser escrito também com $and

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: tVD,
});

// Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento presente na coleção resumoVoos em que a empresa seja PASSAREDO.

db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
// Já que o objeto contem apenas empresa e totalVoosDomesticos, podia também escrever apenas o _id: 0

// [Honestidade acadêmica] - Consulta do PR do aluno Kyle Felipe para perceber que const pode ser chamada assim. Link https://github.com/tryber/sd-05-project-mongodb-dataflights/pull/4/files .
