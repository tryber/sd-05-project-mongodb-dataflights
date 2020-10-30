// Procura o primeiro (limit(1)) voo que litrosCombustivel exista ($exists: true)
// Retornando o campo vooId
db.voos
  .find(
    {
      litrosCombustivel: {
        $exists: true,
      },
    },
    {
      _id: false,
      vooId: true,
    }
  )
  .limit(1);
