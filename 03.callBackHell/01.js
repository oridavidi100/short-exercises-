//first 
function RightAngle(num1, num2, num3) {
    return sqr(num1) + sqr(num2) === sqr(num3);
  }
  //second 
  function sqr(num) {
    return multipli(num,num);
  }
  //third 
  function multipli(num1, num2) {
    return num1 * num2;
   }

// console.log(RightAngle(3,4,5))
// console.log("first call")
// setTimeout(() => {console.log("second call")
// }, 2000);
// console.log("third call")

