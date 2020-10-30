// Conta voos maiores ($gt) que ano 2016
db.voos.count({ ano: { $gt: 2016 } });
