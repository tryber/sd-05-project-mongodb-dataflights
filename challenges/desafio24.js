// Retorne o vooId, empresa.nome e litrosCombustivel
// do primeiro voo em que litrosCombustivel
// não seja maior do que 600 e a empresa 
// não seja GOL ou AZUL, e o campo litrosCombustivel exista.
db.voos.find(
  { $and: [
    { "litrosCombustivel": { $lt: 600, $exists: true} }
  ],
    $or: [
      { "empresa.nome": { $nin: ["GOL"] } },
      { "empresa.nome": { $nin: ["AZUL"] } }  
    ]
  },
  { "_id": 0, "vooId": 1, "empresa.nome": 1, "litrosCombustivel": 1 }
).limit(1);
