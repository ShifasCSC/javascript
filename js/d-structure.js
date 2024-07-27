//spread meathode------with array------------

// let a=[1,2,3,4,5,6]

// b=[a]--------normal
// b=[...a]-------------spread method it denoted by three dots inside an array
// b[0]=10
// console.log(a);
// console.log(b);


//-------spread methoid ------with object----------
//let c={name:"shifas",age:21,job:"mern stack developer"}

//d={c}------normal
//d={...c}//--this is the spread type so it display both the shifas and alan
// c.name="alan"//-----------used to replace the name shifas into alan currently it changed or replaced by alan but shifas is not display while normal "d={c}"
// console.log(c);
// console.log(d);

//-------with out the spread methoid in this case it actually we are calling the an array which inside of an another array so when we replace the value of the array or object of the array by new second variable it takes the whole index  of the first array into that new assigned value so when we use spread methoid we can assign the new value with the old current values of first array


//----------- fetching data from  object
         //single-----OBJECT
 //ob={name:"shifas",dep:"mern",age:21,salary:50000}
 //------------------------------------
// name=ob.name;
// dep=ob.dep;  --------     //this is a lengthy code instead writing or calling like this we can use another by using "let" which showned below 
// age=ob.age;
// salary=ob.salary;
//------------------------------------
// let {name,dep,salary,age}=ob
// --------------------------------------
//  console.log(name,dep,age,salary);
//  console.log(ob);

// -------------------fetching data from array

            //single---ARRAY
// x=[1,2,3,4]
// -----------------------------
// a=x[0];
// b=x[1];    //--------instead of calling like this we can use "let" methoid 
// c=x[2];
// d=x[3];
// ------------------------------
// let=[a,b,c,d]=x  //---------shortest methoid to display or fetching data from an array
// console.log(a,b,c,d);

//-----from NESTED OBJECT-----------
// ob={name:"shifas",age:21,dep:"mern",skill:{db:"mongo db,sql",frame:"react,veu",backend:"node,python,java"}}
// // console.log(ob.skill.frame);--------------------this is not a proper way
// let {name,dep,salary,skill:{db,frame,backend}}=ob
// console.log(name,dep,salary,backend);
//------------------------------------------

//----------data fetch from NESTED ARRAY----------
// karray=[{name:"shifu",age:21},1,2,3,4,]
// let [{name,age},a,b,c,d]=karray
// console.log(a,b,c,d,name,age);









