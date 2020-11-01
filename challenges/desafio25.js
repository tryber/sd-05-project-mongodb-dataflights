// Remova todos os voos da empresa AZUL em que a quantidade de combustível seja menor do que 400.
// Informe a quantidade de documentos removidos.
// o método deleteMany exclui e informa a quantidade de itens excluídos;

db.voos.deleteMany({
    "empresa.nome": "AZUL",
    litrosCombustivel : { $lt: 400 }
});
