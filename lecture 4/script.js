                        //  CALLBACK HELL   //

//  function step1(fn){
//     setTimeout(()=>{
//         console.log("photo select");
//         fn();
//     },4000)
//  }   
 
//  function step2(fn){
//     setTimeout(()=>{
//         console.log("filter applied");
//         fn();
//     },3000)
//  }  

//  function step3(fn){
//     setTimeout(()=>{
//         console.log("captions added");
//         fn();
//     },2000)
//  }  

//  function step4(){
//     setTimeout(()=>{
//         console.log("photo posted");
//     },1000)
//  }  

//  step1(function(){
//     step2(function(){
//         step3(function(){
//             step4();
//         })
//     })
//  })




                      // PROMISES // 

// let promise = new Promise((res,rej)=>{
//     let age = 18;
//     setTimeout(()=>{
//         if(age>=18){
//             console.log("you can drive");
//         }
//         else{
//             console.log("you cant drive");
//         }
//     },2000)
// })        
// promise.then((res)=>{
//     console.log("res");
// }).catch((rej)=>{
//     console.log(rej);
    
// })              

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("photo select");
//             resolve();
//         }, 4000);
//     });
// }

// function step2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("filter applied");
//             resolve();
//         }, 3000);
//     });
// }

// function step3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("captions added");
//             resolve();
//         }, 2000);
//     });
// }

// function step4() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("photo posted");
//             resolve();
//         }, 1000);
//     });
// }

// Using Promises to keep the same order and timing
// step1()
//     .then(step2)
//     .then(step3)
//     .then(step4)
//     .catch((err) => {
//         console.error("Error occurred:", err);
//     });




// function step1(){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("photo select");
//             res()
//         },4000)
//     })
// }
// function step2(){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("filter applied");
//             res()
//         },3000)
//     })
// }
// function step3(){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("captions added");
//             res()
//         },2000)
//     })
// }
// function step4(){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("photo posted");
//             res()
//         },1000)
//     })
// }

// step1().then((data)=>{
//     console.log(data);
//     return step2().then((data)=>{
//         console.log(data);
//         return step3().then((data)=>{
//             console.log(data);
//             return step4().then((data)=>{
//                 console.log(data);
//             })
//         })
//     })
// })

                 // CALLING FUNCTION THROUGH ASYNC AWAIT  //

// async function call(){
//     let data = await step1();
//     console.log(data);

//     let data2 = await step2();
//     console.log(data2);

//     let data3 = await step3();
//     console.log(data3);

//     let data4 = await step4();
//     console.log(data4);
// }
// call();



// async function call(){
//     await step1()
//     await step2()
//     await step3()
//     await step4()
// }
// call();


                       ////// CLOSURE //////
// function outer(){
//     let data = 5;
//     console.log('outer');
//     function inner(){
//         console.log('data');
//     }
//     return inner   
// }
// let a = outer()
// a()








