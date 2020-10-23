// Retorne o vooId do primeiro voo em que a empresa seja DELTA AIRLINES *OU* AMERICAN AIRLINES, *AND* a sigla do aeroporto de origem seja SBGR *AND* a sigla do aeroporto de destino seja KJFK.

db.voos.findOne(
  {
    $and: [
      {
        $or: [
          { "empresa.nome": "DELTA AIRLINES" },
          { "empresa.nome": "AMERICAN AIRLINES" },
        ],
      },
      { "aeroportoOrigem.sigla": "SBGR" },
      { "aeroportoDestino.sigla": "KJFK" },
    ],
  },
  { vooId: 1, _id: 0 }
);
