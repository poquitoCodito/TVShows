var xhttp = new XMLHttpRequest();
var url = "http://api.tvmaze.com/shows";


xhttp.open("GET", url, true);
xhttp.send();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(xhttp.response);


        data.forEach(function (movie) {
            var movieCard = document.createElement("div");
            var imageElement = document.createElement("img");
            var cardBody = document.createElement("div");
            var titleElement = document.createElement("h4");
            var buttonElement = document.createElement("a");

            var container = document.getElementsByClassName("row")[0];
            var titleText = document.createTextNode(movie.name);
            var buttonText = document.createTextNode("click for more");

            imageElement.src = movie.image.original;
            titleElement.appendChild(titleText);
            buttonElement.appendChild(buttonText);

            container.appendChild(movieCard);
            movieCard.appendChild(imageElement);
            movieCard.appendChild(cardBody);
            cardBody.appendChild(titleElement);
            cardBody.appendChild(buttonElement);

            buttonElement.classList = 'btn-click btn';
            imageElement.classList.add("card-img-top");
            movieCard.classList.add("card");
            titleElement.classList.add("card-title");
            cardBody.classList.add("card-body");

            buttonElement.setAttribute("data-show-id", movie.id);

            buttonElement.addEventListener('click', function () {
                var movieId = buttonElement.getAttribute('data-show-id');
                localStorage.setItem('movieId', movieId);
                window.location = 'single.html';
            });
        });
    }
}