// Procura voos com nomeEmpresa seja DeltaAirLine ou($in) AmericanAirlines
// Que a sigla de Origem = SBGR e Destino = KJFK,retornando vooId
db.voos
  .find(
    {
      "empresa.nome": {
        $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"],
      },
      "aeroportoOrigem.sigla": "SBGR",
      "aeroportoDestino.sigla": "KJFK",
    },
    {
      _id: 0,
      vooId: 1,
    }
  )
  .limit(1);
