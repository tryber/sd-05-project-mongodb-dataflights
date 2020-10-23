variavel = db.voos.count({
  "empresa.nome": "LATAM AIRLINES BRASIL",
  natureza: "Doméstica",
});

db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: variavel,
});

db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" }, { _id: 0 });
// Fiz com váriavel apenas para conhecer uma outra forma de fazer esse desafio.
