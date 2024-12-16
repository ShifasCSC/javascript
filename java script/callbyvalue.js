// function asd()//call by value
// {
//     var a=10;
//     bsd(a)
//     console.log("inside bsd a="+a);
// }
// function bsd(b)
// {
//     b+=1;
//     console.log("inside bsd b="+b);
// }
// asd()

//-------------------------------------------------------------
//CALL BY REFERENCE

// function asd()
// {
//     var a=[10];
//     bsd(a)
//     console.log("a="+a[0]);
// }
// function bsd(b)
// {
//     b[0]+=1;
//     console.log("b="+b[0]);
// }
// asd()
//here the o/p is a=11 and b=11
//because in call by reference the value of array a is not given to b only give the array address of to b so both of a and b can acess the values inside the array of "a"
//in call by value the variable is stored in stack and in call by reference the array value is stored in heap
//in stack the value is dissapear after the ending of the function

//CLOSURE------------------------------------------------------------------------------------------------------------------------------------
// function asd(a,b)
// {
//     function myfun()
//     {
//     c=a+b;
//     return c;
// }
// // return myfun();
// return myfun;
// }
// // console.log(asd(10,20));
// let x=asd(10,20);
// // console.dir(x);
// // console.dir(x());
// let y=x();
// // console.log(y);
// console.dir(y);
//closure is the lexical environment inside the function 
//lexical environment means a function have another function inside in it it is called lexical