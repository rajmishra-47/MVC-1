// const client=require('./connectPG')



// const message= async ()=>{
//     let a=""
//         client.connect()

//         const query= await client.query(`select * from mBD3`,(err,data)=>{
        
//             if(err){
//                 throw err
//             }

//             a=data.rows
//             console.log(a);
//         })
        
//         return a
// }

const client = require('./connectPG');
const message = () => {
    return new Promise((resolve, reject) => {
        client.connect();
        client.query(`SELECT * FROM mBD3`, (err, data) => {
            if (err) {
                reject(err); 
            } else {
                resolve(JSON.stringify(data.rows)); 
            }
        });
    });
};

module.exports=message