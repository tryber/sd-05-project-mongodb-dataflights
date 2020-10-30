// Conta voos menores ($lt) que ano 2017
db.voos.count({ ano: { $lt: 2017 } });
