// Remova todos os voos da empresa AZUL em que a quantidade de combustível seja menor do que 400. Informe a quantidade de documentos removidos.

// https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/

db.voos.deleteMany({
  $and: [{ "empresa.nome": "AZUL" }, { litrosCombustivel: { $lt: 400 } }],
});
