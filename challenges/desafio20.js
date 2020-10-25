// Retorne o vooId do primeiro voo em que o campo rtk não exista.
// o método findOne() retorna o primeiro valor encontrado;
// operador $exists é booleano, quando "false" ele retorna os valores que *não* contêm o campo desejado;

db.voos.findOne({
  rtk: {
    $exists: false
  }
},
  {
    vooId: 1,
    _id: 0,
  });
  