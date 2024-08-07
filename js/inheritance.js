       
// //        INHERITANCE
// //        single inheritance
//        class main{
//         name=this.name;
//         eat(){
//                 console.log(`${this.name}is eating his food`);
//         }
//        }
//        class sub extends main{
//         name="kareem"
//         walk(){
//                 console.log(`${this.name} he is walking`);
//         }
//        }
//        const k=new sub()
//        k.eat()
//        k.walk()

//        MULTILEVEL
// class grandfather{
//         name="grand father"
//         farmer(){
//                 console.log(`${this.name} is a farmer`);
//         }
// }
//  class father extends grandfather{
//         name="father"
//         driver()
//         {
//                 console.log(`${this.name} is a driver`);
//         }
//  }
//  class son extends father{
//         name="son";
//         developer(){
//                  console.log(`${this.name} is a mern developer`)
//         }
//  }
//  const f=new father()
//  f.farmer()
//  f.driver()
//  const s=new son()
//  s.developer()
//  s.driver()
//  s.farmer()






// hirarcheal inheritance

//         class father{
//             alive=true;
//             name=this.name
//             sleep(){
//                 console.log(`${this.name} is sleeping`);
//             }
//         }
//         class son1 extends father{
//            name="hari"
//         }
//         class son2 extends father{
//             name="varun"
//         }
//         const Son1=new son1()
//         Son1.sleep()
//         const Son2=new son2()
//         Son2.sleep()
//         console.log(Son1.alive);


        // HYBRID INHERITANCE

        // class grandfather{
        //                 name="grand father"
        //                 farmer(){
        //                         console.log(`${this.name} is a farmer`);
        //                 }
        //         }
        //          class father extends grandfather{
        //                 name="father"
        //                 driver()
        //                 {
        //                         console.log(`${this.name} is a driver`);
        //                 }
        //          }
        //          class son extends father{
        //                 name="son";
        //                 developer(){
        //                          console.log(`${this.name} is a mern developer`)
        //                 }
        //          }
        //          class daughter extends father{
        //           name="daughter"
        //           doctor(){
        //                 console.log(`${this.name} is a doctor `);
        //           }
        //          }
        //          const f=new father()
        //          f.farmer()
        //          f.driver()
        //          const s=new son()
        //          s.developer()
        //          s.driver()
        //          s.farmer()
        //          const d=new daughter()
        //          d.developer()
        //          d.driver()
        //          d.doctor()


        // //SINGLE INHERITANCE
        // //BY USING CONSTRUCTERS

// class person{
//     constructor(name){
//         this.name=name
//     }

//     hello(){
//         console.log(`hello world this is ${this.name} and im ${this.age} years old`);
//     }

// }

// class Manu extends person{
//     constructor(age){
//         super('manu');
//         this.age=age;
//     }
//     walk(){
//         console.log(`${this.name} walk with friends`);
//     }

// }
// const my=new Manu(21)
// my.hello();
// my.walk()



