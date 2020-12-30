db.voos.findOne(
  {
    $and: [
      { "empresa.nome": { $nin: ["AZUL", "GOL"] } },
      { litrosCombustivel: { $exists: true, $not: { $gt: 600 } } },
    ],
  },
  {
    vooId: 1,
    "empresa.nome": 1,
    litrosCombustivel: 1,
    _id: 0,
  }
);
