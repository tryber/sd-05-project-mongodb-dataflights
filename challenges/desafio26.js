// Remova todos os voos da empresa GOL em que a quantidade de passageiros pagos esteja entre 5 e 10, incluindo os casos em que a quantidade é 5 e 10.
// Informe a quantidade de documentos removidos -> feito automaticamente pelo comando delete.

db.voos.deleteMany({
  $and: [
    { litrosCombustivel: { $exists: true } },
    { "passageiros.pagos": { $gte: 5 } },
    { "passageiros.pagos": { $lte: 10 } },
  ],
});
