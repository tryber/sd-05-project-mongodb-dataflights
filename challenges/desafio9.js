// Retorne a quantidade de voos dos anos de 2017 e 2018.

db.voos.count({ $or: [{ ano: 2017 }, { ano: 2018 }] });
