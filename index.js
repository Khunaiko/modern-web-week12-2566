const express = require('express');
const logger = require('morgan')
require('dotenv').config()
const app = express();

//HTTP request logger middleware
app.use(logger("dev"));
app.use(express.json())

//http://localhost:3000
  app.get('/',(req,res)=> {
    res.status(200).json({ message: 'GET request to the homepage'});
  })
  app.post('/user',(req,res) => {
    const data = req.body
    res.status(201).json({ message: data});
  })
  app.put('/user',(req,res) => {
    res.status(200).json({ message: 'PUT request to the homepage'});
  })
  app.delete('/user',(req,res) => {
  res.status(200).json({ message: 'DELETE request to the homepage'});
  })

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});