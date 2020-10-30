// Procura os voos da empresaNome GOL no ano de 2017
// Limitando os 10(limit) primeiros, com os campos de vooId, nome, origem, destino, mês e ano
db.voos
  .find(
    { "empresa.nome": "GOL", ano: 2017 },
    {
      _id: 0,
      vooId: 1,
      "empresa.nome": 1,
      "aeroportoOrigem.nome": 1,
      "aeroportoDestino.nome": 1,
      mes: 1,
      ano: 1,
    }
  )
  .limit(10);
