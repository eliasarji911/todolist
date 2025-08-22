const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const todo = ["test1","test2"];



app.get('/',(req,res) =>{

res.sendFile(__dirname +'/html.html')
});

app.get('/s',(req,res)=>{
   res.json(todo)
});



app.listen(port,()=>(console.log(`http://localhost:${port}`)));