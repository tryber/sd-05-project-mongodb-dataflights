// Retorne o vooId e litrosCombustivel do primeiro voo em que o campo litrosCombustivel não seja maior do que 1000 e o campo litrosCombustivel exista.
// Se encontrar retornará o primeiro valor em que o litrosCombustivel menor que 1000
db.voos.findOne({litrosCombustivel: {$lte: 1000}},
  { vooId: 1, litrosCombustivel:1, _id: 0 },);
