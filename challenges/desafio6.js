// Ao procurar o vooId 756807, retonar siglaEmpresa, nomeEmpresa e passageiros
db.voos.find(
  { vooId: 756807 },
  { "empresa.sigla": 1, "empresa.nome": 1, passageiros: 1, _id: 0 }
);
