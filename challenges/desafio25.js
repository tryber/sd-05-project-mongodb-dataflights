db.voos.deleteMany({
  $and: [
    {"empresa.nome": 'AZUL'},
    {litrosCombustivel: {$exists: true}},
    {litrosCombustivel: {$lt: 400}},
  ]
});
