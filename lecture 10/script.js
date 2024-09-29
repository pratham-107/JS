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



let form = document.getElementById('#signup');
form.addEventListener('submit', () => {
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let pass = document.querySelector('#pass')

    let data = {
        name: name,
        email:email,
        pass:pass
    }
    localStorage.setItem('user',JSON.stringify(data))
});



let login = document.getElementById('#login');
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let name = document.querySelector('#login-name')
    let email = document.querySelector('#login-email')
    let pass = document.querySelector('#login-pass')


    localStorage.getItem('user',JSON.parse(data))

    if(name=== data.name && email === data.email && pass === data.pass){
        console.log('login success')
    }
    else{
        console.log('login failed')
    }
})