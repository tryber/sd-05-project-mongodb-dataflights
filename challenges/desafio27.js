// Retorne a quantidade total de voos de natureza Doméstica que a empresa PASSAREDO possui,
// via uso de uma nova coleção chamada resumoVoos.
// Ou seja, a coleção resumoVoos conterá documentos onde cada um indica para cada empresa
// a quantidade total de voos que ela possui de natureza Doméstica.
// Para isso, escreva no arquivo desafio27.js duas queries, nesta ordem:

// Conte quantos voos da empresa PASSAREDO cujo campo natureza possua valor igual a Doméstica
// e crie uma query que insira na coleção resumoVoos um documento com os campos:
// empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).

// o método insertOne() insere um documento em uma coleção;
// honestidade acadêmica - aprendi através do PR dos colegas Sid e Juliette que era possível fazer isso:
// const que armazena o resultado (valor) da contagem de voos;

const domesticFlightsCount = db.voos.count({
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  });

db.resumoVoos.insertOne({
    empresa: "PASSAREDO",
    totalVoosDomesticos: domesticFlightsCount,
});

// Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento
// presente na coleção resumoVoos em que a empresa seja PASSAREDO.

// o método findOne() retorna o primeiro valor encontrado;

db.resumoVoos.findOne({
  empresa: "PASSAREDO"
},
{
  _id: 0,
  totalVoosDomesticos: 1,
  empresa: 1,
});
