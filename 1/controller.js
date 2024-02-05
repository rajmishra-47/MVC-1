const message=require('./messages')

module.exports={
    get:(req,res)=>{
        const a=message()

        if(a===null){
        res.send("Empty")
        }

        // console.log(typeof(a));
        res.send(a)
    },
}