db.resumoVoos.insert({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  })
});

db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0 });

//Conferi o PR do Paulo Ricardo Zembeli da turma 5 para aprendizado
//Repositorio: https://github.com/tryber/sd-05-project-mongodb-dataflights/blob/zambelli-mongodb-dataflights/challenges/desafio27.js
