// Retorne o vooId do primeiro voo em 
// que o campo rtk não exista.
const query = {
  "rtk": { $exists: false }
};
const projection = { "_id": 0, "vooId": 1 };

db.voos.find(query, projection).limit(1);
