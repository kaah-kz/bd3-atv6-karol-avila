// DEFINE O NOME DO BANCO DE DADOS
const database = 'BD3-NoSQL-AtlasMongoDB';

// DEFINE O NOME DA COLLECTION
const collection = 'bd3-nosql-atv6';

// ACESSA O BANCO DE DADOS BD3-NoSQL-AtlasMongoDB
use(database);

// INSERE UM DOCUMENTO DE DADOS DO ALUNO NA COLLECTION
db['bd3-nosql-atv6'].insertOne([
    {
        "cod_aluno": 1,
        "cod_turma": 1,
        "nome": "Julia Fuentes",
        "cpf": "12345678900",
        "rg": "502564386",
        "telefone_aluno": "11912345678",
        "telefone_responsavel": "11912345678",
        "email": "juliaFuentes@gmail.com",
        "data_nascimento": "30-07-1997"
    }
]);