// Remover e informa quando(deleteMany)voos deletados da nomeEmpresa AZUL, que litrosCombustivel exista
// E que seja menor($lt) que 400
db.voos.deleteMany({
  "empresa.nome": "AZUL",
  litrosCombustivel: { $exists: true, $lt: 400 },
});
