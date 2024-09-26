// fetch('https://dummyjson.com/recipes').then((res)=>{
//     return res.json()

// }).then((data)=>{
//     console.log(data)
// })



// let btn = document.querySelector('button')

// btn.addEventListener('click',()=>{
//     let inp = document.querySelector('input')
//     let city = inp.value

//     let h2 = document.querySelector('h2')
//     let apikey = '9f6290d6cda9a36a63755fadee71f83d'
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
// .then((res)=>{
//     return res.json()

// }).then((data)=>{
//     console.log(data);
//     h2.innerText = `${data.main.temp} 
//      ${data.main.pressure}`
    
    
// })
    
// })





// let btn = document.getElementById('getWeather');

// btn.addEventListener('click', () => {
//     let inp = document.getElementById('cityInput');
//     let city = inp.value;
    
//     let h2 = document.querySelector('.weather-info h2');
//     let apikey = '9f6290d6cda9a36a63755fadee71f83d';
    
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//         h2.innerText = `Temperature: ${data.main.temp}°C\nPressure: ${data.main.pressure} hPa`;
//     })
//     .catch((error) => {
//         h2.innerText = 'City not found. Please try again.';
//     });
// });








// fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies').then((res)=>{
//     return res.json()

// }).then((data)=>{
//     console.log(data);




let container = document.querySelector('div');

async function fetchMovies() {
    try {
        let res = await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
        let data = await res.json();
        
        data.map((val) => {
            // Create card container
            let card = document.createElement('div');
            card.classList.add('movie-card');

            // Create title, year, and runtime elements
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let h3 = document.createElement('h3');

            h2.innerText = val.Title;
            p.innerText = `Year: ${val.Year}`;
            h3.innerText = `Runtime: ${val.Runtime}`;

            // Append elements to the card
            card.append(h2, p, h3);

            // Append card to the container
            container.append(card);
        });

    } catch (error) {
        console.log(error);
    }
}

fetchMovies();
