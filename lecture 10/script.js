                                //AXIOS//

// async function api(){
//     try{
//         let data = await axios('https://dummyjson.com/recipes')
//         console.log(data);
        
//     }catch{
//         console.log('error')
//     }
// }
// api()


                               ///LOCAL STORAGE//
    
// localStorage.setItem('user','pratham')   

// let data  = localStorage.getItem('user')
// console.log(data);



                   //form//

// let form = document.querySelector('form')
// let btn = document.getElementsByClassName('btn')
// btn.addEventListener('submit',()=>{
//     let data = localStorage.getItem('name','email','password')
//     console.log(data);
// })           



// let form = document.getElementById('#signup');


// form.addEventListener('submit', () => {
//     let name = document.querySelector('#name')
//     let email = document.querySelector('#email')
//     let pass = document.querySelector('#pass')

//     let data = {
//         name: name,
//         email:email,
//         pass:pass
//     }
//     localStorage.setItem('user',JSON.stringify(data))
// });



// let login = document.getElementById('#login');
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     let name = document.querySelector('#login-name')
//     let email = document.querySelector('#login-email')
//     let pass = document.querySelector('#login-pass')


//     localStorage.getItem('user',JSON.parse(data))

//     if(name=== data.name && email === data.email && pass === data.pass){
//         console.log('login success')
//     }
//     else{
//         console.log('login failed')
//     }

// })



// Signup form
let form = document.getElementById('signup');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Get the input values
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let pass = document.querySelector('#pass').value;

    // Create data object
    let data = {
        name: name,
        email: email,
        pass: pass
    };

    // Store data in localStorage
    localStorage.setItem('user', JSON.stringify(data));
    console.log('Signup successful:', data);
});


// Login form
let login = document.getElementById('login');

login.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Get the input values
    let name = document.querySelector('#login-name').value;
    let email = document.querySelector('#login-email').value;
    let pass = document.querySelector('#login-pass').value;

    // Retrieve and parse stored data from localStorage
    let data = JSON.parse(localStorage.getItem('user'));

    if (data && name === data.name && email === data.email && pass === data.pass) {
        console.log('Login success');
    } else {
        console.log('Login failed');
    }
});
