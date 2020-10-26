// Retorne o vooId do primeiro voo em que o campo rtk não exista.
// Uso do operador exists com valor false
db.voos.findOne({rtk: { $exists: false}}, { vooId: 1, _id: 0 });
