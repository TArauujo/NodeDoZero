import { sql } from './db.js'

sql `
    CREATE TABLE videos (
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(()=>{
    console.log("Tabela Criada!")
}).catch((error) => {
    console.log("Erro ao criar a tabela: ",error)
})
