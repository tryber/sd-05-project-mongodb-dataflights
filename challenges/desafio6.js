// Retorne apenas os campos empresa.sigla, 
// empresa.nome e passageiros do voo com o campo vooId igual a 756807
const query = {"vooId": { $eq: 756807}};
const projection = {"_id": 0, "empresa.sigla": 1, "empresa.nome": 1, "passageiros": 1};
db.voos.find(query, projection);
