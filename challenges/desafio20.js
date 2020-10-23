// Retorne o vooId do primeiro voo em que o campo rtk não exista.

db.voos.findOne({ rtk: { $exists: false } }, { vooId: 1, _id: 0 });
// Funciona também escrever 0 no lugar de false.
