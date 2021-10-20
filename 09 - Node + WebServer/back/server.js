const http = require("http");
const db = require('./db');

const server = http
.createServer((req, res) => {
  let body = "";
  // header
  res.writeHead(200, "ok", {
    "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Origin":"*"
  });
  // get main route
  if (req.method === "GET" && req.url === "/") {
    res.write("hey you are in get");
    res.end();
    return;
  }
  if (req.method === "POST" && req.url === "/") {
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      const student = JSON.parse(body).body;
      if (isvalidStudent(student)){
        res.write("you wellcome");
      }else
      res.write("you reject");
      res.end();
    });
    return;
  }
  res.end();
})

.listen(3030, () => {
  console.log("running on 3030");
});

function isvalidStudent(student){

  let yes = false;
  if (!db.validStudent.nameNotEqual.includes(student.name)){
    if ((db.validStudent.maxAge>student.age)&&(student.age>db.validStudent.minAge)){
      let counter = 0;
      student.ability.forEach(ability => {
        if (db.validStudent.ability.includes(ability)){
          counter++;
        }
        if (counter>0){
          yes = true;
        }
      });
    }
  }
  return yes;
}