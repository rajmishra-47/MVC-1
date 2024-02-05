const PG=require('pg').Pool
const env=require('dotenv')

const client=new PG({    
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    host:process.env.HOST,
    port:5432
})



module.exports=client