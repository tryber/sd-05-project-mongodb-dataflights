db.resumoVoos.insertOne({
    'totalVoosDomesticos':
    db.voos.count({
        $and: [
            {'natureza': 'Doméstica'},
            {'empresa.nome': 'LATAM AIRLINES BRASIL'},
        ]}),
    'empresa':'LATAM AIRLINES BRASIL'
    }
);
db.resumoVoos.find({'empresa':'LATAM AIRLINES BRASIL'}, {'_id':0});