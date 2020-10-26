// Conte os documentos em que o campo aeroportoDestino.pais seja igual a BRASIL, ARGENTINA ou CHILE.
// Operador $in para retornar valores de igualdade com mais de um valor de comparação
db.voos.count({ "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] }});
