const express = require('express');
const app = express();
const port = 300;
app.use(express.json());

app.get('/',(req,req) =>{

res.sendFile(__dirname +'/html.html')
})

app.listen(port,()=>(console.log(`http://localhost:${port}`)));