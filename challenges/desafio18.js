// Procurar o primeiro (limit(1)) voo que passagereiros seja maior($gt) que 7000
// Retornando os campos vooId, mês e ano
db.voos
  .find(
    { "passageiros.pagos": { $gt: 7000 } },
    {
      _id: 0,
      vooId: 1,
      mes: 1,
      ano: 1,
    }
  )
  .limit(1);
