// function sendMessage(callback){
//     console.log("sendmessage");
//     callback("msg")
// }

// function getMessage(msg){
//     console.log("getmessage");
//     console.log(msg);
// }
// sendMessage(getMessage);
//---------A FUNCTION CALLING AN ANOTHER FUNCTION AS ITS ARGUMENT IS CALLED CALLBACK FUNCTION
//---------RECURSIVE FUNCTION IT IS A TYPE OF FUNCTION WHICH CALL BY ITS SELF IN IT

// OB=[
//     {name:"shifas",age:21,dep:"mern",salary:50000},
//     {name:"aman",age:21,dep:"soft",salary:50000},
//     {name:"amal",age:21,dep:"front",salary:50000},
//     {name:"hari",age:21,dep:"back",salary:50000}
// ]

// for(i in OB){
//     console.log(OB[i].name);
// }
// for(i=0;i<=OB;i++)
// {
//     console.log(OB[i].dep);
// }


//----------------------------------- CALL BACK HELL ----------------------------------------

//    function orderFood(callback){
//     setTimeout(()=>{
//      console.log("food is ordered");
//      callback()
//     },3000)
//    }
//    function decoratedVenue(callback){
//     setTimeout(()=>{
//         console.log("decoration is completed");
//         callback()
//     },3000)
//    }
//    function arrangeDj(callback){
//     setTimeout(()=>{
//         console.log("dj is arrainged");
//         callback()
        
//     },3000)
//    }

//    orderFood(()=>{
//     decoratedVenue(()=>{
//         arrangeDj(()=>{
//             console.log("events are successfuly completed");
            
//         })
//     })
//    })



//--------PROMISE----------------

// function fetchData(){
//     return new Promise((resolver,reject)=>{
//         data={msg:"promise program"}
//         reject(data)
//     })
// }
// fetchData()
// .then((dt)=>{
//     console.log("resolve");
//     console.log(dt);
    
    
// })
// .catch((error)=>{
//     console.log("reject");
//     console.log(error);
    
    
// }
// )

//---------------another promise-------------
// function orderFood(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("foood orderd");
//             resolve();
//         },3000)
        
//     })
// }
// function decoratedVenue(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("venue decorated");
//             resolve();
//         },3000)
        
//     })
// }
// function arrangedDj(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("dj arranged");
//             resolve();
//         },3000)
        
//     })
// }

// orderFood()
// .then(()=>decoratedVenue())
// .then(()=>arrangedDj())
// .then(()=>{console.log("all task completed");
// })

// //THIS PROGRAM IS SUCCESSFULLY WORKING AND COMPLETED



