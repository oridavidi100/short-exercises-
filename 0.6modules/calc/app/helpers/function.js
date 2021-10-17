import {add,multiply,sub,divide,equals,sqrt,module}from "./math"
let result=""
let stt={
    n1:"",
    action:"",
    n2:"",
}

//function checks if it number or sign
function check (event){
    if(!isNaN(event.target.value)||event.target.value==="."){
        isNum(event)
    }    
    else if (event.target.value==="Del"){
        clear()
    }
    else if(event.target.value==="="){
        callculate()
    }  
    else if(event.target.value==="√"){ 
            sqrtA() 
    }
    else {isAsign(event)}
    
}    
//clears the stt
function clear(){
    result=""
     stt={
        n1:"",
        action:"",
        n2:"",
    }
    document.querySelector(".result").value=""
}
//deals with number
function isNum(event){
    document.querySelector(".result").value=""
    result+=(event.target.value)
    document.querySelector(".result").value= result
}

//deals with sign
function isAsign(event){
    result=""
    stt.n1 =document.querySelector(".result").value
    stt.action=event.target.value
    document.querySelector(".result").value= ""
}

//find the right calc function
function findCallc(){
    if (stt.action==="+") return add
    if (stt.action==="-") return sub
    if (stt.action==="X") return multiply
    if (stt.action==="/") return divide
    if (stt.action==="%") return module
}

//callculate
function callculate(){
    stt.n2=document.querySelector(".result").value
    let wichcallc=findCallc()
    let results= equals(stt.n1,stt.n2,wichcallc)
    document.querySelector(".result").value=results
    stt={
        n1:"",
        action:"",
        n2:"",
    }
    result=results
}
//sqrt function
function sqrtA(){
let n1=document.querySelector(".result").value
document.querySelector(".result").value=sqrt(n1)


}
export {check}


