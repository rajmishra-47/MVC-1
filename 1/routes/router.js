const express=require('express')

const router=express.Router()

const controller=require('../controller')


router.get('/show',controller.get)

// router.get('/apple',(req,res)=>{
//     res.send("Hello from apple")
// })

module.exports=router