// Retorne apenas os campos empresa.sigla, empresa.nome e passageiros do voo com o campo vooId igual a 756807.

db.voos.find(
  { vooId: 756807 },
  { "empresa.sigla": 1, "empresa.nome": 1, passageiros: 1, _id: 0 }
);
// Filtro no parâmetro query e campos retornados via true 1 no parâmetro projection.
// Tirando o retorno padrão do id para ter apenas os 3 elementos pedidos.
