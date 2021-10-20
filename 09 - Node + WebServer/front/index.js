let input={
    "name":"",
    "age":"",
    "abilty":[],
}


function check()
{
    document.querySelectorAll('.form-check-input').forEach(button => {
    if (button.checked){
        input.abilty.push(button.value)
    }
} 
    )
}



document.getElementById("submit").addEventListener("click",()=>{
    check()
    input.name=(document.getElementById("name").value)
    input.age=(document.getElementById("age").value)
    console.log(input)
    post(input.name,input.age,input.abilty)
})



async function post(name, age, abilitys) {
    try {
        console.log(name, age, abilitys)
        const response = await axios.post(`http://localhost:3030/`, {
            body: {
                "name": name,
                "age": age,
                "ability": abilitys },
            headers: {
                "Content-Type" : "application/json",
                "Access-Control-Allow-Origin":"*" }
            });
        alert(response.data)

    } catch (error) {
        alert ("Please try again");
    }
}