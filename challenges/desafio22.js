// Retorne o vooId do primeiro voo em que a empresa seja DELTA AIRLINES ou AMERICAN AIRLINES,
// a sigla do aeroporto de origem seja SBGR e a sigla do aeroporto de destino seja KJFK.
// o método findOne() retorna o primeiro valor encontrado;
// poderia também utilizar o operador $or no lugar de $in;

db.voos.findOne({
      $and: [
        { "empresa.nome": { 
                $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] 
            }},
        { "aeroportoOrigem.sigla": "SBGR" },
        { "aeroportoDestino.sigla": "KJFK" },
      ],
    }, {
        vooId: 1,
        _id: 0
    },
  );
