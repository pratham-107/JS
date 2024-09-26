document.getElementById('searchButton').addEventListener('click', () => {
    let searchText = document.getElementById('search-movie').value;

    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);

        let movieContainer = document.getElementById('movie-container');

        data.forEach((movie) => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<img src="${movie.show.image.medium}""> <h3>${movie.show.name}</h3> <p><strong>Year:</strong> ${movie.show.ended}</p> <p><strong>Language:</strong> ${movie.show.language}</p>`;
            movieContainer.appendChild(card);
        });
    })
})