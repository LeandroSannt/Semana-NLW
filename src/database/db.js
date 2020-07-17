//importar a dependencia do sqlite

const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operaçºoes no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o banco de dados para operaçoes

db.serialize(() =>{
    //criar tabelas com comandos sql

   /* db.run(`
         CREATE TABLE IF NOT EXISTS places (
             id  INTEGER PRIMARY KEY AUTOINCREMENT,

             image TEXT,
             name TEXT,
             address TEXT,
             address2 TEXT,
             state TEXT,
             city TEXT,
             items TEXT

              
         );
    `)

    //inserir dados
     
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES ( ?,?,?,?,?,?,? );
    
    `
    const values =[
            "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    
            "Paperside",
    
            "Guilhereme Gembala, Jardmin America ",
    
            "Numero 260",
    
            "Santa Catarina",
    
            "Rio do Sul,",
    
            "Residuos Eletronicos, Lâmpadas"
    ]

            function afterInsertData(err){
                if(err){
                    return console.log(err)
                }
                console.log("cadastrado com sucesso")
                console.log (this)

            }

 //  db.run(query, values,  afterInsertData)

    //consultar dados

  /*  db.all(`SELECT  name FROM places`, function(err,rows){
        if(err){
            return  console.log(err)
        }
        console.log("aqui estão seus registros")
        console.log(rows)
    })*/

    //deletar dados
    db.run (`DELETE FROM places WHERE id =?`, [19],function(err){
        if(err){
            console.log("err")
        }
        console.log("registro apagado com sucesso")
    })

})
