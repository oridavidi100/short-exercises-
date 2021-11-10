
const mongoose= require('mongoose')
const express = require("express");
const router = express.Router();
const Accountant = require('../modles/accountant');

async function getAllCities (req,res){
    Accountant.find({}).distinct('city')
    .then((cities) => {
      res.json(cities);
    }).catch(error=>{
        res.send(error)
    })
    
}



async function getAccountantsByCity(req,res){
    Accountant.find({city: req.query.city})
    .then((accountants) => {
      res.json(accountants);
    }).catch(error=>{
        res.send(error)
    })
}

async function updateAgentsCity (req,res){
    const id = req.params.id
    const newCity = req.body.newCity
    // { license_id:id}{city:newCity}//{key from schema : var}  ({who to change},{what to change})
    Accountant.updateOne(({license_id:id},{city:newCity})).then(()=>{
       res.send("update succesed")
    })

}

module.exports={getAccountantsByCity,getAllCities,updateAgentsCity}