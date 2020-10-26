// Desafio 19
// Retorne o vooId do primeiro voo em que o campo litrosCombustivel exista.

db.voos.find({"litrosCombustivel": {$exists: true}}).limit(1);
