db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  }),
});

db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0 });
// Transparência: Verifiquei no código do Yoshida da turma 4 e descobri que dá para jogar uma query dentro de um atributo.
// Aprendi, também, que é possível jogar uma query dentro de uma variavel. (Aprendi pelo PR do Procópio de turma 4)
