db.voos.find({litrosCombustivel: {$exists: true}}, {_id: 0, vooId: 1});
