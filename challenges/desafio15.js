// Conta os voos que decolagens seja maior(%gt) que 20
db.voos.count({ decolagens: { $gt: 20 } });
