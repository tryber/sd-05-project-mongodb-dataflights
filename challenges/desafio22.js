db.voos.findOne(
  {
    $and: [
      { "aeroportoOrigem.sigla": "SBGR" },
      { "aeroportoDestino.sigla": "KJFK" },
      { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
    ],
  },
  { vooId: 1, _id: 0 }
);
