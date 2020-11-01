// Retorne o vooId e litrosCombustivel do primeiro voo em que o campo litrosCombustivel
// não seja maior do que 1000 e o campo litrosCombustivel exista.
// o método findOne() retorna o primeiro valor encontrado;
// operador de comparação $lte - lower than or equal (menor ou igual que);
// operador $exists é booleano, quando "true" ele retorna os valores que contêm o campo desejado;

db.voos.findOne({ 
    $and: [
        {litrosCombustivel: { $lte: 1000 }},
        {litrosCombustivel: { $exists: true }}
    ]}, {
        vooId: 1, 
        litrosCombustivel:1, 
        _id: 0 
    });
