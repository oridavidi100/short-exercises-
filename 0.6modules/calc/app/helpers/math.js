//math.js
function add(n1, n2){
    return (parseInt(n1)+parseInt(n2))
}
function sub(n1, n2){
    return n1-n2
}
function multiply(n1, n2){
    return n1*n2
}
function divide(n1, n2){
    return n1/n2
}
function sqrt(n1){
    return Math.sqrt(n1)
}

function  equals(n1, n2, callback){
   return callback(n1,n2)
}


export{add,multiply,sqrt,sub,divide,equals}