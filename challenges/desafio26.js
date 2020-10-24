// Remova todos os voos da empresa GOL em que a quantidade de passageiros pagos esteja entre 5 e 10, incluindo os casos em que a quantidade é 5 e 10.
//  Informe a quantidade de documentos removidos.
// Atenção às quantidades menores que 10 e maiores que 5
db.voos.deleteMany({
  $and: [
    {"empresa.nome": "GOL"},
    { "passageiros.pagos" : {$gte: 5}},
    { "passageiros.pagos" : {$lte: 10}},
  ],
});
