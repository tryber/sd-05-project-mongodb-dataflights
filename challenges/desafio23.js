db.voos.findOne({$and: [{"litrosCombustivel": {$lte: 1000}}, {"litrosCombustivel": {$exists: true}}]}, {"litrosCombustivel": 1, "vooId": 1, "_id": 0});
