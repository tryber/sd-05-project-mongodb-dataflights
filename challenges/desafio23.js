// Procura primeiro voo (limit(1)) que o campo litrosCombustivel exista
// E que litrosCombustivel não seja maior ($lte) 1000
db.voos
  .find(
    { litrosCombustivel: { $exists: true, $lte: 1000 } },
    { _id: 0, vooId: 1, litrosCombustivel: 1 }
  )
  .limit(1);
