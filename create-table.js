import { sql } from './db.js'

// sql `DROP TABLE IF EXISTS videos;`.then(()=> {
//     console.log("Tabela Apagada!!");
// }).catch(() => {
//     console.log("Erro ao excluir a tabela");
// })

sql `
    CREATE TABLE videos (
        id TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(()=>{
    console.log("Tabela Criada!")
}).catch((error) => {
    console.log("Erro ao criar a tabela: ",error)
})
