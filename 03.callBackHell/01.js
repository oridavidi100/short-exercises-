// //first 
// function RightAngle(num1, num2, num3) {
//     return sqr(num1) + sqr(num2) === sqr(num3);
//   }
//   //second 
//   function sqr(num) {
//     return multipli(num,num);
//   }
//   //third 
//   function multipli(num1, num2) {
//     return num1 * num2;
//    }



// console.log(RightAngle(3,4,5))
// console.log("first call")
// setTimeout(() => {console.log("second call")
// }, 2000);
// console.log("third call")

function randomNum(){
    return  Math.floor(Math.random()*10)
}
// function Reject(){
//     console.log("your request was rejected ☹")
// }
// function Callback(color){
//     let body= document.getElementById("body")
//     body.style.backgroundColor = color
// }

let i=0;
function backGround(time, color, callback, reject){
   let rand=(randomNum())
   setTimeout(() => {
    if  (rand>5){
            let body= document.getElementById("body")
            body.style.backgroundColor = `${color}`
            console.log(rand)
            callback()
        }
        else{          
            console.log(rand)
            reject()
        }
    }, time);
    i++
}
backGround (1000, "red", ()=>{
    backGround (1000, "yellow", ()=>{
        backGround (1000, "blue",()=>{
            backGround (1000, "grey", ()=>{
                backGround (1000, "black", ()=>{
                    backGround (1000, "orange", ()=>{
                        backGround (1000, "purple", ()=>{
                        },()=>{console.log("your  request was rejected ☹️ on"+i)})
                    },()=>{console.log("your  request was rejected ☹️ on"+i)})
                }, ()=>{console.log("your  request was rejected ☹️ on"+i)})
            }, ()=>{console.log("your  request was rejected ☹️ on"+i)})
        },()=>{console.log("your  request was rejected ☹️ on"+i)})
    }, ()=>{console.log("your  request was rejected ☹️ on"+i)})
}, ()=>{console.log("your  request was rejected ☹️ on"+i)})




let triel= new Promise((resolve,reject)=>{
resolve();
})
triel.then(()=>{
    console.log("ori")
})
