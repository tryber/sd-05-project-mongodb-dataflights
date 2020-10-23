const empresa = "LATAM AIRLINES BRASIL";

const natureza = "Doméstica";

db.resumoVoos.insertOne({ empresa, totalVoosDomesticos: db.voos .find({ $and: [{ "empresa.nome": empresa }, { natureza: natureza }] }) .count()});

db.resumoVoos.findOne({ empresa }, { _id: 0, });
