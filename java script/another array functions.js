

// //ANOTHER ARRAY FUNCTIONS

// //THERE ARE ANOTHER 5 ARRAY FUNCTIONS

// //  1. for each()
// in for each it print the array element 
// ob=[
//     {name:"shifu",age:21,dep:"mern"},
//     {name:"amal",age:22,dep:"mern"},
//     {name:"hari",age:22,dep:"mern"},
//     {name:"amal",age:22,dep:"mern"}
// ]

// ob.forEach((item,index) => {
//     console.log(item.name);
// });

// 2. find
// it is used to fetch an peticular or specific object or data it is used to find the spesific element thet inside the array
// it return object which contain different datatype  
// ob=[
//     {name:"shifu",age:21,dep:"mern"},
//     {name:"amal",age:22,dep:"mern"},
//     {name:"hari",age:22,dep:"mern"}
// ]

// let x=ob.find((item,index)=>{
//    return item.name=="amal"
// })
// console.log(x);

//3. filter
//filter is used to fetch the same type of data , it displays the both the same datas
// ob=[
//     {name:"shifu",age:21,dep:"mern"},
//     {name:"amal",age:22,dep:"mern"},
//     {name:"hari",age:22,dep:"mern"},
//     {name:"amal",age:22,dep:"mern"}
// ]

// let char=ob.filter((item,index)=>{
//     return item.name==="amal"
// })

// console.log(char);

//4.  map

//map is also performed like for each it is used to display the  whole object inside the array

// ob=[
//     {name:"shifu",age:21,dep:"mern"},
//     {name:"amal",age:22,dep:"mern"},
//     {name:"hari",age:22,dep:"mern"},
//     {name:"amal",age:22,dep:"mern"}
// ]

// let y=ob.map((item,index)=>{
//   console.log(item);
// })

//  4. reduce

//the reduce is used to display the last item or object in an array and also we can find the total in reduce  the argument inside the arrow function is total and item

// ob=[
//     {name:"shifu",age:21,dep:"mern"},
//     {name:"amal",age:22,dep:"mern"},
//     {name:"hari",age:22,dep:"mern"}
// ]
 //TO FIND THE LAST ELEMENT
//   const nam=ob.reduce((total,item)=>{
//       return item
//   })
//   console.log(nam);

//TO FIND THE TOTAL SUM OF AGE IN THE OB ARRAY
// const z=ob.reduce((total,item)=>{
//    return total+=item.age
// },0)
// console.log(z);
//here we give an comma and zero (,0) at the last ending of the arrow function it is the initialisation of total 
