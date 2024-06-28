// DEFINE O NOME DO BANCO DE DADOS
const database = 'BD3-NoSQL-AtlasMongoDB';

// DEFINE O NOME DA COLLECTION
const collection = 'bd3-nosql-atv6';

// ACESSA O BANCO DE DADOS BD3-NoSQL-AtlasMongoDB
use(database);

// CRIA A COLLECTION bd3-nosql-atv6
db.createCollection(collection);