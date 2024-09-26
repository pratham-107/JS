                ////STYLING USING DOM ////
// let h2 = document.querySelectorAll('h2');
// for(let i of h2){
//     i.style.color = 'blue';
// }






             ///creating element using DOM ///
// let div = document.querySelector('div')
// let h2 = document.createElement('h2')
// h2.innerText = 'heelo'
// div.appendChild(h2)
// console.log(div);







             //// creating attributes using DOM   /////

// let a = document.querySelector('a')
// console.log( a.getAttribute('href'));
// a.setAttribute('href','http://flipkart.com')









// const arr = [
//     'https://images.unsplash.com/photo-1721332154161-847851ea188b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
//     'https://plus.unsplash.com/premium_photo-1725873536636-9f8133411637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
//     'https://images.unsplash.com/photo-1726597764489-5ba1c00a178a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'
// ];
// const imageE1 = document.querySelector('img');
// imageE1.style.height = "500px"; 
// imageE1.style.width = "500px";

// let num = 0;
// setInterval(function(){
//     imageE1.setAttribute('src', arr[num]);
//     num = (num + 1) % arr.length;
// }, 1000); // 

// console.log(imageE1);





                       //// EVENTLISTENER ////
    //// ONCLICK ////
               
    //   function fun1(){
    //     console.log('hiiiiiii');
    //   }                 


    // let btn = document.querySelector('button')
    // btn.onclick = function(){
    //     console.log('hello');
    // }

// let btn = document.querySelector('button')
//     btn.addEventListener('click',function(){
//         console.log('hello');
//     })




                        ///// CLICK EVENT USING DOM /////
 
// let btn = document.querySelector('button') 
// let body = document.querySelector('body')
// let h2 = document.querySelector('h2')

// btn.addEventListener('click',function(){
//     h2.innerText = 'hello'
//     body.style.backgroundColor = 'red'
// })





                           ///// INPUT USING DOM /////

// let inp = document.querySelector('input')
// inp.addEventListener('input', (e)=>{
//     // console.log('heheheh');
//     console.log(e.target.value);
    
// })                

 

                           //// FORM INPUT DISPLAY ////

// let form = document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log(form.elements[0].value);
//     console.log(form.elements[1].value);
// })






                        ///// CALCULATOR //// 


// let btn = document.querySelectorAll('button')
// let inp = document.querySelector('#display')

// for(let btn of button){
//     btn.addEventListener('click', (e) => {
//         let data = e.target.innertext
//         console.log(data);

//         if(data === "AC"){
//             inp.value = ""
//         }
//         else if(data === "="){
//             inp.value = eval(inp.value)
//         }
//         else{
//             inp.value += data
//         }
//     })
// }








