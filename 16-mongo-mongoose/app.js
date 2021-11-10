const express = require('express');
const mongoose = require('mongoose');
const app = new express();
const cors = require('cors');
const path = require("path");
const fs=require('fs')
require('dotenv').config();
const Accountant = require('./modles/accountant');
const baseUrl="http://localhost:3000"


mongoose.connect(`mongodb+srv://${process.env.mongo_username}:${process.env.mongo_password}@firstmongo.w0kdo.mongodb.net/agentsOri?retryWrites=true&w=majority`
, {
    useNewUrlparser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log('mongoDB connected')
}
)



app.use(cors());
app.use(express.json());




const agentRouter=require('./routers/router')
app.use("/",agentRouter)

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));