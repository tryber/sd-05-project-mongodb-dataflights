db.voos
  .find({
    $and: [{ natureza: "Internacional" }],
  })
  .count();
