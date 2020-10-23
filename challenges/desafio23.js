// Retorne o vooId e litrosCombustivel do primeiro voo em que o campo litrosCombustivel não seja maior do que 1000 e o campo litrosCombustivel exista.
// Referência: https://docs.mongodb.com/manual/reference/operator/query/and/

db.voos.find({ $and: [ { litrosCombustivel: { $exists: 1 } }, { litrosCombustivel: { $lte: 1000 } } ]}, { _id: 0, vooId: 1, litrosCombustivel: 1 }).limit(1);
