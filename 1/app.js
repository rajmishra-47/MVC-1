const express=require('express')
const env=require('dotenv').config()

const app=express()

const useRoute=require('./routes/router')

app.use('',useRoute)

app.listen(process.env.PORT1 | 3000,()=> console.log(`listening @ ${process.env.PORT1 | 3000}`))