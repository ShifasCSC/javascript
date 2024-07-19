// a=["hello",1,true,null,"hai",2,false,"day",null]
// console.log(a);
// console.log(a[7]);
// console.log(a.length);
// a.push("item")
// console.log(a.join(" "));
// console.log(a.indexOf(true));
// console.log(a);
// a.pop()//to delete the last item from the array
// console.log(a);
// a.shift()//to delete first item from the array
// console.log(a);
// a.splice(a.indexOf(false),1)//to delete data from the centre of the array
// console.log(a);

// //creating an empty array adn adding data into it

// b=[]

// b.push("hello")
// console.log(b);


// //PRINT FIZZ BUZZ BY 

// n=[]
// num =prompt("enter a number")
// console.log("you are entered"+num);
// for(i=1;i<=num;i++)
// {
//     if (i%3==0 && i%5==0) 
//     {
//         n.push("fizzbuzz");
    
//     } 
//     else if (i%5==0)
//     {
//         n.push("buzz");
                                        
//     } 
//    else if(i%3==0)
//     {
//         n.push("fizz");
//     }
//    else 
//     {
//         n.push(i);
    
//     }
// }
// console.log(n);



// TODAYS NEW TASK----------------------------------------------
a=[]
while (true) {
    
    num =prompt("1, addtask\n2,displaytask\n3,edittask\n4,deletetask\n5,exit\n Enter your choice!!!");
    if(num==1)
        {
            value=prompt("enter the value");
            a.push(value)
            
        }
        else if (num==2) 
            {
            str="";
            for(i=0;i<a.length;i++)
            {
               str+=`[${i+1}] ${a[i]}\n`
            }
             alert(str)

              
                
            }
            else if (num==3)
            {
                edit=prompt("enter the value to edit")
                value=prompt("enter data for replace")
                a[i-1]=value


            } 
            else if (num==4)
            {
                del=prompt("enter the value for delete")
                a.splice(del-1,1)
    
            } 
            else if(num==5)
            {
              break;
            }
            else {
                alert("invalid input");
    
            }
        }