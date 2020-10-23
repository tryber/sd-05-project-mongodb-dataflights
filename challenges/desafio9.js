db.voos.find({$or: [{ano: {$eq: 2017, $eq: 2018}}]}).count();
