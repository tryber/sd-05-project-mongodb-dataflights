// Procura voos da empresa nome AZUL, limitado até 10 buscas
db.voos.find({ "empresa.nome": "AZUL" }).limit(10);
