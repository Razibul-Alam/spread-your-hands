const express =require('express')
const app =express()
const cors =require('cors')
require("dotenv").config();
const port=process.env.PORT || 5000
const {MongoClient}=require('mongodb')

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aicgl.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(uri)
// connect with mongodb
async function run() {
  try {
    await client.connect();
    
console.log('database connected')
    const database = client.db('spread-hands');
    const events = database.collection('events');
    

    // load data
    app.get('/events',async(req,res)=>{
        const loadData=await events.find({}).toArray()
        res.send(loadData)
    })

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// console.log(port)
app.get('/',(req,res)=>{
    res.send('hello i am from node js')

})
app.get('/test',(req,res)=>{
    res.send('hello i am from node js for testing')

})
app.listen(port,()=>{
    console.log('the server is running')
})