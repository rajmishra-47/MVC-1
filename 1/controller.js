const message=require('./messages')

// module.exports={
//     get:(req,res)=>{
//         const a=message()

//         if(a===null){
//         res.send("Empty")
//         }

//         // console.log(typeof(a));
//         res.send(a)
//     },
// }

module.exports = {
    get: async (req, res) => {
        try {
            const a = await message(); 
            if (a == null) {
                res.send("Empty");
            } else {
                res.send(a);
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching data");
        }
    },
};