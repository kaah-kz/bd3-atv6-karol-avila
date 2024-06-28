// DEFINE O NOME DO BANCO DE DADOS
const database = 'BD3-NoSQL-AtlasMongoDB';

// DEFINE O NOME DA COLLECTION
const collection = 'bd3-nosql-atv6';

// ACESSA O BANCO DE DADOS BD3-NoSQL-AtlasMongoDB
use(database);

// EXEMPLO DE INSERÇÃO DE DADOS COM insertMany (MUITOS)
db['bd3-nosql-atv6'].insertMany([
    {
        "cod_aluno": 2,
        "cod_turma": 1,
        "nome": "Ana Maria",
        "cpf": "98765432100",
        "rg": "105847389",
        "telefone_aluno": "11987654321",
        "telefone_responsavel": "11987654321",
        "email": "anamaria@gmail.com",
        "data_nascimento": "15-02-1998"
    },
    {
        "cod_aluno": 3,
        "cod_turma": 2,
        "nome": "Mariana Froes",
        "cpf": "19283746500",
        "rg": "306594812",
        "telefone_aluno": "11912348765",
        "telefone_responsavel": "11912348765",
        "email": "marianaFroes@gmail.com",
        "data_nascimento": "10-11-1996"
    },
    {
        "cod_aluno": 4,
        "cod_turma": 2,
        "nome": "Luiz Marques",
        "cpf": "56473829100",
        "rg": "408172635",
        "telefone_aluno": "11987651234",
        "telefone_responsavel": "11987651234",
        "email": "luizMarques@gmail.com",
        "data_nascimento": "25-09-1995"
    },
    {
        "cod_aluno": 5,
        "cod_turma": 3,
        "nome": "Gael Ávila",
        "cpf": "67584930200",
        "rg": "509283746",
        "telefone_aluno": "11912340987",
        "telefone_responsavel": "11912340987",
        "email": "gaelavila@gmail.com",
        "data_nascimento": "05-06-1999"
    },
    {
        "cod_aluno": 6,
        "cod_turma": 3,
        "nome": "Karol Ávila",
        "cpf": "73829156400",
        "rg": "610294857",
        "telefone_aluno": "11987659876",
        "telefone_responsavel": "11987659876",
        "email": "karolavila@gmail.com",
        "data_nascimento": "12-01-1997"
    },
    {
        "cod_aluno": 7,
        "cod_turma": 4,
        "nome": "Mel Fuentes",
        "cpf": "84930267500",
        "rg": "703185926",
        "telefone_aluno": "11912347654",
        "telefone_responsavel": "11912347654",
        "email": "melFuentes@gmail.com",
        "data_nascimento": "20-03-1996"
    },
    {
        "cod_aluno": 8,
        "cod_turma": 4,
        "nome": "Carlos André",
        "cpf": "29156473800",
        "rg": "804276183",
        "telefone_aluno": "11987653210",
        "telefone_responsavel": "11987653210",
        "email": "carlosAndré@gmail.com",
        "data_nascimento": "14-07-1998"
    },
    {
        "cod_aluno": 9,
        "cod_turma": 5,
        "nome": "Camila Cabello",
        "cpf": "30267584900",
        "rg": "905364728",
        "telefone_aluno": "11912349586",
        "telefone_responsavel": "11912349586",
        "email": "camilaCabello@gmail.com",
        "data_nascimento": "08-05-1997"
    },
    {
        "cod_aluno": 10,
        "cod_turma": 5,
        "nome": "Bruno Souza",
        "cpf": "56473829000",
        "rg": "106492835",
        "telefone_aluno": "11987652109",
        "telefone_responsavel": "11987652109",
        "email": "brunoSouza@gmail.com",
        "data_nascimento": "02-04-1996"
    }
]);
