// Retorne o vooId, empresa.nome e litrosCombustivel do primeiro voo em que litrosCombustivel não seja maior do que 600 e a empresa não seja GOL ou AZUL, e o campo litrosCombustivel exista.

db.voos.findOne(
  {
    $and: [{ litrosCombustivel: { $lte: 600 } }, { "empresa.nome": { $nin: ["GOL", "AZUL"] } }],
  },
  { vooId: true, "empresa.nome": true, litrosCombustivel: true, _id: false },
);
