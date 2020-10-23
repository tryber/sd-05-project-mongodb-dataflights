// Retorne o vooId do primeiro voo em que o campo litrosCombustivel seja maior ou igual a 1000.

db.voos.findOne({ litrosCombustivel: { $gte: 1000 } });
