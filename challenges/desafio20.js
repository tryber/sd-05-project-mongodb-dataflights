// Retorne o vooId do primeiro voo em que o campo rtk não exista.

db.voos.findOne({ rtk: { $exists: false } }, { vooId: true, _id: false });
