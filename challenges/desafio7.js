// Retorne a quantidade de voos em que o ano seja menor do que 2017.
// Especificando valor do ano emm novo documento, menor que 2017
db.voos.count({ ano: { $lt: 2017 } });
