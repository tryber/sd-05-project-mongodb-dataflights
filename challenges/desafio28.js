db.voos.count({
  $and: [
    { natureza: "Doméstica" },
    { "empresa.nome": "LATAM AIRLINES BRASIL" },
  ],
});
