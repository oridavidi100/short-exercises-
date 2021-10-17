import {check} from "./function"
//events
document.querySelectorAll("input").forEach(element => {
    element.addEventListener("click",check)
});
