const express =require('express')
const app =express()
const cors =require('cors')
require("dotenv").config();
const port=process.env.PORT || 5000

// console.log(port)
app.get('/',(req,res)=>{
    res.send('hello i am from node js')

})
app.listen(port,()=>{
    console.log('the server is running')
})