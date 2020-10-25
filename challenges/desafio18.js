// Retorne o vooId, mes e ano do primeiro voo com mais de 7000 passageiros pagos.

db.voos.findOne(
  { "passageiros.pagos": { $gt: 7000 } },
  { vooId: true, mes: true, ano: true, _id: false }
);
