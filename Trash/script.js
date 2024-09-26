
let container = document.querySelector('.movies-container');
let searchButton = document.getElementById('searchButton');
let searchInput = document.getElementById('searchInput');
let moviesData = [];

// Function to display movies based on the search
function displayMovies(movies) {
    container.innerHTML = ''; // Clear previous movie cards
    movies.forEach((val) => {
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
}

// Function to fetch all movies
async function fetchMovies() {
    try {
        let res = await fetch('https://api.sampleapis.com/movies/action-adventure');
        let data = await res.json();
        moviesData = data; // Store data for search functionality
        displayMovies(moviesData); // Display all movies initially
    } catch (error) {
        console.log(error);
    }
}

// Function to search movies based on user input
function searchMovies() {
    let searchTerm = searchInput.value.toLowerCase();
    let filteredMovies = moviesData.filter((movie) =>
        movie.Title.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies); // Display filtered movies
}

// Event listener for search button
searchButton.addEventListener('click', searchMovies);

// Fetch and display movies when the page loads
fetchMovies();
