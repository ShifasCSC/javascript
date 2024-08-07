///-----30/07/2024/
// array functions

//REDUCE--------
ob=[
    {name:"shifas",age:21},
    {name:"hari",age:21},
    {name:"amal",age:21},
    {name:"devi",age:21}
]
    //TO PRINT THE LAST OBJECT
// const val=ob.reduce((total,item)=>{
//     return item
// })
// console.log(val);

     //TO TAKE THE TOTAL OF ALL AGES
     const tot=ob.reduce((total,item)=>{
        return total+=item.age

     },0)
     console.log(tot);
