// Retorne a quantidade de voos dos anos de 2017 e 2018.

db.voos.count( {ano: { $in: [2017, 2018] } } );
// também é possivel a sintaxe db.voos.find( {ano: { $in: [2017, 2018] } } ).count();
// também é possivel usando or
