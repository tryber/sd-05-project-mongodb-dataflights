// Conta os voos com destinoPaís que seja igual ($in): Brasil, Argentina e Chile
db.voos.count({
  "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] },
});
