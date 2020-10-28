db.voos.count({ $or: [{ "ano": { $eq: 2017 } }, { "ano": { $eq: 2018 } }] });
