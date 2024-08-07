// number validate internal code---

import { phoneValidate } from "./external.js";
document.getElementById("phone").addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    document.getElementById("msg").innerHTML=phoneValidate(e.target.value);
    
})

//name validate internal code -----

// import { nameValidation } from "./external.js";

// document.getElementById('phone').addEventListener("keypress",(n)=>{

//     document.getElementById("msg").innerHTML=nameValidation(n.target.value)
// })


