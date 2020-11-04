const totalVoos = db.voos.count({"empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica"})

db.resumoVoos.insert({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: totalVoos,
});

db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" }, { _id: 0 });
