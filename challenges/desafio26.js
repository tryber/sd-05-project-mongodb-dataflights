db.voos.deleteMany({
  $and: [
    { "empresa.nome": "GOL" },
    { "passageiros.pago": { $gte: 5 } },
    { "passageiros.pago": { $lte: 10 } },
  ],
});
