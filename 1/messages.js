const client=require('./connectPG')



const message=()=>{
    let a=""
        client.connect()

        const query=  client.query(`select * from mBD3`,(err,data)=>{
        
            if(err){
                throw err
            }

            a=data.rows
            console.log(a);
        })
        
        return a
}

module.exports=message