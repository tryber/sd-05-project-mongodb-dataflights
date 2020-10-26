db.voos.findOne({$and: [{"litrosCombustivel": {$gte: 1000}},{"litrosCombustivel": {$exists: true}}]}, {"vooId": 1, "_id": 0});

