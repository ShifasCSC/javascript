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

OB=[
    {name:"shifas",age:21,dep:"mern",salary:50000},
    {name:"aman",age:21,dep:"soft",salary:50000},
    {name:"amal",age:21,dep:"front",salary:50000},
    {name:"hari",age:21,dep:"back",salary:50000}
]

// for(i in OB){
//     console.log(OB[i].name);
// }
for(i=0;i<=OB;i++)
{
    console.log(OB[i].dep);
}