db.voos.delete_many({"litrosCombustivel": {$lt:400 }, "empresa.nome":"AZUL"}).count();
