// Retorne o total de voos com mais de 20 decolagens.
// operador de comparação $gt - greater than (maior que)

db.voos.count({
  decolagens: {
    $gt: 20
  }
});
