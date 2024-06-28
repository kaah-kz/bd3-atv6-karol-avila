const database = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'bd3-nosql-atv6';

use(database);

//LISTA TODOS OS AUNOS CADASTRADOS
db[collection].find();

// SELECIONA DADOS BASEADOS EM CRITÉRIOS DE BUSCA
use(database);

db["bd3-nosql-atv6"].find({"cpf":"73829156400"});
