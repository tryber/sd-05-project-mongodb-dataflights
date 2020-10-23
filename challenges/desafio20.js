db.voos.find({rtk: {$exists: false}}, {_id: 0, vooId: 1});
