// Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui,
// via uso de uma nova coleção chamada resumoVoos.
// Para isso, escreva no arquivo desafio28.js duas queries, nesta ordem:
// Conte quantos voos da empresa LATAM AIRLINES BRASIL cujo campo natureza possua valor igual a Doméstica
// e crie uma query que insira na coleção resumoVoos um documento com os campos:
// empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).

// o método insertOne() insere um documento em uma coleção;
// honestidade acadêmica - aprendi através do PR dos colegas Sid e Juliette que era possível fazer isso:
// const que armazena o resultado (valor) da contagem de voos;

const domesticFlightsCount = db.voos.count({
    "empresa.nome": "LATAM AIRLINES BRASIL",
    natureza: "Doméstica",
  });

db.resumoVoos.insertOne({
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: domesticFlightsCount,
  });
  
// o método findOne() retorna o primeiro valor encontrado;

db.resumoVoos.findOne({
    empresa: "LATAM AIRLINES BRASIL",
  },
  {
    _id: 0
  });
  