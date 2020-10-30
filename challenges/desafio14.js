// Conta os voos de OrigemPaís seja diferente ($ne) de Brasil
db.voos.count({ "aeroportoOrigem.pais": { $ne: "BRASIL" } });
