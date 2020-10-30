// Procura o primeiro(limit(1)) voo que litrosCombustivel seja maior ou igual ($gte) 1000
// Retornando vooId
db.voos
  .find(
    { litrosCombustivel: { $gte: 1000 } },
    {
      _id: 0,
      vooId: true,
    }
  )
  .limit(1);
