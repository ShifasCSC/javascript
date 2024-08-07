
// //class and objects
// class vehicle{
//     wheel;
//     color;
//     constructor(wheel,color){
//         console.log("this is constructor");
//         this.wheel=wheel;
//         this.color=color;
//     }

//     working(){
//         console.log("car is in working condition","wheel=",this.wheel,"color=",this.color);
//     }
// }

// //OBJECT
// car=new vehicle(4,"black");
// car.working()

//geter and setter methoid

//BEFORE SETTERS

// class button{
//     constructor(name){
//         this.button=document.createElement('button');
//         this.button.innerHTML=name;
//         document.body.appendChild(this.button);
//     }
//     setWidth(width){
//         this.button.style.width=width+'px';
        
//     }
//     setHeight(height){
//         this.button.style.height=height+'px';
//     }
// }
// btn=new button("my button")
// btn.setHeight(200);
// btn.setWidth(200);

// // AFTER SETTER

// class button{
//     constructor(name){
//         this.button=document.createElement('button');
//         this.button.innerHTML=name;
//         document.body.appendChild(this.button);
//     }
//     set height(height){
//        this.button.style.height=height+"px";
//     }
//     set width(width){
//         this.button.style.width=width+"px";
//     }
// }
// objbtn=new button("click here")
// objbtn.height=200;
// objbtn.width=200;

//BEFORE GETTERS

