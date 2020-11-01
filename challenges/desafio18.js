// Retorne o vooId, mes e ano do primeiro voo com mais de 7000 passageiros pagos.
// o método findOne() retorna o primeiro valor encontrado;
// operador de comparação $gt - greater than (maior que);

db.voos.findOne({
  "passageiros.pagos": {
    $gt: 7000
  }
}, {
  vooId: 1,
  mes: 1,
  ano: 1,
  _id: 0
});
