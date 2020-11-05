db.voos.deleteMany({
  $and: [
    { "empresa.nome": "GOL" },
    { "passageiros.pagos": { $gte: 5, $lte: 10 } },
  ],
});
// transparencia: utilizado gabarito do dia de filter operators para entender
// como pegar todos resultados entre 2 comparadores
