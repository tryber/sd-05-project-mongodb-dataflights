variavel = db.voos.count({$and: [{"empresa.nome": "LATAM AIRLINES BRASIL"}, {"natureza": "Doméstica"}]});

db.resumoVoos.insertOne({empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: variavel});

db.resumoVoos.findOne({"empresa": "LATAM AIRLINES BRASIL"},{"_id": 0, "empresa": 1, "totalVoosDomesticos": 1});

// TRANSPARENCIA: PARA REFATORAR ESSE CÓDIGO APRENDI COM O SIDNEY RAMOS A USAR UMA VARIÁVEL