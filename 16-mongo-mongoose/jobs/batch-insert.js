const csv = require('csvtojson');
const path = require('path');
const mongoose = require('mongoose');
const Accountant = require('../modles/accountant');

mongoose.connect(`mongodb+srv://PhonebookoriDb:WsG9IKGGfG2WbtLn@firstmongo.w0kdo.mongodb.net/agentsOri?retryWrites=true&w=majority`
, {
    useNewUrlParser: true
})

const csvFilePath = path.resolve('./assets/list.csv');
console.log(csvFilePath)
csv()
  .fromFile(csvFilePath)
  .then((accountants)=>{    
    
    const accountantCollection = accountants.map((accountant) => {

      const licenseId = Object.values(accountant)[0].trim();
      const fullName = Object.values(accountant)[1].trim();
      const city = Object.values(accountant)[2].trim();
    

      return {
        license_id: licenseId,
        full_name: fullName,
        city: city
      }

    })
      .filter(accountant => {
        return   accountant.license_id
          && accountant.full_name
          && accountant.city
      })

    Accountant.insertMany(accountantCollection)
      .then(function(){
        console.log("Data inserted")  // Success
      }).catch(function(error){
        console.log(error)      // Failure
    });
  })