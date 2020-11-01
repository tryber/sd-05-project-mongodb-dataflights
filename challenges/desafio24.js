// Retorne o vooId, empresa.nome e litrosCombustivel do primeiro voo em que  
// litrosCombustivel não seja maior do que 600, a empresa não seja GOL ou AZUL,
// e o campo litrosCombustivel exista.
// o método findOne() retorna o primeiro valor encontrado;
// operador de comparação $lte - lower than or equal (menor ou igual que);
// poderia também utilizar o operador lógico $nor no lugar do $nin;
// operador $exists é booleano, quando "true" ele retorna os valores que contêm o campo desejado;

db.voos.findOne({
    $and: [
        { litrosCombustivel: { $lte: 600 }},
        { "empresa.nome": { $nin: ["GOL", "AZUL"]}},
        { litrosCombustivel: { $exists: true }}
    ]}, {
    vooId: 1,
    "empresa.nome": 1,
    litrosCombustivel: 1,
    _id: 0,
});