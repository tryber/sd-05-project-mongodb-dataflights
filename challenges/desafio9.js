// Retorne a quantidade de voos dos anos de 2017 e 2018.
// Identificar voos dos anos 2017 ou 2018 - também funcionaria com o and e in (intervalo dos anos de interesse)
db.voos.count({ $or: [{ ano: 2017 }, { ano:2018 }]});
