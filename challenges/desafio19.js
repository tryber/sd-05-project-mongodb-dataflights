// Retorne o vooId (CAMPO) do primeiro voo (FINDONE) em que o campo litrosCombustivel exista ($EXIST).

db.voos.findOne({ litrosCombustivel: { $exists: true } }, { vooId: 1, _id: 0 });
// funciona também escrever 1 no lugar de true.
