                  //// TO DO LIST ////

let inp = document.querySelector('input')
let btn = document.querySelector('button')
let ul = document.querySelector('ul')

btn.addEventListener('click',()=>{
    let data = inp.value      //// the text of ul will be stored in data
    let li = document.createElement('li')
    li.innerText = data       //// to store the li text in data

    ul.append(li)
    inp.value = ''            /////reset the input value
})