// Retorne o vooId do primeiro voo em que o campo litrosCombustivel exista.
// Uso do operador de valor booleano exists valor de comparação true ou false/ 1 ou 0
db.voos.findOne({"litrosCombustivel":{ $exists: true}}, { vooId: 1, _id: 0 });
