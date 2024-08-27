import express from "express";
const app = express();
const port = process.env.PORT || '2000';
const url = process.env.database_url||'mongodb://localhost:27017';
import getUser from './routes/routes.js';
import dbConnection from './dbConnetion/Connect.js';
dbConnection(url);
app.use(express.json());

app.use('/',getUser);
app.listen(port,()=>{
    console.log(`Server is start port number ${port}`);
})