// Conta voos maiores($gt) que 2017 e menores ($lt) que 2018
db.voos.count({ ano: { $gte: 2017, $lte: 2018 } });
