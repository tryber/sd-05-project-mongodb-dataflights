// Retorne o vooId do primeiro voo em que o campo litrosCombustivel seja maior ou igual a 1000.
// o método findOne() retorna o primeiro valor encontrado;
// operador de comparação $gte - greater than or equal (maior ou igual que);

db.voos.findOne({
    litrosCombustivel: {
      $gte: 1000
    }
  }, {
    vooId: 1,
    _id: 0
  });
