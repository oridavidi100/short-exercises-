// let triel= new Promise((resolve,reject)=>{
//     resolve();
//     })
//     triel.then(()=>{
//         console.log("ori")
//     })
    

    //question 1-2
     let prpr=new Promise((resolve,reject)=>{
        let result=3;    
         if (result===3){
             resolve()
             
         }
         else{ 
             reject()
             
            }
     })
     prpr
     .then(()=>console.log("yes"))
     .catch(()=>console.log("boo"))

     //question 3
     function makePromiseWithConstructor(itShouldResolve){
             return new Promise((resolve,reject)=>{
             if (itShouldResolve){
                 resolve()
             }
             else{
                 reject
             }
      }) }
     
    makePromiseWithConstructor("")
    .then(()=>console.log("oo"))
    .catch(()=>console.log("not"))
     