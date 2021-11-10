const express = require ('express')
const  router  = express.Router();
const {getAccountantsByCity} = require('../conroller/controller')
const {getAllCities}= require('../conroller/controller')
const {updateAgentsCity}=require('../conroller/controller')

router.get('/agents/',  getAccountantsByCity)


router.get('/cities',getAllCities)

router.put("/agent/:id/edit",updateAgentsCity)

module.exports=router