// document.getElementById('searchButton').addEventListener('click', () => {
//     let searchText = document.getElementById('search-movie').value;

//     fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`).then((res) => {
//         return res.json()
//     }).then((data) => {
//         console.log(data);

//         let movieContainer = document.getElementById('movie-container');

//         data.forEach((movie) => {
//             let card = document.createElement('div');
//             card.classList.add('card');
//             card.innerHTML = `<img src="${movie.show.image.medium}""> <h3>${movie.show.name}</h3> <p><strong>Year:</strong> ${movie.show.ended}</p> <p><strong>Language:</strong> ${movie.show.language}</p>`;
//             movieContainer.appendChild(card);
//         });
//     })
// })

document.getElementById('searchButton').addEventListener('click', () => {
    const searchText = document.getElementById('search-movie').value;
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = ''; // Clear previous results

    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
        .then(res => res.json())
        .then(data => {
            data.forEach(movie => {
                const { name, language, ended, image } = movie.show;
                const card = `
                    <div class="card">
                        <img src="${image?.medium || 'placeholder.jpg'}" alt="${name}">
                        <h3>${name}</h3>
                        <p><strong>Year:</strong> ${ended || 'N/A'}</p>
                        <p><strong>Language:</strong> ${language}</p>
                    </div>`;
                movieContainer.innerHTML += card;
            });
        });
});
