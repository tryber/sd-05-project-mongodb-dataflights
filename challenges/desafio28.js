db.resumoVoos.insertOne({ "empresa": "LATAM AIRLINES BRASIL", totalVoosDomesticos: db.voos.find({"empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica"}).count() });
db.resumoVoos.find({}, {_id: 0}).pretty();
