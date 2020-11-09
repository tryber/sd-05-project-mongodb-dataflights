db.voos.deleteMany({
  $and: [
    { "passageiros.pago": { $gte: 5 } },
    { "passageiros.pago": { $lte: 10 } },
    { "empresa.nome": "GOL" },
  ],
});
