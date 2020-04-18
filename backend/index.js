const express = require('express');
const app = express();
const port = 8080;

const cors = require('cors');

app.use(cors());
app.use(express.json());



const run = async () =>{
   app.listen(port)
};

run().catch(e=> {
    console.error(e)
});