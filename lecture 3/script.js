// HOISTING

// let a = 5
// {
//     let a = 10
//     console.log(a);
// }
// console.log(a);


// var a = 5;  
// {
//     var a = 10;
//     console.log(a);
// }
// console.log(a);


// const a =5;
// {
//     const a =10;
//     console.log(a);
// }
// console.log(a);



                                          // HIGHER ORDER FUNCTION //

// function outer(){
//     console.log('a');
//     a();
// }
// outer(function(){
//     console.log('inner');
// })


// function outer(){
//     console.log('hieee');
//     function inner(){
//         console.log('inner');
//     }
//     return inner;
// }
// let inner = outer()
// inner()
// outer()



// let arr= [1,2,3,4,5,"hello","hi",true,false]
// function number(){
//     return arr.filter((a)=>{
//         return typeof a === "number"
//     })
// }
// console.log(number(arr));

// function string(){
//     return arr.filter((b)=>{
//         return typeof b === "string"
//     })
// }
// console.log(string(arr));

// function boolean(){
//     return arr.filter((c)=>{
//         return typeof c === "boolean"
//     })
// }
// console.log(boolean(arr));


                             // ASYNCHRONOUS // 
setTimeout(()=>{
    console.log('A');
},1000);

setTimeout(()=>{
    console.log('B');
},2000);

setTimeout(()=>{
    console.log('zero');
},0);

console.log('two');
console.log('three');
