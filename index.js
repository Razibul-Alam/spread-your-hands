const express =require('express')
const app =express()
const cors =require('cors')
const port=process.env.Port || 5000


app.get('/',(req,res)=>{
    res.send('hello i am from node js')

})
app.listen(port,()=>{
    console.log('the server is running')
})