console.log(this);
function asd()
{
    console.log(this);
}
asd()
// -----------------
person={
    name:"shifas",
    age:21,
    getName(){
        console.log(person.name);
        console.log(person.age);
    }
}
person.getName()

// ---------------------------------------

person={
    name:"shifas",
    age:21,
    getName:function(){
        console.log(this.name)

}
}
person.getName()
// --------------------------------------------------
// calling more than one object by using a functoin with "this" 

function getName(){
    console.log(this.name);
}
person1={
        name:"shifas",
        age:21,
        mtd:getName
    
    }
    person2={
            name:"shifu",
            age:21,
            mtd:getName
        
        }
        
    person1.mtd()
        person2.mtd()
// -----------------------------------------------------
//call and apply---

function getName(a,b,c){
    console.log(a,b,c);
        console.log(this.name);
    }
    person1={
            name:"shifas",
            age:21,
        
        };
        person2={
                name:"shifu",
                age:21,
            };
            getName.call(person1,"1","2","3")
            getName.apply(person2,["1","2","3"])
        // --------------------------------------------------------
        // using bind------

        function getName(){
                
                    console.log(this.name);
                }
                person1={
                        name:"shifas",
                        age:21,
                    
                    };
                    person2={
                            name:"shifu",
                            age:21,
                        };
                        getName.call(person1)
                        getName.apply(person2)  
                        const name=getName.bind(person1)    
                        name(); 
    // ---------------------------------------------------------------
    // closure taking student name or from various object by using this in simple methoid

std1={name:"allu",age:32}
std2={name:"malu",age:32}
std3={name:"lallu",age:32}
std4={name:"kallu",age:32}
function asd()
    {
        console.log(this.name);
    }
    asd.call(std1)
    asd.call(std2)
    asd.apply(std3)
   const x= asd.bind(std4)
   x()
