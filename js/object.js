//creating an object is giving the arraay data into a {}------------
// example :a={name:'shifas',age:21,class:12}
//putting the many object into an aray---------------
a=[
    ab={name:'shifas',age:21},
    ab={name:'gireesh',age:21},
    mb={name:'maneesh',age:21},
    gh={name:'arun',age:21,class:12},
]
//console.log(a);
js=JSON.stringify(a);  //{this is used to convert list of object to string     //}------------------------------------
console.log(js);

Ob=JSON.parse(js);       //{this code is used to convert the converted string converting back to object}-----------------
console.log(a);       

//printing the names from array   !!!!-names only
for(i=0;i<Ob.length;i++)
{
    console.log(a[i].name);
    console.log(a[i].age);
    console.log(a[i].class);
}

//--------------------------------------------------------
b=[]                                                  
let m={name:'shifas',number:863578576}                 //adding a new list into an array  
b.push(m);
console.log(b);
//-----------------------------------------------------------

//adding a list of data
c=[]
while (true) {
    option=prompt("1.enter task\n2.display task\n3.edit task\n4.delete task\n5.exit\nEnter your option");
    if (option==1)
    {
        let datas={name:name,phone:num}
        name=prompt("enter your name")
        num=prompt("enter your number")
        
        c.push(datas);
        
    }
    else if (option==2)
    {

        str=""
        for(i=0;i<Ob.length;i++)
        {
            str+=`[${i+1}] {$c[i].name} {$c[i].phone}`
        }

    }

    
}