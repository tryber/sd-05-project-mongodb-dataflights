// Contar voos com destinosPaís diferente (%ne) EstadoUnidos
db.voos.count({ "aeroportoDestino.pais": { $ne: "ESTADOS UNIDOS" } });
