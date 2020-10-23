export function insertDB(empresa, natureza) {
  return db.resumoVoos.insert({"empresa": empresa, "totalVoosDomesticos": db.voos.count({"empresa.nome": empresa, "natureza": natureza})});
};
insertDB("LATAM AIRLINES BRASIL", "Doméstica");
db.resumoVoos.find({empresa: "LATAM AIRLINES BRASIL"}, {empresa: 1, totalVoosDomesticos: 1, _id: 0});
