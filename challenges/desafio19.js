// Retorne o vooId do primeiro voo em que o campo litrosCombustivel exista.
// o método findOne() retorna o primeiro valor encontrado;
// operador $exists é booleano, quando "true" ele retorna os valores que contêm o campo desejado;

db.voos.findOne({
  "litrosCombustivel": {
    $exists: true
  }
}, {
  vooId: 1,
  _id: 0
});
