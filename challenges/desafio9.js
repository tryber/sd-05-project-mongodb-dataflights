// Desafio 9
// Retorne a quantidade de voos dos anos de 2017 e 2018.

db.voos.count({$or: [{"ano": {$eq: 2017}}, {"ano": {$eq: 2018}}]});
