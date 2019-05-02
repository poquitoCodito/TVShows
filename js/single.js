var movieId = localStorage.getItem('movieId');
var xhttp = new XMLHttpRequest();
var url = "http://api.tvmaze.com/shows/" + movieId;


xhttp.open("GET", url, true);
xhttp.send();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(xhttp.response);

        var imageElement = document.createElement("img");
        imageElement.src = data.image.original;
        var imageContainer = document.querySelector('.image-div');
        imageContainer.appendChild(imageElement);

        
        var container = document.getElementsByClassName("summary-div")[0];
        var summaryElement = document.createElement("div");
        summaryElement.innerHTML = data.summary;

        container.appendChild(summaryElement);


        var genresElement = document.createElement("ul");
        var genres = document.getElementsByClassName("genres-div")[0];
        genres.appendChild(genresElement);
        
        data.genres.forEach(function(genre){
            var genreEl = document.createElement('li');
            var genreText = document.createTextNode(genre);
            genreEl.appendChild(genreText);
            genresElement.appendChild(genreEl);
        });

        var titleEl = document.createElement("div");
        var titleText = document.createTextNode(data.name);
        titleEl.appendChild(titleText);
        var title = document.getElementsByClassName("title-div")[0];
        title.appendChild(titleEl);

        var ratingEl = document.createElement("div");
        var ratingText = document.createTextNode(data.rating.average);
        ratingEl.appendChild(ratingText);
        var rating = document.getElementsByClassName("rating-div")[0];
        rating.appendChild(ratingEl);
    }
}
