db.voos.find({
  $and: [
    {"empresa.nome": 'PASSAREDO'},
    {natureza: 'Doméstica'},
  ]
}).count();
