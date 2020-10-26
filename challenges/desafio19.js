db.voos.find(
  { "litrosCombustivel": { $exists: true } },
  { vooId: 1, mes: 1, ano: 1, _id: 0 }
).limit(1);
