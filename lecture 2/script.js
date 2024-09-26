//Array methods //

// let arr = [1,2,3,4,5,6,7,8,9,10]

//for each//

// let newA = arr.forEach((a,b,c)=>{

//     // console.log(c);

//     return c
    
// });
// console.log(newA, 'hi');

//map function//
// let newB = arr.map((a,b,c)=>{
//     return b*2
// });
// console.log(newB);





//filter method//

//find
// let arr=[1,2,3,4,5,6,7,8,9,10,3,3,3,]
// let a = arr.find((a)=>{
//     return a==3
// });
// console.log(a);

//filter//
// let b = arr.filter((a)=>{
//     return a==3
// })
// console.log(b);

//reduce//
// let arr = [11,22,36,44,56,66,72,1,2,10,20]
// let sum = arr.reduce((a,b,c)=>{
//     return a+b
// })
// console.log(sum);







// let arr = [1,2,3,4,5,6,7,8,9]
// let a = arr.filter((a)=>{
//     return a >= 2
// }).filter((ele)=>{
//     return ele % 2 == 1
// }).reduce((sum,ele1)=>{
//     return sum + ele1
// })
// console.log(a);







//ARRAY OF OBJECT//
// let arr = [
//     {
//         id:1,
//         name:"Rahul"
//     },
//     {
//         id:2,
//         name:"karan"
//     }
// ]

// arr.map((a)=>{
//     console.log(a.id);
//     console.log(a.name);
    
// })  