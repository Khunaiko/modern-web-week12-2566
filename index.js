const { config } = require('dotenv');
const express = require('express');
const logger = require('morgan')
require('.dotenv'),config()
const app = express();

//HTTP request logger middlware
app.use(logger("dev"));
app.use(express.json())

//http://localhost:3000

app.get('/user',(req, res) =>{
    res.status(200).json({message: "GET request to the homepage"});
})

app.post('/user',(req, res) =>{
    const data = req.body
    res.status(201).json({massage: data});
})

app.put('/user',(req, res) =>{
    res.status(200).json({massage: "PUT request to the homepage"});
})

app.delete('/user',(req, res) =>{
    res.status(200).json({massage: "DELETE request to the homepage"});
})

const port = process.env.PORT || 5000 ;
app.listen(port,() => {
    console.log(`Server runing at http://localhost:${port}`);
});