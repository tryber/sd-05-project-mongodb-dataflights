import { insertDB } from './desafio27';

insertDB("PASSAREDO", "Doméstica");
db.resumoVoos.find({empresa: "PASSAREDO"}, {empresa: 1, totalVoosDomesticos: 1, _id: 0});
