function Movie (image, title) {
    this.image = "./img/" + image;
    this.title = title;
};

var movie01 = new Movie("img01.jpg", "Avengers");
var movie02 = new Movie("img02.jpg", "Aladin");
var movie03 = new Movie("img03.jpg", "Toy Story 4");
var movie04 = new Movie("img04.jpg", "Annabelle comes home");
var movie05 = new Movie("img05.jpg", "John Wick: Chapter 3");
var movie06 = new Movie("img06.jpg", "Spiderman");
var movie07 = new Movie("img07.jpg", "Dark Phoenix");
var movie08 = new Movie("img08.jpg", "Godzilla");
var movie09 = new Movie("img09.jpg", "Fast & Furious");
var movie10 = new Movie("img10.jpg", "Us");
var movie11 = new Movie("img11.jpg", "The Lion King");
var movie12 = new Movie("img12.jpg", "Late Night");
var movie13 = new Movie("img13.jpg", "Captain Marvel");
var movie14 = new Movie("img14.jpg", "Crawl");
var movie15 = new Movie("img15.jpg", "Dumbo");
var movie16 = new Movie("img16.jpg", "Gameover");
var movie17 = new Movie("img17.jpg", "Men in black");
var movie18 = new Movie("img18.jpg", "Aquaman");
var movie19 = new Movie("img19.jpg", "Shaft");
var movie20 = new Movie("img20.jpg", "Batman");

var moviePage = {
    logo: "./img/logo.png",
    name: "Blockbuster",
    placeholder: "Search",
};

var movieList = [movie01, movie02, movie03, movie04, movie05, movie06, movie07, movie08, movie09, movie10, movie11, movie12, movie13, movie14, movie15, movie16, movie17, movie18, movie19, movie20];

var header = document.createElement("div");
header.setAttribute("id", "header");
document.body.appendChild(header);

var logo = document.createElement("img");
logo.setAttribute("src", moviePage.logo);
logo.setAttribute("class", "logo");
logo.setAttribute("alt", moviePage.name)
header.appendChild(logo);

var inputSearch = document.createElement("input");
inputSearch.setAttribute("id", "input");
inputSearch.setAttribute("placeholder", moviePage.placeholder);
document.body.appendChild(inputSearch);

var searchBtn = document.createElement("button");
searchBtn.setAttribute("id", "search-button");
searchBtn.textContent = "Pretraga";
document.body.appendChild(searchBtn);

var movieContainer = document.createElement("div");
movieContainer.setAttribute("class", "movie-container");
document.body.appendChild(movieContainer);

function createMovie(i) {

    var movieCard = document.createElement("div");
    movieCard.setAttribute("class", "movie-card");

    var movieImage = document.createElement("img");
    movieImage.setAttribute("src", movieList[i].image);
    movieCard.appendChild(movieImage);

    var movieTitle = document.createElement("h3");
    movieTitle.setAttribute("class", "movie-title");
    movieTitle.textContent = movieList[i].title;
    movieCard.appendChild(movieTitle);

    var movieDelete = document.createElement("div");
    movieDelete.setAttribute("class", "movie-delete");
    movieDelete.textContent = "X";
    movieCard.prepend(movieDelete);

    return movieCard;

};

function addMovies(arr) {
    for (var i = 0; i < arr.length; i++) {
        movieContainer.appendChild(createMovie(i));
    }
}


function onSearch(movieList) {
    addMovies(movieList);

    var searchField = document.getElementById("input");
    var searchButton = document.querySelector("#search-button");

    searchButton.addEventListener("click", function () {
        var valueInput = searchField.value.toLowerCase();
        // console.log(value);
        var searchMovie = document.querySelectorAll(".movie-card");
        var listMovies = [];

        for (var i = 0; i < searchMovie.length; i++) {
            listMovies.push(searchMovie[i]);
        };

        for (let j = 0; j < listMovies.length; j++) {
            let title = listMovies[j].getElementsByClassName("movie-title")[0];

            if (title.innerHTML.toLowerCase().indexOf(valueInput) > -1) {
                listMovies[j].style.display = "";
            } else {
                listMovies[j].style.display = "none";
            }
        }


    });
}



function deleteMovie () {
    var deleteBtn = document.querySelectorAll(".movie-delete");

    deleteBtn.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            var removeMovie = e.target.parentElement;
            removeMovie.parentNode.removeChild(removeMovie);
        });
    });
}

onSearch(movieList);
deleteMovie();



