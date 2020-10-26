// Retorne o vooId, mes e ano do primeiro voo com mais de 7000 passageiros pagos.

db.voos.findOne(
  { "passageiros.pagos": { $gt: 7000 } },
  { vooId: 1, mes: 1, ano: 1, _id: 0 }
);
// Também era possivel manter o find com um limit(1) no final, equivalente do findOne
