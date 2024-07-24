// function onHandleChange(e){
//     console.log(e.value);
//     document.getElementById('txt').value=""
// }

// call back fuction------------------------------

// document.getElementById("btn").addEventListener('mousedown',()=>{
//     let data=document.getElementById("txt").value
//     console.log(data);
//     document.getElementById("txt").value="" 
// })

//syncronous data type---------------------------------
// console.log("start");
// for(i=1;i<=10;i++){
//     console.log(i);
// }
// console.log("end");


// aassynchronous data type--------------------------
// it have two type of fuctions

// 1.setTimeout


// console.log("start");
// setTimeout(()=>{
//     for(i=1;i<=10;i++)
//     {
//         console.log(i);
//     }
// },2000)
// console.log("end");

// -----
// 2.setInterval

// setInterval(() => {
//     document.write("*")
    
// }, 3000);

// i=1
// x=setInterval(() => {
//     document.write(i)
//     if(i==10)
//     {
//           clearInterval(x)
//     }
//     i++    
// }, 1000);
//--------------to print numbers from 0 to 10--------------------------

// i=10
// x=setInterval(() => {
//     document.getElementById("time").textContent=i
    
    
//     if(i==0)
//         {
//             clearInterval(x)
//             console.log("start");
//         }
//     i--
// }, 1000);-----------------------------------------------------

