// i=1;
// while(i<=10)
// {
//     console.log(i);
//     i+=2;
    
// }

// // do while loop---------------
// n=2;
// do{
//     console.log(n);
//     n=n+2;

// }
// while (n<=10);

// // for loop--------------

// for(s=1;s<=100;s++)
// {
//     console.log(s);
    
// }
// printing sum of first 10 numbers
// for(i=1;i<=10;i++)
// {
//     sum=0;
//     sum=sum+i;
// }
//     console.log(sum);
number =365;
sum= 0;
while(number > 0)
    {
 sum =sum+number%10;
 number=Math.floor(number/10);
    }
console.log(sum);


