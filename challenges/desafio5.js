// Procura vooId partindo de id 0, retornando o a partir de 10 (skip) ao 12 (limit)voos, skip
db.voos.find({}, { "_id": 0, "vooId": 1 }).skip(9).limit(3);
