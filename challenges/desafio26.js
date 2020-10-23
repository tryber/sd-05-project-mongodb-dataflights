db.voos.count({
  $and: [
    { "empresa.nome": "GOL" },
    {
      $and: [
        { "passageiros.pagos": { $gte: 5 } },
        { "passageiros.pagos": { $lte: 10 } },
      ],
    },
  ],
});

db.voos.deleteMany({
  $and: [
    { "empresa.nome": "GOL" },
    {
      $and: [
        { "passageiros.pagos": { $gte: 5 } },
        { "passageiros.pagos": { $lte: 10 } },
      ],
    },
  ],
});
