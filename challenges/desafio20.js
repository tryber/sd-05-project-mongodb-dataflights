// Procura o primeiro (limit(1)) voo que rtk não exista ($exists: false)
// Retornando o campo vooId
db.voos
  .find(
    { rtk: { $exists: false } },
    {
      _id: 0,
      vooId: 1,
    }
  )
  .limit(1);
