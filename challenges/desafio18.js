// Retorne o vooId, mes e ano do primeiro voo com mais de 7000 passageiros pagos.
// Uso do método findOne - retorna o primeiro valor encontrado
db.voos.findOne({"passageiros.pagos":{$gte: 7000}}, { vooId: 1, mes: 1, ano: 1, _id:0 });
