db.voos.find({
    $and: [{
      $or: [
        { "empresa.nome": { $ne: "GOL" } },
        { "empresa.nome": { $ne: "AZUL" } }
      ]
    },
    { "litrosCombustivel": { $lte: 600 } },
    { "litrosCombustivel": { $exists: true } }
    ]
  },
    { "vooId": 1, "empresa.nome": 1, "litrosCombustivel": 1, "_id": 0 }).limit(1);
